import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { actions } from './redux/actions';
import styles from '../../styles/Styles';
import {AProps} from './props/AProps';
import {logo} from '../../assets'

const LoginScreen = props => {
  const onClickLogin = () => {
    const loginInfo = {
      email: 'thanhnguyen2@gmail.com',
      password: '0123456',
    };
    props.login(loginInfo);
  };

  useEffect(() => {
    const { isLoading, jwt_token } = props.loginReducer;
    // check nếu như mà ko loading nữa + jwt_token có nghĩa là call api success
    if (!isLoading && jwt_token !== '') {
      // todo: lưu jwt_token lại để lần sau vào splash check xem có rồi thì đã login rồi
      props.navigation.navigate('Home');
    }
  }, [props.loginReducer, props.navigation]);

  return (
    <ScrollView style={styles.body}>
          <View style = {styles.wholeview}>
          <Image style={styles.logo} source = {logo}/>
          <View>
          <Text style={styles.titles}>VMO HOLDINGS</Text>
          <Text style={styles.titleslow}>React Native</Text>
          </View>
          </View>
          <Text style={styles.bigtext}>LOGIN</Text>
          <AProps 
          text='Name' 
          isLength={25} 
          inputStyle={{ marginTop: 120 }}/>
          <AProps 
          text='Password' isLength={12} 
          isSecurity={true} 
          inputStyle={{ marginTop: 20 }}/>
          <TouchableOpacity>
              <Text style={styles.forgottext} >🔒 Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={onClickLogin} 
          style={[styles.button, {width: '80%', marginTop: 50}]}>
              <Text style={styles.ok}>Log In</Text>
          </TouchableOpacity>
          <View style = {styles.alignwarn}>
              <Text style={styles.warn}>Don't have an account ? </Text>
          <TouchableOpacity>
              <Text style = {[styles.warn,{color:'#fb5b5a'}]}>Sign Up</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
  );
};

const mstp = state => ({
  loginReducer: state.loginReducer,
});
const mdtp = dispatch => ({
  login: loginInfo => dispatch(actions.login(loginInfo)),
});

export default connect(mstp, mdtp)(LoginScreen);
