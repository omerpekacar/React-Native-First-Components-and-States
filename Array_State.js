import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, Button } from 'react-native';
import App from '../../App';

const App = () => {
  // Kullanıcıları yöneten state ve kullanıcıları güncelleyen setUsers fonksiyonu
  const [kullanicilar, kullaniciekle] = useState([
    { id: 1, name: "Omer" },
    { id: 2, name: "Linam" },
  ]);

  // Butona tıklandığında yeni bir kullanıcı eklemek için kullanılan fonksiyon
  const kayıtbutonu = () => {
    kullaniciekle(prev => [
      ...prev,
      {
        id: Math.floor(Math.random() * 10000),
        name: Math.floor(Math.random() * 5000).toString(),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Kullanıcı listesini gösteren FlatList component'ı */}
      <FlatList
        data={kullanicilar}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
      {/* Yeni kullanıcı eklemek için kullanılan buton */}
      <Button title='kayıt et' onPress={kayıtbutonu}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Dikeyde üstte hizala
  },
  text: {
    fontSize: 30,
    marginTop: 55, // Metni bir miktar aşağı kaydır
  },
  item: {
    backgroundColor: "#eee",
    padding: 10,
    borderBottomWidth: 1,
  },
});

export default App;
