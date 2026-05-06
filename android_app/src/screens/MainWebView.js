import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { RotateCcw } from 'lucide-react-native';
import { PROD_URL, COLORS } from '../constants';
import { INJECTED_JAVASCRIPT } from '../utils/injection';
import TopLoadingBar from '../components/TopLoadingBar';

const MainWebView = forwardRef(function MainWebView(
  { onNavigationStateChange, onMessage },
  ref
) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);

  useImperativeHandle(ref, () => ({
    goBack:     () => webViewRef.current?.goBack(),
    reload:     () => { setError(false); setLoading(true); webViewRef.current?.reload(); },
    injectJS:   (js) => webViewRef.current?.injectJavaScript(js),
    navigateTo: (path) => {
      webViewRef.current?.injectJavaScript(
        `window.history.pushState({},'','${path}');
         window.dispatchEvent(new PopStateEvent('popstate',{state:{}}));
         true;`
      );
    },
  }));

  const handleLoadStart = useCallback(() => { setLoading(true);  setError(false); }, []);
  const handleLoadEnd   = useCallback(() => { setLoading(false); },                []);
  const handleError     = useCallback(() => { setLoading(false); setError(true);  }, []);

  return (
    <View style={styles.container}>

      {/* Thin top progress bar — never blocks touches */}
      <TopLoadingBar loading={loading} />

      <WebView
        ref={webViewRef}
        source={{ uri: PROD_URL }}
        style={styles.webview}

        javaScriptEnabled
        injectedJavaScript={INJECTED_JAVASCRIPT}
        injectedJavaScriptBeforeContentLoaded="window.__NATIVE_APP__=true; true;"

        domStorageEnabled
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction={false}

        bounces={false}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}

        cacheEnabled
        cacheMode="LOAD_DEFAULT"
        mixedContentMode="compatibility"

        onNavigationStateChange={onNavigationStateChange}
        onMessage={onMessage}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        onHttpError={handleError}

        allowFileAccess
        androidLayerType="hardware"
        userAgent="OnlineStudyHub/1.0 (Android; Mobile) ReactNative"
      />

      {/* Error screen */}
      {error && (
        <View style={styles.errorScreen}>
          <Text style={styles.errorEmoji}>😕</Text>
          <Text style={styles.errorTitle}>Couldn't load page</Text>
          <Text style={styles.errorSub}>
            Check your internet connection and try again.
          </Text>
          <TouchableOpacity
            style={styles.retryBtn}
            onPress={() => { setError(false); setLoading(true); webViewRef.current?.reload(); }}
          >
            <RotateCcw size={15} color="#fff" strokeWidth={2.5} />
            <Text style={styles.retryText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
});

export default MainWebView;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f8' },
  webview:   { flex: 1, backgroundColor: 'transparent' },

  errorScreen: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    gap: 10,
    zIndex: 20,
  },
  errorEmoji: { fontSize: 48, marginBottom: 4 },
  errorTitle: { fontSize: 18, fontWeight: '800', color: COLORS.primary, textAlign: 'center' },
  errorSub:   { fontSize: 13, color: COLORS.textMuted, textAlign: 'center', lineHeight: 20 },
  retryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    backgroundColor: COLORS.accent,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    elevation: 3,
  },
  retryText: { color: '#fff', fontSize: 14, fontWeight: '800' },
});
