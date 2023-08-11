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
import Icon from 'react-native-vector-icons/FontAwesome';

const { widthSrc, heightSrc } = Dimensions.get("window");

const ChangePassword = ({navigation}) => {
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [rePass, setrePass] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChangePass = () => {
    // Handle login logic here
  };

  return (
    <View>
      <ImageBackground source={BackgoundLogin} style={{ width: widthSrc, height: '100%' }}>
        <View style={styles.container}>
          <View style={{ backgroundColor: '#fff', paddingHorizontal: 32, borderRadius: 12 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16, }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="angle-left" color={"#FC6011"} size={24} />
              </TouchableOpacity>
              <Text style={{ fontSize: 24, fontStyle: 'normal', color: '#FC6011', fontWeight: "bold" }}>Đổi mật khẩu</Text>
            </View>
            <View>
              <Text style={{ marginTop: 30 }}>Mật khẩu hiện tại</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  value={currentPass}
                  onChangeText={(text) => setCurrentPass(text)}
                  secureTextEntry={!isPasswordVisible}
                  style={styles.text} />
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginStart: -32, marginBottom: -8 }}
                  onPress={togglePasswordVisibility}>
                  {isPasswordVisible ? (
                    <Icon name="eye-slash" size={24} color={"#FC6011"} />
                  ) : (
                    <Icon name="eye" size={24} color={"#FC6011"} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={{ marginTop: 30 }}>Mật khẩu mới</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  value={newPass}
                  onChangeText={(text) => setNewPass(text)}
                  secureTextEntry={!isPasswordVisible}
                  style={styles.text} />
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginStart: -32, marginBottom: -8 }}
                  onPress={togglePasswordVisibility}>
                  {isPasswordVisible ? (
                    <Icon name="eye-slash" size={24} color={"#FC6011"} />
                  ) : (
                    <Icon name="eye" size={24} color={"#FC6011"} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={{ marginTop: 30 }}>Nhập lại mật khẩu</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TextInput
                  value={rePass}
                  onChangeText={(text) => setrePass(text)}
                  secureTextEntry={!isPasswordVisible}
                  style={styles.text} />
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", marginStart: -32, marginBottom: -8 }}
                  onPress={togglePasswordVisibility}>
                  {isPasswordVisible ? (
                    <Icon name="eye-slash" size={24} color={"#FC6011"} />
                  ) : (
                    <Icon name="eye" size={24} color={"#FC6011"} />
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.font}>
              <Text style={{ fontStyle: 'italic', }}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity mode="contained" onPress={handleChangePass} style={styles.button}>
              <Text style={{ fontWeight: "600", color: 'white' }}>Đăng nhập</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    flex: 1,
    fontSize: 14,
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
export default ChangePassword;
