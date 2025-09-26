import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { updateNextStop } from "../../services/api";

export default function NextStop() {
  const [busNo, setBusNo] = useState("");
  const [nextStop, setNextStop] = useState("");

  const handleUpdate = async () => {
    await updateNextStop(busNo, nextStop);
    alert("Next Stop Updated!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Next Stop</Text>
      <TextInput style={styles.input} placeholder="Bus Number" value={busNo} onChangeText={setBusNo} />
      <TextInput style={styles.input} placeholder="Next Stop" value={nextStop} onChangeText={setNextStop} />
      <Button title="Update Stop" onPress={handleUpdate} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  title: { fontSize: 22, marginBottom: 16, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#bbb", padding: 12, marginBottom: 12, borderRadius: 8 }
});
