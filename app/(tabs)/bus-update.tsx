import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { postBus } from "../../services/api";

export default function BusUpdate() {
  const [busNo, setBusNo] = useState("");
  const [routeFrom, setRouteFrom] = useState("");
  const [routeTo, setRouteTo] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState([]);
  const [newStop, setNewStop] = useState("");

  const addStop = () => {
    if (newStop.trim()) setStops([...stops, newStop.trim()]);
    setNewStop("");
  };

  const saveBusData = async () => {
    await postBus({ busNo, routeFrom, routeTo, destination, stops });
    alert("Bus info saved!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bus Update</Text>
      <TextInput style={styles.input} placeholder="Bus Number" value={busNo} onChangeText={setBusNo} />
      <TextInput style={styles.input} placeholder="From" value={routeFrom} onChangeText={setRouteFrom} />
      <TextInput style={styles.input} placeholder="To" value={routeTo} onChangeText={setRouteTo} />
      <TextInput style={styles.input} placeholder="Destination" value={destination} onChangeText={setDestination} />
      <TextInput style={styles.input} placeholder="Add Stop" value={newStop} onChangeText={setNewStop} />
      <Button title="Add Stop" onPress={addStop} />
      {stops.map((stop, i) => <Text key={i}>{i + 1}. {stop}</Text>)}
      <Button title="Save Bus Info" onPress={saveBusData} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#bbb", borderRadius: 8, padding: 12, marginBottom: 10 }
});
