import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { registerConductor } from "../../services/api";

export default function SignIn() {
  const [empNo, setEmpNo] = useState("");
  const [empName, setEmpName] = useState("");
  const [workingBus, setWorkingBus] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [preferredLang, setPreferredLang] = useState("en");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    await registerConductor({ empNo, empName, workingBus, otherDetails, preferredLang, password });
    router.replace("/bus-update");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conductor Sign-In</Text>
      <TextInput style={styles.input} placeholder="Employee Number" value={empNo} onChangeText={setEmpNo} />
      <TextInput style={styles.input} placeholder="Employee Name" value={empName} onChangeText={setEmpName} />
      <TextInput style={styles.input} placeholder="Working Bus" value={workingBus} onChangeText={setWorkingBus} />
      <TextInput style={styles.input} placeholder="Other Details" value={otherDetails} onChangeText={setOtherDetails} />
      <TextInput style={styles.input} placeholder="Preferred Language" value={preferredLang} onChangeText={setPreferredLang} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Sign In" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 32 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "85%", padding: 12, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 15 },
});
