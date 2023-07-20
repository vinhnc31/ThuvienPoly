import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
} from "react-native";
import { TextInput, Button,Image } from "react-native-paper";
import BackgoundLogin from '../img/backgound.png';
import LogoLogin from '../img/logo.jpg';

const { widthSrc, heightSrc } = Dimensions.get("window");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View>
      

      <ImageBackground source={BackgoundLogin} style={{ width: widthSrc, height: '100%' }}>
     
        
        <View style={styles.container}>
          <View style={{backgroundColor:'#fff'}}>
        <Text style={{fontSize:24, fontStyle:'normal', color:'#FC6011',alignItems:'flex-start'}}>Đăng nhập</Text>
          <Text style={{marginTop:30}}>Email</Text>
          <View>
                 
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.text}
             
            />
          </View>
          <Text style={{ marginTop: 40 }}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.text}
          />
          <View style={styles.font}>
            <Text>Forgot your password?</Text>
          </View>
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Đăng nhập
          </Button>
        </View>
        </View>
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    flex: 1,
    marginTop:20,
    padding: 16,
    marginLeft:60,
    justifyContent: "center",
    alignContent: "center",
  },
  font: {
    alignItems: "flex-end",
    fontSize: 12,
    fontStyle: 'italic',
  
    alignContent: "center",
    marginTop: 10,
    
  },
  button: {
    marginTop: 65,
    backgroundColor: "#FF5600",
    borderRadius: 6,
    width: widthSrc,
    height: 48,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#ffffff",
    borderRadius: 6,
    width: widthSrc,
    height: 48,
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderColor:'#FC6011',
    borderWidth:1,
    
    
  },
 
});
export default Login;
