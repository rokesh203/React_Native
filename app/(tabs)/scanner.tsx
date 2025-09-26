import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { getBus } from "../../services/api";

export default function Scanner() {
  const [busNo, setBusNo] = useState("");
  const [busData, setBusData] = useState(null);

  const handleFetchBus = async () => {
    const data = await getBus(busNo);
    setBusData(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Bus QR / Enter Bus No</Text>
      <TextInput style={styles.input} placeholder="Bus Number" value={busNo} onChangeText={setBusNo} />
      <Button title="Get Bus Info" onPress={handleFetchBus} />
      {busData && (
        <>
          <QRCode value={busNo} size={120} />
          <Text style={styles.section}>Bus: {busData.busNo}</Text>
          <Text style={styles.section}>From: {busData.routeFrom}  To: {busData.routeTo}</Text>
          <Text style={styles.section}>Destination: {busData.destination}</Text>
          <Text style={styles.section}>Stops:</Text>
          {busData.stops.map((stop, i) => <Text key={i}>{i + 1}. {stop}</Text>)}
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 22 },
  title: { fontSize: 20, marginBottom: 18, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#bbb", borderRadius: 7, padding: 11, width: "90%", marginBottom: 12 },
  section: { fontSize: 16, marginTop: 10 }
});
