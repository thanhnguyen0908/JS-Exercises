import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'


const Tab = createBottomTabNavigator();

function Setup() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SETUP BILL</Text>
    </View>
  );
}

function Cart() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CART</Text>
    </View>
  );
}

function Bill() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>BILL</Text>
    </View>
  );
}

function Check() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CHECK OUT</Text>
    </View>
  );
}

const BottomNav = () => {
  return(
    <Tab.Navigator
    initialRouteName="ACCOUNT"
    tabBarOptions={{activeTintColor:'#e91e63'}}>
    <Tab.Screen 
    name="ACCOUNT"
    component={HomeScreen}
    options={{tabBarLabel: "ACCOUNT"}}
    />
    <Tab.Screen 
    name="SETUP BILL"
    component={Setup}
    options={{tabBarLabel: "SETUP BILL"}}
    />
    <Tab.Screen 
    name="CART"
    component={Cart}
    options={{tabBarLabel: "CART"}}
    />
    <Tab.Screen 
    name="BILL"
    component={Bill}
    options={{tabBarLabel: "BILL"}}
    />
    <Tab.Screen 
    name="CHECK OUT"
    component={Check}
    options={{tabBarLabel: "CHECK OUT"}}
    />
    </Tab.Navigator>
  )
}
export default BottomNav