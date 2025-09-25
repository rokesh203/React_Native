import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Explore() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Explore Destinations</Text>
      {/* Add your explore UI here */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F8FF', padding: 18 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 14 },
});
