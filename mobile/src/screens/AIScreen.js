import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function AIScreen() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', content: "Hi! I'm your AI study helper 👋\nAsk me any doubt about Maths, Science, History, English — any subject!" }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), role: 'user', content: input };
    setMessages([...messages, userMsg]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'assistant',
        content: "That's a great question! I'm currently in 'Offline Demo Mode' in this mobile preview, but in the full app, I can solve this using Claude AI."
      }]);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.aiAvatar}><Text style={styles.aiAvatarText}>🤖</Text></View>
        <View>
          <Text style={styles.headerTitle}>AI Doubt Helper</Text>
          <Text style={styles.headerSub}>Always active • Class 6–12</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={[styles.messageRow, msg.role === 'user' ? styles.userRow : styles.aiRow]}>
            {msg.role === 'assistant' && <View style={styles.msgAvatar}><Text>🤖</Text></View>}
            <View style={[styles.bubble, msg.role === 'user' ? styles.userBubble : styles.aiBubble]}>
              <Text style={[styles.msgText, msg.role === 'user' ? styles.userText : styles.aiText]}>{msg.content}</Text>
            </View>
            {msg.role === 'user' && <View style={styles.msgAvatar}><Text>👤</Text></View>}
          </View>
        ))}
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={100}>
        <View style={styles.inputRow}>
          <TextInput 
            style={styles.input}
            placeholder="Type your doubt here..."
            value={input}
            onChangeText={setInput}
            multiline
          />
          <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, backgroundColor: '#1e1b4b', borderBottomLeftRadius: 24, borderBottomRightRadius: 24 },
  aiAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  aiAvatarText: { fontSize: 20 },
  headerTitle: { fontSize: 16, fontWeight: '800', color: '#fff' },
  headerSub: { fontSize: 12, color: 'rgba(255,255,255,0.6)' },
  chatContainer: { padding: 20, paddingBottom: 40 },
  messageRow: { flexDirection: 'row', marginBottom: 20, alignItems: 'flex-end', gap: 8 },
  aiRow: { justifyContent: 'flex-start' },
  userRow: { justifyContent: 'flex-end' },
  msgAvatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#f1f5f9', alignItems: 'center', justifyContent: 'center' },
  bubble: { maxWidth: '80%', padding: 12, borderRadius: 16 },
  aiBubble: { backgroundColor: '#f1f5f9', borderBottomLeftRadius: 4 },
  userBubble: { backgroundColor: '#4f46e5', borderBottomRightRadius: 4 },
  msgText: { fontSize: 14, lineHeight: 20 },
  aiText: { color: '#1e1b4b' },
  userText: { color: '#fff' },
  inputRow: { flexDirection: 'row', padding: 16, borderTopWidth: 1, borderTopColor: '#f1f5f9', alignItems: 'center', gap: 12 },
  input: { flex: 1, backgroundColor: '#f8fafc', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 10, maxHeight: 100, fontSize: 14 },
  sendBtn: { backgroundColor: '#f97316', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 },
  sendText: { color: '#fff', fontWeight: '800', fontSize: 14 }
});
