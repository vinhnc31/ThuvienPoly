import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button, Image } from "react-native-paper";
import BackgoundLogin from "../img/backgound.png";
import LogoLogin from "../img/logo.jpg";
import { librarian_api } from "../respository/index";
import { FlatList } from "react-native-gesture-handler";

const { widthSrc } = Dimensions.get("window");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (navigation) => {
    navigation.navigate("Trang chủ");
  };

  const Loginas = () => {
    const fetchLogins = async () => {
      const books = await librarian_api.LoginAS(email, password).then((data)=>{console.log(data)});
      
     };

    fetchLogins();
  };

  return (
    <View>
      <ImageBackground
        source={BackgoundLogin}
        style={{ width: widthSrc, height: "100%" }}
      >
        <View style={styles.container}>
          <View style={{ backgroundColor: "#fff", paddingHorizontal: 32 }}>
            <Text
              style={{
                fontSize: 24,
                fontStyle: "normal",
                color: "#FC6011",
                alignItems: "flex-start",
                marginTop: 16,
              }}
            >
              Đăng nhập
            </Text>
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
            <TouchableOpacity
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
            >
              <Text style={styles.font}>Forgot your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={
              // navigation.navigate("NavBar")
              Loginas
              }
              style={styles.button}
            >
              <Text style={{ color: "#fff", fontWeight: "500" }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Text>{listUser[0].name}</Text> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    padding: 16,
    justifyContent: "center",
    alignContent: "center",
  },
  font: {
    fontSize: 11,
    fontStyle: "italic",
    alignContent: "center",
    marginTop: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 65,
    marginBottom: 32,
    backgroundColor: "#FF5600",
    borderRadius: 50,
    width: widthSrc,
    height: 48,
  },

  text: {
    fontSize: 16,
    color: "#ffffff",
    borderRadius: 6,
    width: widthSrc,
    height: 48,
    backgroundColor: "#ffffff",
    marginTop: 10,
    borderColor: "#FC6011",
    borderWidth: 1,
  },
});
export default Login;
