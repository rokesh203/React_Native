import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import LanguagePicker from './LanguagePicker'; // Same folder import

export default function BusInfo() {
  const { busId } = useLocalSearchParams<{ busId: string }>();
  const [bus, setBus] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setBus({
        id: busId,
        route: 'Route 12',
        destination: 'City Museum',
        stops: ['Stop A', 'Stop B', 'Stop C'],
        etaMinutes: 4,
      });
      setLoading(false);
    }, 600);
  }, [busId]);

  if (loading) return <ActivityIndicator style={{ marginTop: 40 }} size="large" />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bus Info</Text>
        <LanguagePicker selected={language} setSelected={setLanguage} />
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Route:</Text>
        <Text style={styles.value}>{bus?.route}</Text>
        <Text style={styles.label}>Destination:</Text>
        <Text style={styles.value}>{bus?.destination}</Text>
        <Text style={styles.label}>Next Stop:</Text>
        <Text style={styles.value}>
          {bus?.stops[0]} ({bus?.etaMinutes} min)
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>All Stops:</Text>
        {bus?.stops.map((stop: string, i: number) => (
          <Text key={i} style={styles.value}>
            {i + 1}. {stop}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EEF4F8', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  title: { fontSize: 22, fontWeight: '700' },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 12, marginBottom: 14, elevation: 2 },
  label: { fontWeight: '600', marginTop: 10 },
  value: { marginLeft: 6, fontSize: 16, marginTop: 2 },
});
