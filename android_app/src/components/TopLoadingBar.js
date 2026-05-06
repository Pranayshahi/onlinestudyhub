import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';
import { COLORS } from '../constants';

export default function TopLoadingBar({ loading }) {
  const progress = useRef(new Animated.Value(0)).current;
  const opacity  = useRef(new Animated.Value(0)).current;
  const runRef   = useRef(null);

  useEffect(() => {
    if (loading) {
      // Show instantly and crawl to 85 % (never reaches 100 on its own)
      Animated.timing(opacity, { toValue: 1, duration: 80, useNativeDriver: false }).start();
      progress.setValue(0);
      runRef.current = Animated.timing(progress, {
        toValue: 0.82,
        duration: 2400,
        easing: Easing.out(Easing.quad),
        useNativeDriver: false,
      });
      runRef.current.start();
    } else {
      // Slam to 100 % then fade out
      runRef.current?.stop();
      Animated.sequence([
        Animated.timing(progress, { toValue: 1, duration: 180, useNativeDriver: false }),
        Animated.timing(opacity,  { toValue: 0, duration: 280, delay: 80, useNativeDriver: false }),
      ]).start(() => progress.setValue(0));
    }
  }, [loading]);

  return (
    <Animated.View style={[styles.track, { opacity }]} pointerEvents="none">
      <Animated.View
        style={[
          styles.bar,
          {
            width: progress.interpolate({
              inputRange:  [0, 1],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  track: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2.5,
    backgroundColor: 'transparent',
    zIndex: 999,
  },
  bar: {
    height: '100%',
    backgroundColor: COLORS.accent,
    // glow effect
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 2,
  },
});
