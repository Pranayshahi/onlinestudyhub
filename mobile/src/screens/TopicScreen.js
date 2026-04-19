import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { getTopic, getSubjectColor, SUBJECT_META } from '../data/curriculum';
import { TEACHERS } from '../data/teachers';

const { height: screenHeight } = Dimensions.get('window');

function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity style={styles.accordionHeader} onPress={onToggle}>
        <View style={styles.qNum}><Text style={styles.qNumText}>Q{index + 1}</Text></View>
        <Text style={styles.questionText}>{item.q}</Text>
        <Text style={styles.chevron}>{isOpen ? '▼' : '›'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.accordionBody}>
          <Text style={styles.answerText}>{item.a}</Text>
        </View>
      )}
    </View>
  );
}

export default function TopicScreen({ route }) {
  const { classId, subjectId, topicId } = route.params;
  const [openQA, setOpenQA] = useState(null);
  
  const topic = getTopic(classId, subjectId, topicId);
  const colorKey = getSubjectColor(subjectId);
  const meta = SUBJECT_META[subjectId] || {};
  const teachers = TEACHERS[classId] || [];
  const teacher = teachers[0]; // Simplified for now

  if (!topic) return <View style={styles.center}><Text>Topic not found</Text></View>;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; padding: 0; margin: 0; color: #374151; line-height: 1.6; font-size: 16px; }
          h4 { color: #1e1b4b; font-size: 18px; margin-top: 24px; margin-bottom: 8px; font-weight: 700; }
          p { margin-bottom: 16px; }
          ul, ol { padding-left: 20px; margin-bottom: 16px; }
          li { margin-bottom: 8px; }
          strong { color: #1e1b4b; font-weight: 700; }
          .example-box { background: #f8fafc; border-left: 4px solid #f97316; padding: 16px; margin: 20px 0; border-radius: 0 12px 12px 0; }
          .formula { background: #eef2ff; color: #4f46e5; padding: 12px; border-radius: 8px; font-family: monospace; font-weight: 700; margin: 16px 0; }
        </style>
      </head>
      <body>${topic.content}</body>
    </html>
  `;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Topic Header */}
        <View style={styles.header}>
          <View style={styles.metaRow}>
            <Text style={styles.metaBadge}>{meta.icon} {meta.label}</Text>
            <Text style={styles.metaBadge}>Class {classId.split('-')[1]}</Text>
          </View>
          <Text style={styles.title}>{topic.title}</Text>
          <Text style={styles.subtopics}>Covers: {topic.subtopics}</Text>
        </View>

        <View style={styles.content}>
          {/* Definition */}
          <View style={styles.definitionBox}>
            <Text style={styles.defLabel}>📌 DEFINITION</Text>
            <Text style={styles.defText}>{topic.definition}</Text>
          </View>

          {/* WebContent */}
          <View style={{ height: screenHeight * 0.4 }}>
            <WebView 
              originWhitelist={['*']}
              source={{ html: htmlContent }}
              style={styles.webView}
              scrollEnabled={true}
            />
          </View>

          {/* Q&A Section */}
          <View style={styles.qaSection}>
            <Text style={styles.sectionTitle}>Exam Questions</Text>
            {topic.qa?.map((item, index) => (
              <AccordionItem 
                key={index}
                item={item}
                index={index}
                isOpen={openQA === index}
                onToggle={() => setOpenQA(openQA === index ? null : index)}
              />
            ))}
          </View>

          {/* Teacher CTA */}
          {teacher && (
            <View style={styles.teacherCTA}>
              <Text style={styles.teacherEmoji}>{teacher.avatar}</Text>
              <View style={styles.teacherInfo}>
                <Text style={styles.ctaTitle}>Struggling with this topic?</Text>
                <Text style={styles.ctaSub}>Book a deep-learn session with {teacher.name.split(' ')[0]}</Text>
                <TouchableOpacity style={styles.ctaBtn}>
                  <Text style={styles.ctaBtnText}>Connect Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  header: { padding: 24, backgroundColor: '#1e1b4b' },
  metaRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  metaBadge: { backgroundColor: 'rgba(255,255,255,0.15)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, fontSize: 10, color: '#fff', fontWeight: '700', textTransform: 'uppercase' },
  title: { fontSize: 26, fontWeight: '900', color: '#fff', marginBottom: 8 },
  subtopics: { fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 18 },
  content: { padding: 20 },
  definitionBox: { backgroundColor: '#f0f9ff', borderLeftWidth: 4, borderLeftColor: '#0ea5e9', padding: 16, borderRadius: 8, marginBottom: 24 },
  defLabel: { fontSize: 10, fontWeight: '800', color: '#0369a1', marginBottom: 4 },
  defText: { fontSize: 15, color: '#0c4a6e', fontWeight: '500', lineHeight: 22 },
  webView: { flex: 1, backgroundColor: 'transparent' },
  qaSection: { marginTop: 32 },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1e1b4b', marginBottom: 16 },
  accordionItem: { backgroundColor: '#fff', borderRadius: 12, marginBottom: 10, borderWidth: 1, borderColor: '#f1f5f9' },
  accordionHeader: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  qNum: { width: 28, height: 28, borderRadius: 8, backgroundColor: '#f1f5f9', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  qNumText: { fontSize: 11, fontWeight: '800', color: '#64748b' },
  questionText: { flex: 1, fontSize: 14, fontWeight: '600', color: '#1e1b4b' },
  chevron: { fontSize: 18, color: '#cbd5e1' },
  accordionBody: { padding: 16, paddingTop: 0, borderTopWidth: 1, borderTopColor: '#f8fafc' },
  answerText: { fontSize: 14, color: '#475569', lineHeight: 22 },
  teacherCTA: { marginTop: 40, backgroundColor: '#f8fafc', borderRadius: 24, padding: 24, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#e2e8f0' },
  teacherEmoji: { fontSize: 48, marginRight: 20 },
  teacherInfo: { flex: 1 },
  ctaTitle: { fontSize: 16, fontWeight: '800', color: '#1e1b4b' },
  ctaSub: { fontSize: 12, color: '#64748b', marginTop: 4, marginBottom: 16 },
  ctaBtn: { backgroundColor: '#f97316', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 10, alignSelf: 'flex-start' },
  ctaBtnText: { color: '#fff', fontSize: 12, fontWeight: '800' }
});
