import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { getSubject, getSubjectColor, SUBJECT_META } from '../data/curriculum';

export default function SubjectScreen({ route, navigation }) {
  const { classId, subjectId } = route.params;
  const [search, setSearch] = useState('');
  
  const subject = getSubject(classId, subjectId);
  const meta = SUBJECT_META[subjectId] || {};

  if (!subject) return <View style={styles.center}><Text>Subject not found</Text></View>;

  const filteredTopics = subject.topics.filter(t => 
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    (t.subtopics && t.subtopics.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder={`Search ${meta.label || subjectId} topics...`}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.countText}>{filteredTopics.length} topics found</Text>
        
        {filteredTopics.map((topic, index) => (
          <TouchableOpacity 
            key={topic.id} 
            style={styles.topicCard}
            onPress={() => navigation.navigate('Topic', { 
              classId, 
              subjectId, 
              topicId: topic.id,
              title: topic.title 
            })}
          >
            <View style={styles.topicHeader}>
              <View style={styles.numBadge}>
                <Text style={styles.numText}>{index + 1}</Text>
              </View>
              <View style={styles.qaBadge}>
                <Text style={styles.qaText}>{topic.qa?.length || 0} Q&A</Text>
              </View>
            </View>
            
            <Text style={styles.topicTitle}>{topic.title}</Text>
            {topic.subtopics && (
              <Text style={styles.topicSub}>{topic.subtopics}</Text>
            )}
            
            <View style={styles.footer}>
              <Text style={styles.startText}>Start Learning</Text>
              <Text style={styles.arrow}>→</Text>
            </View>
          </TouchableOpacity>
        ))}
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  searchContainer: { padding: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e2e8f0' },
  searchInput: { backgroundColor: '#f1f5f9', padding: 12, borderRadius: 12, fontSize: 14, color: '#1e1b4b' },
  scrollContent: { padding: 16 },
  countText: { fontSize: 12, color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: 16, marginLeft: 4 },
  topicCard: { backgroundColor: '#fff', borderRadius: 20, padding: 20, marginBottom: 16, borderWidth: 1, borderColor: '#e2e8f0', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 },
  topicHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  numBadge: { width: 28, height: 28, borderRadius: 8, backgroundColor: '#eef2ff', alignItems: 'center', justifyContent: 'center' },
  numText: { fontSize: 12, fontWeight: '800', color: '#4f46e5' },
  qaBadge: { backgroundColor: '#f0fdf4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  qaText: { fontSize: 10, fontWeight: '700', color: '#16a34a' },
  topicTitle: { fontSize: 18, fontWeight: '800', color: '#1e1b4b', marginBottom: 4 },
  topicSub: { fontSize: 13, color: '#64748b', lineHeight: 18, marginBottom: 16 },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTopWidth: 1, borderTopColor: '#f1f5f9' },
  startText: { fontSize: 13, fontWeight: '700', color: '#4f46e5' },
  arrow: { fontSize: 16, color: '#4f46e5', fontWeight: '700' }
});
