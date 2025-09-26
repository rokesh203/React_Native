import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, Image, StyleSheet } from "react-native";
import { postBus } from "../../services/api";

export default function BusUpdate() {
  const [busNo, setBusNo] = useState("");
  const [routeFrom, setRouteFrom] = useState("");
  const [routeTo, setRouteTo] = useState("");
  const [destination, setDestination] = useState("");
  const [stops, setStops] = useState([]);
  const [newStop, setNewStop] = useState("");
  const [qrCode, setQrCode] = useState("");

  const addStop = () => {
    if (newStop.trim()) setStops([...stops, newStop.trim()]);
    setNewStop("");
  };

  const saveBus = async () => {
    if (!busNo || !routeFrom || !routeTo || !destination || stops.length === 0) {
      alert("Fill all fields including stops.");
      return;
    }
    const res = await postBus({ busNo, routeFrom, routeTo, destination, stops });
    setQrCode(res.qrCodeData); // Base64 image URL of QR code
    alert("Bus info saved successfully.");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bus Information</Text>
      <TextInput style={styles.input} placeholder="Bus Number" value={busNo} onChangeText={setBusNo} />
      <TextInput style={styles.input} placeholder="Route From" value={routeFrom} onChangeText={setRouteFrom} />
      <TextInput style={styles.input} placeholder="Route To" value={routeTo} onChangeText={setRouteTo} />
      <TextInput style={styles.input} placeholder="Destination" value={destination} onChangeText={setDestination} />
      <TextInput style={styles.input} placeholder="Add Stop" value={newStop} onChangeText={setNewStop} />
      <Button title="Add Stop" onPress={addStop} />
      {stops.map((stop, i) => (
        <Text key={i}>{i + 1}. {stop}</Text>
      ))}
      <Button title="Save Bus Info" onPress={saveBus} />
      {qrCode ? (
        <>
          <Text style={{ marginTop: 20, fontWeight: "bold" }}>Bus QR Code:</Text>
          <Image source={{ uri: qrCode }} style={{ width: 250, height: 250, marginTop: 10 }} />
        </>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "90%", borderWidth: 1, borderColor: "#ccc", padding: 12, marginBottom: 15, borderRadius: 8 },
});
