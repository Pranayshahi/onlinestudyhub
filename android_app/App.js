import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler, ActivityIndicator, TouchableOpacity, Text, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Home, BookOpen, Search, User, Bot, Moon } from 'lucide-react-native';

const WEBSITE_URL = 'http://192.168.1.6:3001'; 

// Inject CSS to hide the footer and any other web-specific clutter
const INJECTED_JAVASCRIPT = `
  (function() {
    var style = document.createElement('style');
    style.innerHTML = \`
      /* Hide the massive web footer and top navbar */
      .footer, .navbar { display: none !important; }
      
      /* Add some bottom padding to the body so content doesn't get hidden behind native tabs */
      body { padding-bottom: 70px !important; }
      /* Adjust top padding if necessary since navbar is gone */
      body { padding-top: 0 !important; }
    \`;
    document.head.appendChild(style);
  })();
  true; // Note: true is required for Android
`;

export default function App() {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Handle hardware back button on Android
  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => backHandler.remove();
  }, [canGoBack]);

  const navigateTo = (path, tabName) => {
    setActiveTab(tabName);
    if (webViewRef.current) {
      // Inject JS to trigger React Router client-side navigation without full page reload
      webViewRef.current.injectJavaScript(
        "window.history.pushState({}, '', '" + path + "'); window.dispatchEvent(new Event('popstate')); true;"
      );
    }
  };

  const triggerAIDoubt = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(
        "var btn = document.querySelector('.nav-ai-btn'); if(btn) btn.click(); true;"
      );
    }
  };

  const toggleDarkMode = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(
        "var btn = document.querySelector('.dark-toggle-btn'); if(btn) btn.click(); true;"
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#1e1b4b" />
      
      {/* Native Header */}
      <View style={styles.nativeHeader}>
        <Text style={styles.headerTitle}>
          Online<Text style={{color: '#f97316'}}>Study</Text>Hub
        </Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerBtn} onPress={toggleDarkMode}>
            <Moon size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.headerBtn, styles.headerAiBtn]} onPress={triggerAIDoubt}>
            <Bot size={18} color="#fff" />
            <Text style={styles.headerAiText}>AI Doubt</Text>
          </TouchableOpacity>
        </View>
      </View>

      <WebView
        ref={webViewRef}
        source={{ uri: WEBSITE_URL }}
        style={styles.webview}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
          // Try to guess active tab based on URL
          if (navState.url.includes('/classes')) setActiveTab('classes');
          else if (navState.url.includes('/search')) setActiveTab('search');
          else if (navState.url.includes('/student-portal') || navState.url.includes('/teacher-portal') || navState.url.includes('/login')) setActiveTab('profile');
          else setActiveTab('home');
        }}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#f97316" />
          </View>
        )}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        bounces={false}
        overScrollMode="never"
      />

      {/* Custom Native Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        {[
          { key: 'home',    icon: Home,     label: 'Home',    path: '/' },
          { key: 'classes', icon: BookOpen,  label: 'Classes', path: '/classes' },
          { key: 'search',  icon: Search,    label: 'Search',  path: '/search' },
          { key: 'profile', icon: User,      label: 'Profile', path: '/login' },
        ].map(({ key, icon: Icon, label, path }) => {
          const isActive = activeTab === key;
          return (
            <TouchableOpacity
              key={key}
              style={styles.tabItem}
              onPress={() => navigateTo(path, key)}
              activeOpacity={0.7}
            >
              <View style={[styles.tabIconWrap, isActive && styles.tabIconWrapActive]}>
                <Icon
                  size={20}
                  color={isActive ? '#f97316' : '#9ca3af'}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
              </View>
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1b4b',
    paddingTop: Constants.statusBarHeight,
  },

  /* ── Native Header ── */
  nativeHeader: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#1e1b4b',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.15)',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  headerAiBtn: {
    flexDirection: 'row',
    width: 'auto',
    height: 38,
    borderRadius: 12,
    paddingHorizontal: 14,
    gap: 6,
    backgroundColor: '#f97316',
    borderWidth: 0,
  },
  headerAiText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  /* ── WebView ── */
  webview: {
    flex: 1,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    zIndex: 10,
  },

  /* ── Bottom Tab Bar ── */
  bottomTabBar: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 82 : 66,
    backgroundColor: '#ffffff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e5e7eb',
    elevation: 20,
    shadowColor: '#1e1b4b',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    paddingBottom: Platform.OS === 'ios' ? 18 : 4,
    paddingTop: 4,
    paddingHorizontal: 8,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  tabIconWrap: {
    width: 44,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  tabIconWrapActive: {
    backgroundColor: '#fff3e6',
  },
  tabLabel: {
    fontSize: 10,
    color: '#9ca3af',
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  tabLabelActive: {
    color: '#f97316',
    fontWeight: '800',
  },
});
