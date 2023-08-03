import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import màn hình
import changePassword from "./components/changePassword";
import Splash from './components/Splash';
import Login from './components/Login';

import HomeScreen from './components/trang_chu/Home';
import LoanScreen from './components/phieu_muon/phieu_muon';
import UserScreen from './components/thanh_vien/thanh_vien';
import SettingScreen from './components/tai_khoan/Setting';
import AddLoanScreen from './components/phieu_muon/them_phieu_muon';
import ChangePassword from "./components/tai_khoan/componentsSetting/ChangePassword";
import Rank from "./components/tai_khoan/componentsSetting/Rank";
import BookMark from "./components/tai_khoan/componentsSetting/BookMark";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Trang chủ"
      tabBarOptions={{
        activeTintColor: '#FC6011',
        inactiveTintColor: '#52616B',
        labelStyle: { fontSize: 10 }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn == 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn == 'Phiếu mượn') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn == 'Tài khoản') {
            iconName = focused ? 'Settings' : 'settings-outline';
          }else if (rn == 'Thành viên') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />
        }, headerShown: false
      })}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Phiếu mượn" component={LoanScreen} />
      <Tab.Screen name="Thành viên" component={UserScreen} />
      <Tab.Screen name="Tài khoản" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const Stackass = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stackass.Navigator screenOptions={{ headerShown: false }}>
        <Stackass.Screen name="login" component={Login} />
        <Stackass.Screen name="ChangePassword" component={ChangePassword} />
        <Stackass.Screen name="Rank" component={Rank} />
        <Stackass.Screen name="BookMark" component={BookMark} />
        <Stackass.Screen name="NavBar" component={MyTabs} />
        <Stackass.Screen name="them_phieu_muon" component={AddLoanScreen} />
      </Stackass.Navigator>
    </NavigationContainer>
  );
} const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


