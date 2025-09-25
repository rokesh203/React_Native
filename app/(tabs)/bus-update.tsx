import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

const labels = {
  en: {
    title: 'Bus Details Update',
    busNo: 'Bus Number',
    destination: 'Destination',
    routeFrom: 'From',
    routeTo: 'To',
    stops: 'Stops (comma separated)',
    notes: 'Notes / Additional Info',
    submit: 'Submit Bus Details',
  },
  hi: {
    title: 'बस विवरण अपडेट',
    busNo: 'बस नंबर',
    destination: 'गंतव्य',
    routeFrom: 'से',
    routeTo: 'तक',
    stops: 'स्टॉप (कॉमा से अलग)',
    notes: 'टिप्पणी / अतिरिक्त जानकारी',
    submit: 'बस विवरण जमा करें',
  },
  ta: {
    title: 'பஸ் விவரங்கள் புதுப்பிப்பு',
    busNo: 'பஸ் எண்',
    destination: 'இலக்கு',
    routeFrom: 'இருந்து',
    routeTo: 'வரை',
    stops: 'நிறுத்தங்கள் (கமா மூலம் பிரிக்கவும்)',
    notes: 'குறிப்புகள் / கூடுதல் தகவல்',
    submit: 'பஸ் விவரங்களை சமர்ப்பிக்கவும்',
  },
  mr: {
    title: 'बस तपशील अद्यतन',
    busNo: 'बस नंबर',
    destination: 'गंतव्य',
    routeFrom: 'पासून',
    routeTo: 'पर्यंत',
    stops: 'थांबे (कॉमा ने वेगळे करा)',
    notes: 'नोंदी / अतिरिक्त माहिती',
    submit: 'बस तपशील सादर करा',
  },
};

export default function BusUpdate() {
  const params = useLocalSearchParams();
  const language = typeof params.language === 'string' ? params.language : 'en';
  const t = labels[language] || labels.en;

  const [busNo, setBusNo] = useState('');
  const [destination, setDestination] = useState('');
  const [routeFrom, setRouteFrom] = useState('');
  const [routeTo, setRouteTo] = useState('');
  const [stops, setStops] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = () => {
    alert(t.submit);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t.title}</Text>
      <Text style={styles.label}>{t.busNo}</Text>
      <TextInput style={styles.input} value={busNo} onChangeText={setBusNo} />
      <Text style={styles.label}>{t.destination}</Text>
      <TextInput style={styles.input} value={destination} onChangeText={setDestination} />
      <Text style={styles.label}>{t.routeFrom}</Text>
      <TextInput style={styles.input} value={routeFrom} onChangeText={setRouteFrom} />
      <Text style={styles.label}>{t.routeTo}</Text>
      <TextInput style={styles.input} value={routeTo} onChangeText={setRouteTo} />
      <Text style={styles.label}>{t.stops}</Text>
      <TextInput style={styles.input} value={stops} onChangeText={setStops} />
      <Text style={styles.label}>{t.notes}</Text>
      <TextInput style={[styles.input, styles.notes]} multiline value={notes} onChangeText={setNotes} />
      <Button title={t.submit} onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontWeight: 'bold', fontSize: 22, marginBottom: 20 },
  label: { fontWeight: '600', marginTop: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 6, borderRadius: 6 },
  notes: { height: 80, textAlignVertical: 'top' },
});
