import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../Styles/Styles';
import {logo} from '../../assets';
import { BProps } from '../Props/BProps';
import {CProps} from '../Props/Cprops';
import { DProps } from '../Props/DProps';
import {HomeProp} from '../Props/HomeProp'
import {delData} from '../../DataStorage/DataStorage'

function HomeScreen({navigation}) {
    const logout = async() =>{
        const isLogout = await delData();
        if (isLogout) {
            navigation.navigate('Login')
        }
      }
    return (
      <View style={{flex:1}}>
      <View style = {styles.titlesmall}>
          <Image 
          style={[styles.logo, 
          {width: 35, height:35, marginTop:10}]} 
          source = {logo}/>
          <Text 
          style={[styles.titles, 
          {fontSize: 25, marginTop:10, left: 10}]}>
          VMO HOLDINGS
          </Text>
      </View>


      <View style={styles.redlayer}>
      <BProps 
      text="Account" 
      inputStyle={{marginTop: 6, fontSize:13}} />
      <BProps 
      text="Taylor Swift" 
      inputStyle={{fontSize:20}}/>
      <BProps 
      text="USD 100.000.000" 
      inputStyle={{marginTop: 10, fontSize: 30}}/>
      </View>

      <View style={styles.loadingbar} >
      <View style={styles.redbar} />
      <View style={styles.silverbar} />
      </View>

      <View style={{flex:0.7}}>
      <Text style={{textAlign:'center'}}>You need to add <CProps text="99,646,347"/>
      {'\n'} to reach <CProps text="VIP 1"/></Text>
      </View>

      <View style={{flex:3, alignItems:'center'}}>
      <DProps title="Points gained" value="3,000,000,000" color={{fontWeight:'bold'}}/>
      <DProps title="Current level" value="CLOSE FRIEND" color={{color:'red'}}/>
      <DProps title="Next level" value="VIP 1" color={{color:'red'}}/>
      <DProps title="Total receipt balance" value="3,000,000,000" color={{color:'red'}}/>
      <DProps title="Export balance" value="150,000,000,000" color={{color:'red'}}/>
      <DProps title="Total piled balance on wait" value="150,000,000" color={{color:'red'}}/>
      <DProps title="Piled balance" value="150,000,000" color={{color:'red'}}/>
      </View>

      <View style={{flex: 1.55, width: "95%", alignSelf:'center', flexDirection:'row'}}>
      <HomeProp hometext="IMPORT BALANCE"/>
      <HomeProp hometext="EXPORT BALANCE"/>
      <HomeProp hometext="HISTORY"/>
      </View>

      <View style={{flex: 3.45, width: "95%", alignSelf:'center', flexDirection:'row'}}>
      <HomeProp hometext="UPDATE INFORMATION" />
      <HomeProp hometext="CHANGE PASSWORD" />
      <HomeProp hometext="LOG OUT" onPress={()=> logout()}/>
      </View>
      </View> 
      );
  }
export default HomeScreen
