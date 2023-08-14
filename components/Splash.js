import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Logo from '../img/logo.jpg';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('login'); // Thay thế màn hình hiện tại bằng màn hình tiếp theo
    }, 3000); // 5 giây
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
    <Image source = {Logo}
    style={{width: 300, height: 100}} />
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

