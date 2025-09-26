import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Login() {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (empId && password) {
      await AsyncStorage.setItem("conductorId", empId);
      router.replace("/bus-update");
    } else alert("Enter both fields");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conductor Login</Text>
      <TextInput style={styles.input} placeholder="Employee ID" value={empId} onChangeText={setEmpId} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#bbb", borderRadius: 8, padding: 14, marginBottom: 16, fontSize: 16, width: "80%" }
});
