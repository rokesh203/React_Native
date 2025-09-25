import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  const router = useRouter();
  const isLoggedIn = false;

  useEffect(() => {
    if (!isLoggedIn) router.replace('/sign-in');
    else router.replace('/bus-update');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Checking login state...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  text: { fontSize: 18 }
});
