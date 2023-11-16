import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, []); 

  const stopCounter = () => {
    // intervalId null değilse clearInterval çağır
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  };

  const startCounter = () => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    setIntervalId(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Tek Tek Arttırmak için Tıkla" onPress={() => setCount(count + 1)} />
      <Button title="Artışı Durdur" onPress={stopCounter} />
      <Button title="Seri Artışı Başlat" onPress={startCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 37,
  },
});

export default Counter;
