import React,{useState} from 'react';
import { StyleSheet, View, Image, ScrollView, SafeAreaView, Text, Button } from 'react-native';
import Header from './src/components/Header';
import Title from './src/components/Title';
import User from './src/components/User';

const App = () => {
  const [name,setName] = useState("Butona tıklayınız")

  return (
    <SafeAreaView style={styles.container}>
      <Text>{name}</Text>
      <Button title="Tıklaaa" onPress={() => setName("omer pekacar")}></Button>
      <Button title="Tıklaaa" onPress={() => setName("omercan")}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
