import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { updateNextStop } from "../../services/api";

export default function NextStop() {
  const [busNo, setBusNo] = useState("");
  const [nextStop, setNextStop] = useState("");

  const updateStop = async () => {
    if (!busNo || !nextStop) {
      alert("Please enter bus number and next stop");
      return;
    }
    await updateNextStop(busNo, nextStop);
    alert("Next stop updated");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Next Stop</Text>
      <TextInput style={styles.input} placeholder="Bus Number" value={busNo} onChangeText={setBusNo} />
      <TextInput style={styles.input} placeholder="Next Stop" value={nextStop} onChangeText={setNextStop} />
      <Button title="Update Stop" onPress={updateStop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  title: { marginBottom: 15, fontSize: 20, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 15 },
});
