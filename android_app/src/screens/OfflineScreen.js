import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { WifiOff } from 'lucide-react-native';
import { COLORS } from '../constants';

export default function OfflineScreen({ onRetry }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.spring(slideAnim, { toValue: 0, friction: 8, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={[styles.container, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
    >
      <View style={styles.iconWrap}>
        <WifiOff size={48} color={COLORS.textMuted} strokeWidth={1.5} />
      </View>
      <Text style={styles.title}>You're Offline</Text>
      <Text style={styles.sub}>
        Check your internet connection and try again.{'\n'}
        Your study progress is saved locally.
      </Text>
      <TouchableOpacity style={styles.btn} onPress={onRetry} activeOpacity={0.82}>
        <Text style={styles.btnText}>Try Again</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  sub: {
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  btn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 14,
    elevation: 3,
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
});
