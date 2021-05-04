import React from 'react';
import { ImageBackground, View, Image, Text } from 'react-native';
import { background } from '../../assets';
import styles from '../Styles/Styles';
import { logo } from '../../assets';


function SplashScreen({ navigation }) {
    setTimeout(() => { navigation.navigate('Login'), 3000})
    return (
        <View style = {{flexDirection:'row', top: 300, justifyContent:'space-around'}}>
          <Image style={styles.logo} source = {logo}/>
          <View>
          <Text style={[styles.titles, {marginTop: 35}]}>VMO HOLDINGS</Text>
          </View>
          </View>
    );
  }
export default SplashScreen