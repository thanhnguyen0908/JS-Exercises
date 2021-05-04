import React from 'react';
import { RadioButton } from 'react-native-paper';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from '../Styles/Styles';
import {AProps} from './AProps';
import { logo } from '../../assets';
import {BProps} from './BProps';
import {CProps} from './CProps';



function SignupScreen({ navigation }) {
    const [checked, setChecked] = React.useState('first');
    return (
      <View style={styles.body}>
          <View style = {{flexDirection:'row', marginTop: 20, justifyContent:'space-around'}}>
          <Image style={styles.logo} source = {logo}/>
          <View>
          <Text style={styles.titles}>VMO HOLDINGS</Text>
          <Text style={{right: 5, fontSize: 20}}>React Native</Text>
          </View>
          </View>
          <Text style={styles.bigtext}>Sign Up</Text>
            <View style={{marginTop: 60, flexDirection:'row', justifyContent:'space-evenly'}}>
            <RadioButton
            color='red'
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}/>
            <Text style={{fontSize:25, right: 25}}>Ha Noi</Text>
            <RadioButton
            color='red'
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
            />
            <Text style={{fontSize:25, right: 25}}>Thai Nguyen</Text>
            </View>
          <AProps text='Name' />
          <AProps text='Adress' />
          <AProps text='User Name'/>
          <AProps text='Email' />
          <BProps securetext='Password' inputStyle={{marginTop: 10}}/>
          <BProps securetext='Confirm Password' inputStyle={{marginTop: 10}}/>
          <CProps number='Phone Number' inputStyle={{marginTop: 10}}/>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={[styles.button, {width: 160}]}>
              <Text style = {styles.ok}>Sign Up</Text>
          </TouchableOpacity>
          <View style = {{alignSelf:'center', flexDirection:'row'}}>
              <Text style ={{fontSize:15}}>Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style = {{color:'#fb5b5a', fontSize: 15}}>Log in</Text>
          </TouchableOpacity>
          </View>
        </View>
  );
  }
  export default SignupScreen