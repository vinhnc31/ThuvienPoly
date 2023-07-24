import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import thư viện
import changePassword from "./components/changePassword";
import Splash from './components/Splash';
import Login from './components/Login';

const Stackass=createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stackass.Navigator screenOptions={{headerShown: false}}>
        {/* <Stackass.Screen name='splash' component={Splash}/> */}
        {/* <Stackass.Screen name='login' component={Login}/> */}
        <Stackass.Screen name='changePassword' component={changePassword}/>
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
