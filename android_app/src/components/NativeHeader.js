import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft, RotateCcw, Share2, Bot } from 'lucide-react-native';
import { COLORS } from '../constants';

export default function NativeHeader({
  canGoBack, onBack, onReload, onShare,
  onAIDoubt, onLangToggle, lang, pageTitle,
}) {
  return (
    <View style={styles.header}>

      {/* Left — back arrow OR logo */}
      {canGoBack ? (
        <TouchableOpacity style={styles.iconBtn} onPress={onBack} hitSlop={HIT}>
          <ArrowLeft size={19} color={COLORS.white} strokeWidth={2.3} />
        </TouchableOpacity>
      ) : (
        <Text style={styles.logo}>
          Online<Text style={styles.logoAccent}>Study</Text>Hub
        </Text>
      )}

      {/* Centre — page title when navigated */}
      {canGoBack && pageTitle ? (
        <Text style={styles.pageTitle} numberOfLines={1}>{pageTitle}</Text>
      ) : (
        <View style={styles.spacer} />
      )}

      {/* Right — actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.langPill} onPress={onLangToggle} hitSlop={HIT}>
          <Text style={styles.langText}>{lang === 'en' ? 'हिं' : 'EN'}</Text>
        </TouchableOpacity>

        {canGoBack && (
          <TouchableOpacity style={styles.iconBtn} onPress={onReload} hitSlop={HIT}>
            <RotateCcw size={15} color="rgba(255,255,255,.8)" strokeWidth={2} />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.iconBtn} onPress={onShare} hitSlop={HIT}>
          <Share2 size={15} color="rgba(255,255,255,.8)" strokeWidth={2} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.aiPill} onPress={onAIDoubt} hitSlop={HIT}>
          <Bot size={14} color="#fff" strokeWidth={2.2} />
          <Text style={styles.aiText}>Ask AI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const HIT = { top: 10, bottom: 10, left: 8, right: 8 };

const styles = StyleSheet.create({
  header: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: COLORS.primary,
    gap: 8,
    // subtle bottom separator
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.28,
    shadowRadius: 6,
  },

  /* Logo */
  logo: {
    fontSize: 18,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: -0.4,
    flexShrink: 0,
  },
  logoAccent: { color: COLORS.accent },

  /* Page title */
  pageTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.9)',
  },
  spacer: { flex: 1 },

  /* Right-side cluster */
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 0,
  },

  /* Square icon button */
  iconBtn: {
    width: 32,
    height: 32,
    borderRadius: 9,
    backgroundColor: 'rgba(255,255,255,0.09)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* EN | हिं pill */
  langPill: {
    height: 32,
    paddingHorizontal: 9,
    borderRadius: 9,
    backgroundColor: 'rgba(255,255,255,0.09)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  langText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  /* Ask AI pill */
  aiPill: {
    flexDirection: 'row',
    height: 32,
    paddingHorizontal: 11,
    borderRadius: 9,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    elevation: 2,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  aiText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
});
