import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const languages = [
  { code: 'ta', label: 'Tamil' },
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'ml', label: 'Malayalam' },
  { code: 'te', label: 'Telugu' },
];

type LanguagePickerProps = {
  selectedLanguage: string;
  onLanguageChange: (languageCode: string) => void;
};

export default function LanguagePicker({ selectedLanguage, onLanguageChange }: LanguagePickerProps) {
  return (
    <View style={styles.container}>
      {languages.map(({ code, label }) => (
        <TouchableOpacity
          key={code}
          style={[styles.langButton, selectedLanguage === code && styles.langButtonSelected]}
          onPress={() => onLanguageChange(code)}
        >
          <Text style={[styles.langText, selectedLanguage === code && styles.langTextSelected]}>
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  langButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 25,
    backgroundColor: '#f0f0f0',
  },
  langButtonSelected: {
    backgroundColor: '#2563eb',
    borderColor: '#1e40af',
  },
  langText: {
    fontSize: 16,
    color: '#444',
    fontWeight: '600',
  },
  langTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
});
