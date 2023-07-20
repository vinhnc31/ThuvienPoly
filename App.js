import { StyleSheet } from "react-native";
import Splash from './components/Splash';
import Login from './components/Login';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import changePassword from "./components/changePassword";
const Stackass=createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stackass.Navigator>
        <Stackass.Screen name='Splash' component={Splash} />
        <Stackass.Screen name='Login' component={Login}  />
        <Stackass.Screen name='changePassword' component={changePassword} />
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
