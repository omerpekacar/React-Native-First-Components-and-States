import { Button, StyleSheet, View,TouchableOpacity, } from "react-native";
import Header from "./src/components/Header";
import Title from "./src/components/Title";
import User from "./src/components/User";



const Buton =() => {
  return (
    <View style={styles.container}>
      <Button title="Butona Tıklama" onPress={()=> alert("Başarı ile giriş yaptınız")}/>
        <Header />
      <Title />
      <User />

    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); 

export default Buton;
