import { Button, StyleSheet, View,TouchableOpacity, Image} from "react-native";
import Header from "./src/components/Header";
import Title from "./src/components/Title";
import User from "./src/components/User";



const App =() => {
  return (
    <View style={styles.container}>
<Image style={{width:"100%",height:"30%"}} 
     //  source={require("./assets/doga.jpg")}>
       source={{
        uri: "http://kirsehirakademikizapart.com/wp-content/uploads/2016/12/post-12-1170x658.jpg"
       }}
     />
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

export default App;
