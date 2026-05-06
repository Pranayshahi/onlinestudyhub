import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Home, BookOpen, Search, LayoutDashboard, User
} from 'lucide-react-native';
import { COLORS, TABS } from '../constants';

const ICONS = { Home, BookOpen, Search, LayoutDashboard, User };

function TabItem({ tab, isActive, onPress }) {
  const Icon = ICONS[tab.icon];
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const dotOpacity = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: isActive ? 1.08 : 1,
        useNativeDriver: true,
        friction: 8,
        tension: 120,
      }),
      Animated.timing(dotOpacity, {
        toValue: isActive ? 1 : 0,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isActive]);

  return (
    <TouchableOpacity
      style={styles.tabItem}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Animated.View
        style={[
          styles.iconWrap,
          isActive && styles.iconWrapActive,
          { transform: [{ scale: scaleAnim }] },
        ]}
      >
        {Icon && (
          <Icon
            size={21}
            color={isActive ? COLORS.accent : COLORS.textMuted}
            strokeWidth={isActive ? 2.4 : 1.8}
          />
        )}
      </Animated.View>

      <Text style={[styles.label, isActive && styles.labelActive]}>
        {tab.label}
      </Text>

      {/* Active dot */}
      <Animated.View style={[styles.dot, { opacity: dotOpacity }]} />
    </TouchableOpacity>
  );
}

export default function NativeTabBar({ activeTab, onTabPress }) {
  const insets = useSafeAreaInsets();
  // Add system navigation bar height so tab bar sits above it
  const bottomPad = Math.max(insets.bottom, Platform.OS === 'ios' ? 20 : 0) + 6;

  return (
    <View style={[styles.bar, { paddingBottom: bottomPad }]}>
      {TABS.map(tab => (
        <TabItem
          key={tab.key}
          tab={tab}
          isActive={activeTab === tab.key}
          onPress={() => onTabPress(tab)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLORS.border,
    paddingTop: 6,
    paddingHorizontal: 4,
    elevation: 24,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    paddingVertical: 2,
    position: 'relative',
  },
  iconWrap: {
    width: 42,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  iconWrapActive: {
    backgroundColor: COLORS.accentLight,
  },
  label: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.textMuted,
    letterSpacing: 0.1,
  },
  labelActive: {
    color: COLORS.accent,
    fontWeight: '800',
  },
  dot: {
    position: 'absolute',
    bottom: -2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.accent,
  },
});
