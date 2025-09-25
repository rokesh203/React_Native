import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = { selected: string; setSelected: (s: string) => void };

export default function LanguagePicker({ selected, setSelected }: Props) {
  return (
    <View style={styles.pickerBox}>
      <Picker
        selectedValue={selected}
        style={styles.picker}
        onValueChange={(value) => setSelected(value)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="हिन्दी" value="hi" />
        <Picker.Item label="தமிழ்" value="ta" />
        <Picker.Item label="मराठी" value="mr" />
        {/* Add more languages as needed */}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerBox: { backgroundColor: '#e5e7eb', borderRadius: 10 },
  picker: { height: 44, width: 145 },
});
