import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../img/logo.jpg'

const changePassword = () => {
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [thepassword, setThePassword] = useState('');


  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View style={styles.container}>
      
      <Text>Mật khẩu cũ</Text>
      <TextInput
        value={oldpassword}
        onChangeText={(text) => setOldPassword(text)}
        style={styles.text}
        
      />

      <Text style={{marginTop:40}}>Mật khẩu mới</Text>
      <TextInput
        value={newpassword}
        onChangeText={(text) => setNewPassword(text)}
        style={styles.text}
        
      />

      <Text style={{marginTop:40}}>Nhập lại mật khẩu</Text>
      <TextInput
        value={thepassword}
        onChangeText={(text) => setNewPassword(text)}
        style={styles.text}
        
      />

    
      <Button mode="contained" onPress={handleLogin}
       style={styles.button}>
        Đổi mật khẩu
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignContent:'center'
    
    
  },
  font:{
    fontSize:12,
    fontStyle:'italic',
    marginTop:10,
    alignItems:'flex-end'
  },
  button:{
     marginTop:65, 
     backgroundColor: '#FF5600',
     borderRadius: 6,
     width: 318,
     height: 48,
     textAlign:'center'
     
  },
  text:{
    
    fontSize:16,
    fontWeight:'Mulish',
    color:'#ffffff',
    borderRadius: 6,
     width: 318,
     height: 48,
     backgroundColor:'#ffffff',
     marginTop:10
  },
  text1:{
    fontSize:16,
    fontWeight:'Mulish',
    color:'#ffffff',
    borderRadius: 6,
     width: 318,
     height: 48,
     backgroundColor:'#ffffff',
     marginTop:10,
     flex:1


  }
});
export default changePassword;
