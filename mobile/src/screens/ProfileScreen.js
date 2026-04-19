import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

const MenuItem = ({ icon, label, sub, color = '#1e1b4b' }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={[styles.menuIcon, { backgroundColor: color + '15' }]}><Text style={{ color }}>{icon}</Text></View>
    <View style={styles.menuInfo}>
      <Text style={styles.menuLabel}>{label}</Text>
      {sub && <Text style={styles.menuSub}>{sub}</Text>}
    </View>
    <Text style={styles.chevron}>›</Text>
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* User Header */}
        <View style={styles.header}>
          <View style={styles.avatarLarge}><Text style={styles.avatarText}>👤</Text></View>
          <Text style={styles.userName}>Student Guest</Text>
          <Text style={styles.userEmail}>guest@onlinestudyhub.in</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>12</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>45%</Text>
            <Text style={styles.statLabel}>Avg Score</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statVal}>3</Text>
            <Text style={styles.statLabel}>Certificates</Text>
          </View>
        </View>

        {/* Settings Menu */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Learning Preferences</Text>
          <MenuItem icon="🔔" label="Notifications" sub="Manage study reminders" color="#f97316" />
          <MenuItem icon="🌙" label="Dark Mode" sub="Off" color="#4f46e5" />
          <MenuItem icon="🌍" label="Language" sub="English (US)" color="#059669" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Support & Account</Text>
          <MenuItem icon="🛡️" label="Privacy Policy" />
          <MenuItem icon="💬" label="Help & Feedback" />
          <TouchableOpacity style={styles.logoutBtn}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { alignItems: 'center', padding: 40, backgroundColor: '#fff', borderBottomLeftRadius: 32, borderBottomRightRadius: 32 },
  avatarLarge: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#f1f5f9', alignItems: 'center', justifyContent: 'center', marginBottom: 16, borderWidth: 4, borderColor: '#fff', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 12 },
  avatarText: { fontSize: 40 },
  userName: { fontSize: 22, fontWeight: '900', color: '#1e1b4b' },
  userEmail: { fontSize: 14, color: '#64748b', marginTop: 4 },
  editBtn: { marginTop: 20, backgroundColor: '#f1f5f9', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 20 },
  editBtnText: { fontSize: 13, fontWeight: '700', color: '#4f46e5' },
  statsRow: { flexDirection: 'row', padding: 20, gap: 12, marginTop: -30 },
  statBox: { flex: 1, backgroundColor: '#fff', borderRadius: 20, padding: 16, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 },
  statVal: { fontSize: 18, fontWeight: '800', color: '#1e1b4b' },
  statLabel: { fontSize: 11, color: '#94a3b8', marginTop: 2 },
  menuSection: { padding: 24 },
  sectionTitle: { fontSize: 14, fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: '#f1f5f9' },
  menuIcon: { width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 16 },
  menuInfo: { flex: 1 },
  menuLabel: { fontSize: 15, fontWeight: '700', color: '#1e1b4b' },
  menuSub: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  chevron: { fontSize: 20, color: '#cbd5e1' },
  logoutBtn: { marginTop: 12, padding: 16, alignItems: 'center' },
  logoutText: { color: '#ef4444', fontWeight: '700', fontSize: 15 }
});
