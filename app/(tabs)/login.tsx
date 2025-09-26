import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { loginConductor } from "../../services/api";

export default function Login() {
  const [empNo, setEmpNo] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await loginConductor(empNo, password);
    if (res.found) {
      router.replace("/bus-update");
    } else {
      router.replace("/sign-in");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conductor Login</Text>
      <TextInput style={styles.input} placeholder="Employee Number" value={empNo} onChangeText={setEmpNo} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 32 },
  title: { fontSize: 25, fontWeight: "bold", marginBottom: 22 },
  input: { borderWidth: 1, borderColor: "#bbb", borderRadius: 8, padding: 14, marginBottom: 16, fontSize: 16, width: "85%" }
});
