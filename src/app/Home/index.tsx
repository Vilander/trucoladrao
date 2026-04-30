import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  const [timeA, setTimeA] = useState(0);
  const [timeB, setTimeB] = useState(0);

  const [vitoriasA, setVitoriasA] = useState(0);
  const [vitoriasB, setVitoriasB] = useState(0);

  function atualizarPlacar(time: 'a' | 'b', valor: number) {
    if (time === 'a') {
      const novoValor = Math.max(0, timeA + valor); 
      
      if (novoValor >= 12) {
        setVitoriasA(vitoriasA + 1);
        resetarRodada();
      } else {
        setTimeA(novoValor);
      }
    } else {
      const novoValor = Math.max(0, timeB + valor);
      
      if (novoValor >= 12) {
        setVitoriasB(vitoriasB + 1);
        resetarRodada();
      } else {
        setTimeB(novoValor);
      }
    }
  }

  function resetarRodada() {
    setTimeA(0);
    setTimeB(0);
  }

  function resetarTudo() {
    resetarRodada();
    setVitoriasA(0);
    setVitoriasB(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.vitorias}>Vitórias: {vitoriasA}</Text>
        <Text style={styles.vitorias}>Vitórias: {vitoriasB}</Text>
      </View>

      <Text style={styles.texto}>Time A x Time B</Text>

      <View style={styles.row}>
        <Input value={timeA.toString()} readOnly />
        <Input value={timeB.toString()} readOnly />
      </View>

      <View style={styles.row}>
        <Button titulo="+3" onPress={() => atualizarPlacar('a', 3)} />
        <Button titulo="+3" onPress={() => atualizarPlacar('b', 3)} />
      </View>

      <View style={styles.row}>
        <Button titulo="+1" onPress={() => atualizarPlacar('a', 1)} />
        <Button titulo="+1" onPress={() => atualizarPlacar('b', 1)} />
      </View>

      <View style={styles.row}>
        <Button titulo="-1" onPress={() => atualizarPlacar('a', -1)} />
        <Button titulo="-1" onPress={() => atualizarPlacar('b', -1)} />
      </View>

      <View style={[styles.row, { paddingTop: 32 }]}>
        <Button titulo="Zerar Partida" onPress={resetarRodada} />
      </View>
      
      <View style={[styles.row, { paddingTop: 32 }]}>
        <Button titulo="Reiniciar Competição" onPress={resetarTudo} />
      </View>
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
  row: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginTop: 16
  },
  texto: {
    fontSize: 32,
    color: '#123',
    fontWeight: '700'
  },
  vitorias: {
    fontSize: 18,
    color: '#666',
    fontWeight: '600'
  }
});