import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { actions } from './redux/actions';

const HomeScreen = props => {
  useEffect(() => {
    // get chanel by id
    props.getChanel(47);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>
        {props.homeReducer.chanelInfo
          ? ('Updated at: ' + props.homeReducer.chanelInfo.updated_at + '\n' + 'Name: ' + props.homeReducer.chanelInfo.name)
          : 'Home'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});

const mstp = state => ({
  homeReducer: state.homeReducer,
});
const mdtp = dispatch => ({
  getChanel: chanelId => dispatch(actions.getChanel(chanelId)),
});

export default connect(mstp, mdtp)(HomeScreen);
