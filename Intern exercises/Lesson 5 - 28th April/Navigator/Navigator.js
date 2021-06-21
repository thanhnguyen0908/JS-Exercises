import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import SignupScreen from '../Screens/SignupScreen/SignupScreen';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import BottomNav from './BottomTab'

const Stack = createStackNavigator();

const Navigator = () => (
    <Stack.Navigator initialRouteName="Splash" headerMode='none'>
      <Stack.Screen 
      name="Splash" 
      component={SplashScreen}/>
      <Stack.Screen 
      name="Signup" 
      component={SignupScreen}/>
      <Stack.Screen 
      name="Login" 
      component={LoginScreen}/>
      <Stack.Screen 
      name="Home" 
      component={BottomNav}/>
    </Stack.Navigator>
  )

export default Navigator