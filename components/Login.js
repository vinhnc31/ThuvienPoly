import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import BackgoundLogin from '../img/backgound.png';
import logo from '../img/logo.png'

const { widthSrc, heightSrc } = Dimensions.get("window");

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View>
      <ImageBackground source={BackgoundLogin} style={{ width: widthSrc, height: '100%' }}>
        <View style={styles.container}>
          <Image source={logo} style={{width: 200, height: 50, marginBottom: 8}}/>
          <View style={{ backgroundColor: '#fff', paddingStart: 16, paddingEnd: 16, borderRadius: 6,}}>
            <Text style={{ fontSize: 24, fontStyle: 'normal', color: '#FC6011', fontWeight: "bold", marginTop: 16}}>Đăng nhập</Text>
            {/* Email */}
            <View>
              <Text style={{ marginTop: 32 }}>Email</Text>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.text} />
            </View>
            {/* Pass */}
            <View>
              <Text style={{ marginTop: 32 }}>Password</Text>
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.text} />
            </View>
            <TouchableOpacity style={{alignItems:"flex-end", marginTop: 8}}>
              <Text style={{fontSize: 12, fontStyle: "italic", color: '#52616B'}}>Forgot your password ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavBar')}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
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
    marginTop: 64,
    marginBottom: 16,
    backgroundColor: "#FF5600",
    borderRadius: 6,
    width: widthSrc,
    height: 48,
    justifyContent: "center",
    alignItems:"center",
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
    borderColor: '#FC6011',
    borderWidth: 1,
  },

});
export default Login;
