import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button, Image } from "react-native-paper";
import BackgoundLogin from '../img/backgound.png';
import LogoLogin from '../img/logo.jpg';

const { widthSrc, heightSrc } = Dimensions.get("window");

const changePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View>
      <ImageBackground source={BackgoundLogin} style={{ width: widthSrc, height: '100%' }}>
        <View style={styles.container}>
          <View style={{ backgroundColor: '#fff', paddingHorizontal: 32, borderRadius: 12 }}>
            <Text style={{ fontSize: 24, fontStyle: 'normal', color: '#FC6011', alignItems: 'flex-start', fontWeight: "bold", marginTop: 16 }}>Đổi mật khẩu</Text>
            <Text style={{ marginTop: 30 }}>Email</Text>
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
            <TouchableOpacity style={styles.font}>
              <Text style={{ fontStyle: 'italic', }}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity mode="contained" onPress={handleLogin} style={styles.button}>
              <Text style = {{fontWeight:"600", color: 'white'}}>Đăng nhập</Text>
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
    margin: 16,
    justifyContent: "center",
    alignContent: "center",
  },
  font: {
    alignItems: "flex-end",
    fontSize: 12,
    alignContent: "center",
    marginTop: 8,
  },

  button: {
    marginTop: 64,
    marginBottom: 16,
    backgroundColor: "#FF5600",
    borderRadius: 6,
    width: widthSrc,
    height: 48,
    alignItems:"center",
    justifyContent:"center",
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
export default changePassword;
