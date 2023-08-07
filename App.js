import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import màn hình
import Splash from './components/Splash';
import Login from './components/Login';
import ChangePassword from "./components/ChangePassword";
import SettingScreen from './components/tai_khoan/Setting'
import HomeScreen from './components/Home/Home'
import LoanScreen from './components/BorowingSlip/PhieuMuon';
import UserScreen from './components/User/ThanhVien';
import AddBorowingSlipScreen from './components/BorowingSlip/AddBorowingSlip';
import AddUserScreen from './components/User/AddUser'
import InfoUserScreen from './components/User/InfoUser';
import EditUserScreen from './components/User/EditUser';
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
            iconName = focused ? 'settings' : 'settings-outline';
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
      {/* <Stackass.Screen name='splash' component={Splash} />
        <Stackass.Screen name='login' component={Login} /> */}
        <Stackass.Screen name='NavBar' component={MyTabs} />
        <Stackass.Screen name="ChangePassword" component={ChangePassword} />
        <Stackass.Screen name="Rank" component={Rank} />
        <Stackass.Screen name="BookMark" component={BookMark} />
        <Stackass.Screen name="AddBorowingSlip" component={AddBorowingSlipScreen} />
        <Stackass.Screen name='AddUser' component={AddUserScreen}/>
        <Stackass.Screen name='InfoUser' component={InfoUserScreen}/>
        <Stackass.Screen name='EditUser' component={EditUserScreen}/>
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


