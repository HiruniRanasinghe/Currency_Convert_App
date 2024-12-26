import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {

  const [lkr, setLkr] = useState('');
  const [usd, setUsd] = useState('');

  const convertToUSD = () => {
    const converted = (parseFloat(lkr) * conversionRate).toFixed(2);
    setUsd(converted);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>LKR to USD Converter</Text>
      <Text style={styles.label}>Enter amount in LKR:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={lkr}
        onChangeText={setLkr}
        placeholder="e.g., 1000"
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
