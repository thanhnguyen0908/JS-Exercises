import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import SignupScreen from './Screens/SignupScreen/SignupScreen';
import SplashScreen from './Screens/SplashScreen/SplashScreen';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
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
      component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
