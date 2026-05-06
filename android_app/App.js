/**
 * OnlineStudyHub — Android/iOS App
 * React Native + Expo + WebView hybrid
 *
 * Architecture:
 *   Native shell (header + tab bar) wraps a single WebView.
 *   The web app runs at https://www.onlinestudyhub.com and the native
 *   CSS injection hides its header/footer so native chrome takes over.
 *   Tab navigation is done via client-side history.pushState injection.
 *   A JS bridge allows web→native communication (share, haptics, etc.).
 */

import React, {
  useRef, useState, useEffect, useCallback,
} from 'react';
import {
  View, StyleSheet, BackHandler, Share, Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import NativeHeader  from './src/components/NativeHeader';
import NativeTabBar  from './src/components/NativeTabBar';
import MainWebView   from './src/screens/MainWebView';
import SplashScreen  from './src/screens/SplashScreen';

import { PROD_URL, TABS, getTabFromUrl } from './src/constants';

// How long to show the branded splash before revealing the WebView
const SPLASH_MS = 2200;

export default function App() {
  const webRef = useRef(null);

  // ── App state ───────────────────────────────────────────────────
  const [showSplash,  setShowSplash]  = useState(true);
  const [activeTab,   setActiveTab]   = useState('home');
  const [canGoBack,   setCanGoBack]   = useState(false);
  const [currentUrl,  setCurrentUrl]  = useState(PROD_URL);
  const [pageTitle,   setPageTitle]   = useState('');
  const [lang,        setLang]        = useState('en'); // 'en' | 'hi'

  // ── Splash timer ────────────────────────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_MS);
    return () => clearTimeout(timer);
  }, []);

  // ── Hardware back button (Android) ───────────────────────────────
  useEffect(() => {
    const handler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (canGoBack) {
        webRef.current?.goBack();
        return true;
      }
      return false; // let system handle (exit app)
    });
    return () => handler.remove();
  }, [canGoBack]);

  // ── WebView navigation state change ─────────────────────────────
  const handleNavigationStateChange = useCallback((navState) => {
    setCanGoBack(navState.canGoBack);
    if (navState.url) {
      setCurrentUrl(navState.url);
      setActiveTab(getTabFromUrl(navState.url));
    }
  }, []);

  // ── Messages from the web (JS bridge) ───────────────────────────
  const handleMessage = useCallback((event) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);

      switch (data.type) {
        case 'navigate':
          if (data.url) {
            setCurrentUrl(data.url);
            setActiveTab(getTabFromUrl(data.url));
          }
          break;

        case 'titleChange':
          if (data.title) {
            // Strip the site name suffix for cleaner header
            setPageTitle(
              data.title
                .replace(/ ?[—–-] ?OnlineStudyHub.*$/, '')
                .replace(/ ?[—–-] ?Online.*$/, '')
                .trim()
            );
          }
          break;

        case 'share':
          Share.share({
            message: data.title ? `${data.title}\n${data.url || currentUrl}` : (data.url || currentUrl),
            url: data.url || currentUrl,
            title: data.title || 'OnlineStudyHub',
          }).catch(() => {});
          break;

        case 'haptic':
          // expo-haptics is optional — silently skip if not installed
          try {
            const Haptics = require('expo-haptics');
            const style = data.style === 'heavy' ? Haptics.ImpactFeedbackStyle.Heavy
              : data.style === 'medium' ? Haptics.ImpactFeedbackStyle.Medium
              : Haptics.ImpactFeedbackStyle.Light;
            Haptics.impactAsync(style);
          } catch {}
          break;

        default:
          break;
      }
    } catch {}
  }, [currentUrl]);

  // ── Tab press ───────────────────────────────────────────────────
  const handleTabPress = useCallback((tab) => {
    setActiveTab(tab.key);
    webRef.current?.navigateTo(tab.path);

    // Haptic tap feedback
    try {
      const Haptics = require('expo-haptics');
      Haptics.selectionAsync();
    } catch {}
  }, []);

  // ── Header actions ───────────────────────────────────────────────
  const handleBack = useCallback(() => {
    webRef.current?.goBack();
  }, []);

  const handleReload = useCallback(() => {
    webRef.current?.reload();
  }, []);

  const handleShare = useCallback(() => {
    Share.share({
      message: `${pageTitle ? pageTitle + '\n' : ''}${currentUrl}`,
      url: currentUrl,
      title: pageTitle || 'OnlineStudyHub',
    }).catch(() => {});
  }, [currentUrl, pageTitle]);

  const handleAIDoubt = useCallback(() => {
    // Trigger the AI doubt button in the web app
    webRef.current?.injectJS(
      `var btn = document.querySelector('.nav-ai-btn, [data-ai-btn], .ai-doubt-btn');
       if (btn) { btn.click(); }
       else {
         // Fallback: navigate to search with AI mode
         window.nativePostMessage && window.nativePostMessage({ type: 'navigate', url: window.location.origin + '/search?ai=1' });
       }
       true;`
    );
  }, []);

  const handleLangToggle = useCallback(() => {
    const newLang = lang === 'en' ? 'hi' : 'en';
    setLang(newLang);
    // Trigger language toggle in the web app
    webRef.current?.injectJS(
      `var btn = document.querySelector('.lang-toggle-btn, [data-lang-toggle]');
       if (btn) btn.click();
       true;`
    );
  }, [lang]);

  // ── Render ───────────────────────────────────────────────────────
  if (showSplash) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.root} edges={['top', 'bottom']}>
          <StatusBar style="light" backgroundColor="#1e1b4b" />
          <SplashScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root} edges={['top']}>
        <StatusBar style="light" backgroundColor="#1e1b4b" />

        {/* ── Native Header ── */}
        <NativeHeader
          canGoBack={canGoBack}
          onBack={handleBack}
          onReload={handleReload}
          onShare={handleShare}
          onAIDoubt={handleAIDoubt}
          onLangToggle={handleLangToggle}
          lang={lang}
          pageTitle={pageTitle}
        />

        {/* ── Main WebView ── */}
        <MainWebView
          ref={webRef}
          onNavigationStateChange={handleNavigationStateChange}
          onMessage={handleMessage}
        />

        {/* ── Native Tab Bar ── */}
        <NativeTabBar
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1e1b4b',
  },
});
