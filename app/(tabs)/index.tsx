import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LanguagePicker from '../../components/ui/LanguagePicker';


export default function Index() {
  const [language, setLanguage] = useState('en');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select your preferred language</Text>
      <LanguagePicker selectedLanguage={language} onLanguageChange={setLanguage} />
      <Text style={styles.selectedText}>Current Selection: {language}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  heading: { fontWeight: '600', fontSize: 18, marginBottom: 20 },
  selectedText: { marginTop: 30, fontSize: 16 },
});
