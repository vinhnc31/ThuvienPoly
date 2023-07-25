import { StyleSheet } from "react-native";

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
import SettingScreen from './components/tai_khoan/setting';
import AddLoanScreen from './components/phieu_muon/them_phieu_muon';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Trang chủ">
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Phiếu mượn" component={LoanScreen} />
      <Tab.Screen name="Thành viên" component={UserScreen} />
      <Tab.Screen name="Tài khoản" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const Stackass=createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stackass.Navigator screenOptions={{headerShown: false}}>
        {/* <Stackass.Screen name='splash' component={Splash}/> */}
        <Stackass.Screen name='login' component={Login}/>
        <Stackass.Screen name='NavBar' component={MyTabs}/>
        <Stackass.Screen name='them_phieu_muon' component={AddLoanScreen}/>
      </Stackass.Navigator>
    </NavigationContainer>
  );
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
