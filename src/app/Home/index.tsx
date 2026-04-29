import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Button from "@/components/Button";
import Input from "@/components/Input"

export default function Home() {
  const [timeA, setTimeA] = useState(0)
  const [timeB, setTimeB] = useState(0)

  function atualizarPlacar(time: string, valor: number) {
    if (time.toLowerCase() === 'a') {
      setTimeA(timeA + valor)
    }
    else if (time.toLowerCase() === 'b') {
      setTimeB(timeB + valor)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Time A x Time B</Text>
      <View style={styles.row}>
        <Input value={timeA.toString()} readOnly />
        <Input value={timeB.toString()} readOnly />
      </View>
      <View style={styles.row}>
        <Button titulo="+3" onPress={() => (atualizarPlacar('a', 3))} />
        <Button titulo="+3" onPress={() => (atualizarPlacar('b', 3))} />
      </View>
      <View style={styles.row}>
        <Button titulo="+1" onPress={() => (atualizarPlacar('a', 1))} />
        <Button titulo="+1" onPress={() => (atualizarPlacar('b', 1))} />
      </View>
      <View style={styles.row}>
        <Button titulo="-1" />
        <Button titulo="-1" />
      </View><View style={[styles.row, { paddingTop: 32 }]}>
        <Button titulo="Zerar" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginTop: 16
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 32,
    color: '#123',
    padding: 16,
    borderRadius: 8,
    fontWeight: 700
  }
});
