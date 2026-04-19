import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { getClass, SUBJECT_META } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';

export default function ClassScreen({ route, navigation }) {
  const { classId } = route.params;
  const classData = getClass(classId);
  const teacher = TEACHERS[classId]?.[0];

  if (!classData) return <View style={styles.center}><Text>Class not found</Text></View>;

  const subjectIds = Object.keys(classData.subjects);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Summary */}
        <View style={styles.header}>
          <Text style={styles.emoji}>{classData.emoji}</Text>
          <Text style={styles.title}>{classData.label}</Text>
          <Text style={styles.desc}>{classData.description}</Text>
          
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statVal}>{subjectIds.length}</Text>
              <Text style={styles.statLabel}>Subjects</Text>
            </View>
            <View style={[styles.stat, styles.borderLeft]}>
              <Text style={styles.statVal}>{classData.board}</Text>
              <Text style={styles.statLabel}>Board</Text>
            </View>
          </View>
        </View>

        {/* Subjects List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Subjects</Text>
          {subjectIds.map(sid => {
            const meta = SUBJECT_META[sid] || {};
            const subject = classData.subjects[sid];
            return (
              <TouchableOpacity 
                key={sid} 
                style={styles.subjectCard}
                onPress={() => navigation.navigate('Subject', { 
                  classId, 
                  subjectId: sid,
                  label: meta.label || sid 
                })}
              >
                <View style={styles.subjectIconBox}>
                  <Text style={styles.subjectIcon}>{meta.icon || '📘'}</Text>
                </View>
                <View style={styles.subjectInfo}>
                  <Text style={styles.subjectTitle}>{meta.label || sid}</Text>
                  <Text style={styles.subjectMeta}>{subject.topics.length} topics • Video & Notes</Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Primary Teacher */}
        {teacher && (
          <View style={styles.teacherSection}>
            <Text style={styles.sectionTitle}>Your Class Teacher</Text>
            <View style={styles.teacherBox}>
              <Text style={styles.teacherAvatar}>{teacher.avatar}</Text>
              <View style={styles.teacherDetails}>
                <Text style={styles.teacherName}>{teacher.name}</Text>
                <Text style={styles.teacherInfo}>{teacher.qualification}</Text>
                <TouchableOpacity style={styles.chatBtn}>
                  <Text style={styles.chatBtnText}>Connect for Deep Learn</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: { padding: 24, backgroundColor: '#f8fafc', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#e2e8f0' },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: { fontSize: 24, fontWeight: '900', color: '#1e1b4b', marginBottom: 8 },
  desc: { fontSize: 14, color: '#64748b', textAlign: 'center', lineHeight: 20, marginBottom: 20 },
  statsRow: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 16, padding: 16, width: '100%', borderWidth: 1, borderColor: '#e2e8f0' },
  stat: { flex: 1, alignItems: 'center' },
  borderLeft: { borderLeftWidth: 1, borderLeftColor: '#e2e8f0' },
  statVal: { fontSize: 16, fontWeight: '800', color: '#1e1b4b' },
  statLabel: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  section: { padding: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1e1b4b', marginBottom: 16 },
  subjectCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#f1f5f9' },
  subjectIconBox: { width: 48, height: 48, borderRadius: 12, backgroundColor: '#f1f5f9', alignItems: 'center', justifyContent: 'center' },
  subjectIcon: { fontSize: 24 },
  subjectInfo: { flex: 1, marginLeft: 16 },
  subjectTitle: { fontSize: 16, fontWeight: '700', color: '#1e1b4b' },
  subjectMeta: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  chevron: { fontSize: 24, color: '#cbd5e1', marginLeft: 8 },
  teacherSection: { padding: 24, paddingTop: 0 },
  teacherBox: { flexDirection: 'row', backgroundColor: '#1e1b4b', borderRadius: 24, padding: 20, alignItems: 'center' },
  teacherAvatar: { fontSize: 48, marginRight: 20 },
  teacherDetails: { flex: 1 },
  teacherName: { fontSize: 16, fontWeight: '800', color: '#fff' },
  teacherInfo: { fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4, marginBottom: 12 },
  chatBtn: { backgroundColor: '#f97316', paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8, alignSelf: 'flex-start' },
  chatBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' }
});
