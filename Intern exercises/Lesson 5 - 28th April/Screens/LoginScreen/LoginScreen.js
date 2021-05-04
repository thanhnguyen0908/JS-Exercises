import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/Styles';
import {AProps} from './AProps'
import { logo } from '../../assets';




function LoginScreen({ navigation }) {

    return (
      <View style={styles.body}>
          <View style = {{flexDirection:'row', marginTop: 20, justifyContent:'space-around'}}>
          <Image style={styles.logo} source = {logo}/>
          <View>
          <Text style={styles.titles}>VMO HOLDINGS</Text>
          <Text style={{right: 5, fontSize: 20}}>React Native</Text>
          </View>
          </View>
          <Text style={styles.bigtext}>Login</Text>
          <AProps atext='Name...' inputStyle={{ marginTop: 120 }}/>
          <AProps atext='Password... ' inputStyle={{ marginTop: 20 }} />
          <TouchableOpacity>
              <Text style={styles.forgottext} >🔒 Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.button, {width: 320}]}>
              <Text style={styles.ok}>Log In</Text>
          </TouchableOpacity>
          <View style = {{alignSelf:'center', flexDirection:'row'}}>
              <Text style={{fontSize: 16}}>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style = {{color:'#fb5b5a', fontSize: 16}}>Sign Up</Text>
          </TouchableOpacity>
          </View>
        </View>
  );
  }
  export default LoginScreen