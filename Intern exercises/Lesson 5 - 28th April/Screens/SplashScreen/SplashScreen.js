import React, {useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../Styles/Styles';
import { logo } from '../../assets';
import {getData} from '../../DataStorage/DataStorage';

function SplashScreen({ navigation }) {
  const checkLogin = async() => {
  const isLogin = await getData()
  navigation.navigate(isLogin ? 'Home' : 'Login')
  }
    useEffect(() => {
      setTimeout(() =>{
        checkLogin();
      }, 2000)
    }) 
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