import React from 'react';
import { View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import styles from '../Styles/Styles';
import { logo } from '../../assets';
import {AProps} from '../Props/AProps';
import Radio from './Radio';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';



function SignupScreen({ navigation }) {
    return (
        <KeyboardAwareScrollView onPress={() => {Keyboard.dismiss();}} style={{backgroundColor:'white'}}>
        <View style={styles.body}>
          <View style = {styles.wholeview}>
          <Image style={styles.logo} source = {logo}/>
          <View>
          <Text style={styles.titles}>VMO HOLDINGS</Text>
          <Text style={styles.titleslow}>React Native</Text>
          </View>
          </View>
          <Text style={styles.bigtext}>SIGN UP</Text>
          <Radio /> 
          <AProps 
          text='Name' 
          inputStyle={{marginTop: 15}} 
          isLength={30}/>
          <AProps 
          text='Adress' 
          isLength={30} 
          inputStyle={{marginTop: 5}}/>
          <AProps 
          text='User Name' 
          isLength={25} 
          inputStyle={{marginTop: 5}}/>
          <AProps 
          text='Email' 
          isLength={30} 
          inputStyle={{marginTop: 5}}/>
          <AProps 
          text='Password' 
          isLength={12} 
          isSecurity={true} 
          inputStyle={{marginTop: 5}}/>
          <AProps 
          text='Confirm Password' 
          isLength={12} 
          isSecurity={true} 
          inputStyle={{marginTop: 5}}/>
          <AProps 
          num='+84-'
          text='Phone Number' 
          isKeyboard={'numeric'} 
          isLength={10} 
          inputStyle={{marginTop: 5}}/>
          <Text style={styles.smalltext}>
          Please remove number 0 at the front of the series.{"\n"}Ex: +84-91XX</Text>
          <TouchableOpacity 
          onPress={() => navigation.navigate('Home')} 
          style={[styles.button, {width: '60%'}]}>
              <Text style = {styles.ok}>Sign Up</Text>
          </TouchableOpacity>
          <View style = {styles.alignwarn}>
              <Text style ={styles.warn}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style = {[styles.warn, {color:'#fb5b5a'}]}>Log in</Text>
          </TouchableOpacity>
          </View>
        </View>
        </KeyboardAwareScrollView>
  );
  }
  export default SignupScreen