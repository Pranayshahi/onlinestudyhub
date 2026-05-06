import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { COLORS } from '../constants';

export default function SplashScreen() {
  const logoOpacity  = useRef(new Animated.Value(0)).current;
  const logoY        = useRef(new Animated.Value(20)).current;
  const tagOpacity   = useRef(new Animated.Value(0)).current;
  const barWidth     = useRef(new Animated.Value(0)).current;
  const dot1         = useRef(new Animated.Value(0.3)).current;
  const dot2         = useRef(new Animated.Value(0.3)).current;
  const dot3         = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    // Logo entry
    Animated.parallel([
      Animated.timing(logoOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.spring(logoY, { toValue: 0, friction: 8, tension: 90, useNativeDriver: true }),
    ]).start(() => {
      // Tag line
      Animated.timing(tagOpacity, { toValue: 1, duration: 350, useNativeDriver: true }).start();
      // Progress bar
      Animated.timing(barWidth, {
        toValue: 1, duration: 1600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: false,
      }).start();
    });

    // Breathing dots
    const pulse = (dot, delay) => Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(dot, { toValue: 1,   duration: 550, useNativeDriver: true }),
        Animated.timing(dot, { toValue: 0.3, duration: 550, useNativeDriver: true }),
      ])
    ).start();
    pulse(dot1, 0);
    pulse(dot2, 180);
    pulse(dot3, 360);
  }, []);

  return (
    <View style={styles.container}>
      {/* Decorative circles */}
      <View style={styles.circleTop} />
      <View style={styles.circleBot} />

      {/* Logo */}
      <Animated.View style={{ opacity: logoOpacity, transform: [{ translateY: logoY }] }}>
        <Text style={styles.logo}>
          Online<Text style={styles.accent}>Study</Text>Hub
        </Text>
      </Animated.View>

      {/* Tagline */}
      <Animated.Text style={[styles.tag, { opacity: tagOpacity }]}>
        India's Free Learning Platform
      </Animated.Text>

      {/* Progress bar */}
      <Animated.View style={styles.barTrack}>
        <Animated.View
          style={[
            styles.barFill,
            {
              width: barWidth.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </Animated.View>

      {/* Dots */}
      <Animated.View style={[styles.dotsRow, { opacity: tagOpacity }]}>
        {[dot1, dot2, dot3].map((d, i) => (
          <Animated.View key={i} style={[styles.dot, { opacity: d }]} />
        ))}
      </Animated.View>

      {/* Version */}
      <Animated.Text style={[styles.version, { opacity: tagOpacity }]}>
        v1.0.0
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    gap: 14,
    overflow: 'hidden',
  },
  /* Decorative background circles */
  circleTop: {
    position: 'absolute',
    top: -80,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(249,115,22,0.06)',
  },
  circleBot: {
    position: 'absolute',
    bottom: -60,
    left: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(129,140,248,0.08)',
  },
  logo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: -0.6,
    textAlign: 'center',
  },
  accent: { color: COLORS.accent },
  tag: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
    fontWeight: '600',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  barTrack: {
    width: '70%',
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 999,
    overflow: 'hidden',
    marginTop: 4,
  },
  barFill: {
    height: '100%',
    backgroundColor: COLORS.accent,
    borderRadius: 999,
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.accent,
  },
  version: {
    position: 'absolute',
    bottom: 32,
    fontSize: 11,
    color: 'rgba(255,255,255,0.25)',
    fontWeight: '600',
    letterSpacing: 0.4,
  },
});
