import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LanguagePicker from './LanguagePicker'; // Same folder import

export default function Home() {
  const router = useRouter();
  const [language, setLanguage] = useState('en');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR-based Smart Travel Assistant</Text>
      <Text style={styles.subtitle}>Choose language for your bus info:</Text>
      <LanguagePicker selected={language} setSelected={setLanguage} />
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => router.push({ pathname: '/scanner', params: { language } })}
      >
        <Text style={styles.scanText}>Scan QR Code</Text>
      </TouchableOpacity>
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>How it works</Text>
        <Text style={styles.infoText}>
          Scan the QR on a bus or at a stop. Live details appear in your selected language.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, alignItems: 'center', backgroundColor: '#f9fafb' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8, color: '#2d3a4b' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 12 },
  scanButton: { marginTop: 18, backgroundColor: '#2563eb', paddingVertical: 16, paddingHorizontal: 36, borderRadius: 12 },
  scanText: { color: 'white', fontSize: 18, fontWeight: '700' },
  infoBox: {
    marginTop: 32,
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  infoTitle: { fontWeight: 'bold', marginBottom: 6, fontSize: 16 },
  infoText: { color: '#444', fontSize: 15 },
});
