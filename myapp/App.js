import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {

  const [lkr, setLkr] = useState('');
  const [usd, setUsd] = useState('');

  const convertToUSD = () => {
    const conversionRate = 0.003;
    const convert = (parseFloat(lkr) * conversionRate).toFixed(2);
    setUsd(convert);
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

    <Button title="Convert" onPress={convertToUSD} />
    
      {usd ? (
        <Text style={styles.result}>
          USD Amount: ${usd}
        </Text>
      ) : null}

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
