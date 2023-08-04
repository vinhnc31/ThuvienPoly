import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground,Image} from "react-native";
import { TextInput, Button  } from "react-native-paper";
import BackgoundLogin from "../img/backgound.png";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

import logo from '../img/logo.jpg';
const ChangePassword = () => {
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [thepassword, setThePassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 40,
        }}
      >
          <Icon
            name="chevron-small-left"
            size={30}
            color="orangered"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ paddingLeft: 10, fontSize: 20, alignSelf: "center" }}>
            ChangePassword
          </Text>
       
      </View>
      <ImageBackground
        source={BackgoundLogin}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Image
            source={require("../img/logo.jpg")}
            style={{
              width: 90,
              height: 90,
              marginStart: "5%",
              marginBottom: "20%",
            }}
          />
          <View
            style={{
              padding: 16,
              borderRadius: 10,
              backgroundColor: "white",
              width: "80%",
              height: "50%",
              alignSelf: "center",
              justifyContent: "space-between",
              borderWidth: 1,
              borderColor: "orangered",

              alignContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 20,
                marginVertical: 20,
                fontWeight: "bold",
              }}
            >
              Thay Đổi Mật Khẩu
            </Text>

            <Text>Mật khẩu cũ</Text>
            <TextInput
              value={oldpassword}
              onChangeText={(text) => setOldPassword(text)}
              style={styles.text}
            />

            <Text>Mật khẩu mới</Text>
            <TextInput
              value={newpassword}
              onChangeText={(text) => setNewPassword(text)}
              style={styles.text}
            />

            <Text>Nhập lại mật khẩu</Text>
            <TextInput
              value={thepassword}
              onChangeText={(text) => setNewPassword(text)}
              style={styles.text}
            />

            <Button
              mode="contained"
              onPress={handleLogin}
              style={styles.button}
            >
              Đổi mật khẩu
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  font: {
    fontSize: 12,
    fontStyle: "italic",
    marginTop: 10,
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: "#FF5600",
    borderRadius: 6,
    textAlign: "center",
    marginTop:10
  },
  text: {
    fontSize: 16,
    fontWeight: "Mulish",
    color: "#ffffff",
    borderWidth: 1,
    borderColor: "orangered",
    borderRadius: 6,
    backgroundColor: "#ffffff",
  },
  text1: {
    fontSize: 16,
    fontWeight: "Mulish",
    color: "#ffffff",
    borderRadius: 6,
    backgroundColor: "#ffffff",
    marginTop: 10,
    flex: 1,
  },
});
export default ChangePassword;
