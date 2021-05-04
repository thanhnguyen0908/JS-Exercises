import React from 'react';
import { ImageBackground } from 'react-native';
import { background } from '../../assets';

function SplashScreen({ navigation }) {
    setTimeout(() => { navigation.navigate('Signup'), 3000})
    return (
      <ImageBackground 
      source={background}
      style={{flex:1}}>
      </ImageBackground>
    );
  }
export default SplashScreen