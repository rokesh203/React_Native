import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

const messages = {
  en: { empNo: 'Employee Number', preferredLang: 'Preferred Language', otherDetails: 'Other Details', signIn: 'Sign In' },
  hi: { empNo: 'कर्मचारी संख्या', preferredLang: 'अपनी भाषा चुनें', otherDetails: 'अन्य विवरण', signIn: 'साइन इन करें' },
  ta: { empNo: 'பணியாளரின் எண்', preferredLang: 'வாங்கிய மொழி', otherDetails: 'பிற விவரங்கள்', signIn: 'உள்நுழைக' },
  mr: { empNo: 'कर्मचारी नंबर', preferredLang: 'पसंदीदा भाषा', otherDetails: 'इतर तपशील', signIn: 'साईन इन' },
} as const;  // 'as const' gives us exact string literal types for keys

type LanguageCode = keyof typeof messages;

function getMessage(lang: unknown): typeof messages[LanguageCode] {
  if (typeof lang === 'string' && lang in messages) return messages[lang as LanguageCode];
  return messages.en;
}

export default function SignIn() {
  const router = useRouter();
  const [empNo, setEmpNo] = useState('');
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [otherDetails, setOtherDetails] = useState('');

  const t = getMessage(language);

  const handleSubmit = () => {
    router.push({
      pathname: '/bus-update',
      params: { language, empNo, otherDetails },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t.empNo}</Text>
      <TextInput style={styles.input} value={empNo} onChangeText={setEmpNo} keyboardType="number-pad" />
      <Text style={styles.label}>{t.preferredLang}</Text>
      <Picker
        selectedValue={language}
        onValueChange={(val) => setLanguage(val as LanguageCode)}
        style={Platform.OS === 'ios' ? styles.pickerIOS : styles.picker}
      >
        {Object.entries(messages).map(([key]) => (
          <Picker.Item key={key} label={key.toUpperCase()} value={key} />
        ))}
      </Picker>
      <Text style={styles.label}>{t.otherDetails}</Text>
      <TextInput style={styles.input} value={otherDetails} onChangeText={setOtherDetails} />
      <Button title={t.signIn} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { marginVertical: 8, fontWeight: 'bold', fontSize: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 6 },
  picker: { height: 50, width: '100%' },
  pickerIOS: { height: 150, width: '100%' },
});
