import React, { useState } from 'react';
import { View, StyleSheet,Text, ImageBackground, Dimensions, TouchableOpacity,Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

// Import ảnh
import BackgoundLogin from '../img/backgound.png';
import logo from '../img/logo.png'

const { widthSrc, heightSrc } = Dimensions.get("window");

const changePassword = () => {
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [thepassword, setThePassword] = useState('');


  const handleChangePass = () => {
    // Handle login logic here
  };

  return (
    <View>
      <ImageBackground source={BackgoundLogin} style={{width: widthSrc, height: '100%' }}>
        <View style={styles.container}>
          <Image source={logo} style={{width: 200, height: 50, marginBottom: 8}}/>
          <View style={{backgroundColor: "#fff", paddingStart: 16, paddingEnd: 16, borderRadius: 6,}}>
            <Text style = {styles.title}>Đổi mật khẩu</Text>

            <View style = {{marginBottom: 16}}>
              <Text>Mật khẩu cũ</Text>
              <TextInput
                value={oldpassword}
                onChangeText={(text) => setOldPassword(text)}
                style={styles.text}/>
            </View>

            <View style = {{marginBottom: 16}}>
              <Text>Mật khẩu mới</Text>
              <TextInput
                value={newpassword}
                onChangeText={(text) => setNewPassword(text)}
                style={styles.text}/>
            </View>

            <View style = {{marginBottom: 16}}>
              <Text>Nhập lại mật khẩu</Text>
              <TextInput
                value={thepassword}
                onChangeText={(text) => setNewPassword(text)}
                style={styles.text}/>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Hoàn thành</Text>
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
    justifyContent: 'center',
    alignContent:'center'
  },
  title:{
    fontSize: 28,
    fontWeight:'bold',
    color: '#FC6011',
    marginTop: 16,
    marginBottom: 32,
  },  
  font:{
    fontSize:12,
    fontStyle:'italic',
    marginTop:10,
    alignItems:'flex-end'
  },
  button: {
    margin: 16,
    backgroundColor: "#FF5600",
    borderRadius: "50%",
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
export default changePassword;
