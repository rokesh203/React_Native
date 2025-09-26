import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { getBus } from "../../services/api";

export default function Scanner() {
  const [busNo, setBusNo] = useState("");
  const [busData, setBusData] = useState(null);

  const handleFetchBus = async () => {
    try {
      const data = await getBus(busNo);
      setBusData(data);
    } catch {
      alert("Bus not found or no data!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Bus QR / Enter Bus No</Text>
      <TextInput style={styles.input} placeholder="Bus Number" value={busNo} onChangeText={setBusNo} />
      <Button title="Get Bus Info" onPress={handleFetchBus} />
      {busData && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.info}>Bus: {busData.busNo}</Text>
          <Text style={styles.info}>From: {busData.routeFrom} - To: {busData.routeTo}</Text>
          <Text style={styles.info}>Destination: {busData.destination}</Text>
          <Text style={styles.info}>Next Stop: {busData.nextStop}</Text>
          <Text style={styles.info}>Stops:</Text>
          {busData.stops.map((stop, i) => <Text key={i}>{i + 1}. {stop}</Text>)}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 22 },
  title: { fontSize: 20, marginBottom: 18, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#bbb", borderRadius: 7, padding: 11, width: "90%", marginBottom: 12 },
  info: { fontSize: 16, marginTop: 8 }
});
