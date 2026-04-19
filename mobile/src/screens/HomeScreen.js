import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { NAV_CLASSES } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroEyebrow}>✨ 1M+ Students Learning</Text>
          <Text style={styles.heroTitle}>Master Your{'\n'}<Text style={styles.accent}>Future</Text> Today</Text>
          <Text style={styles.heroSub}>Topic-by-topic learning for Class 6–12, JEE & NEET with expert guidance.</Text>
        </View>

        {/* Classes Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Classes</Text>
          <View style={styles.grid}>
            {NAV_CLASSES.map((cls) => (
              <TouchableOpacity 
                key={cls.id} 
                style={styles.classCard}
                onPress={() => navigation.navigate('Class', { classId: cls.id, label: cls.label })}
              >
                <Text style={styles.classIcon}>📚</Text>
                <Text style={styles.classLabel}>{cls.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Featured Teachers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Expert Teachers</Text>
            <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.teacherScroll}>
            {Object.keys(TEACHERS).slice(0, 3).map(key => (
              <View key={key} style={styles.teacherCard}>
                <Text style={styles.teacherAvatar}>{TEACHERS[key][0].avatar}</Text>
                <Text style={styles.teacherName}>{TEACHERS[key][0].name}</Text>
                <Text style={styles.teacherSub}>{TEACHERS[key][0].subject}</Text>
                <View style={styles.ratingBox}>
                  <Text style={styles.rating}>⭐ {TEACHERS[key][0].rating}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  hero: {
    backgroundColor: '#1e1b4b',
    padding: 24,
    paddingTop: 40,
    paddingBottom: 40,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  heroEyebrow: {
    color: '#f97316',
    fontWeight: '800',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 38,
  },
  accent: {
    color: '#f97316',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 15,
    marginTop: 12,
    lineHeight: 22,
  },
  section: {
    padding: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1e1b4b',
    marginBottom: 16,
  },
  viewAll: {
    color: '#4f46e5',
    fontWeight: '700',
    fontSize: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  classCard: {
    width: (width - 48 - 12) / 2,
    backgroundColor: '#f8fafc',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  classIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  classLabel: {
    fontWeight: '700',
    color: '#1e1b4b',
    fontSize: 15,
  },
  teacherScroll: {
    paddingRight: 24,
  },
  teacherCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  teacherAvatar: {
    fontSize: 40,
    marginBottom: 8,
  },
  teacherName: {
    fontWeight: '800',
    color: '#1e1b4b',
    fontSize: 14,
    textAlign: 'center',
  },
  teacherSub: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
    textAlign: 'center',
  },
  ratingBox: {
    backgroundColor: '#fffbeb',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 10,
  },
  rating: {
    fontSize: 11,
    fontWeight: '800',
    color: '#b45309',
  }
});
