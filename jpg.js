import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Header from './src/components/Header';
import Title from './src/components/Title';
import User from './src/components/User';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain" // çerçeve resme değmez bu kod sayesinde
        style={{
          width: '100%',
          height: 300,
          borderWidth: 2,
          borderColor: 'blue',
        }}
       // source={require('./assets/doga.jpg')} // LOCAL RESİM GÖSTERME KOMUTU
       source={{uri:"http://kirsehirakademikizapart.com/wp-content/uploads/2016/12/post-12-1170x658.jpg"}} // WEB ÜZERİNDEN LİNKLEME
      />
    </View>
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
