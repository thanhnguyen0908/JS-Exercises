import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Styles';
import {AProps} from '../Props/AProps'
import { logo } from '../../assets';
import {storeData} from '../../DataStorage/DataStorage'


export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userInfo = { username, password };
    
    const check = () => {
        if(username.length > 3 && password.length > 3 ){
            storeData(userInfo)
            .then
            navigation.navigate('Home')
        }
        else{
            alert('Please fill in your credentials')
        }
    }
      
    return (
      <View style={styles.body}>
          <View style = {styles.wholeview}>
          <Image style={styles.logo} source = {logo}/>
          <View>
          <Text style={styles.titles}>VMO HOLDINGS</Text>
          <Text style={styles.titleslow}>React Native</Text>
          </View>
          </View>
          <Text style={styles.bigtext}>LOGIN</Text>
          <AProps 
          inputValue={username} text='Name' 
          isLength={25} 
          inputStyle={{ marginTop: 120 }} 
          listenerChangeText={setUsername}/>
          <AProps 
          inputValue={password} 
          text='Password' isLength={12} 
          isSecurity={true} 
          inputStyle={{ marginTop: 20 }} 
          listenerChangeText={setPassword}/>
          <TouchableOpacity>
              <Text style={styles.forgottext} >🔒 Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={check} 
          style={[styles.button, {width: '80%', marginTop: 50}]}>
              <Text style={styles.ok}>Log In</Text>
          </TouchableOpacity>
          <View style = {styles.alignwarn}>
              <Text style={styles.warn}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style = {[styles.warn,{color:'#fb5b5a'}]}>Sign Up</Text>
          </TouchableOpacity>
          </View>
        </View>
  );
  }
