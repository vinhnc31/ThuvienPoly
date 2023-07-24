import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Logo from '../img/logo.png';

const Splash = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
     
    }, 3000); // 5 giây

    return () => clearTimeout(timer);
  }, []);
  navigation.replace('Login'); // Thay thế màn hình hiện tại bằng màn hình tiếp theo

  return (
    <View style={styles.container}>
    <Image source = {Logo}
    style={{width: '80%', height: 80}} />
   </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

