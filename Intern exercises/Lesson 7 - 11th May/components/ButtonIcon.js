import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonIcon = (props) => {
  const { onPress, label } = props; 


  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonLabelStyle}>{label}Delete</Text> 
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 10,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    padding: 5,
  },
  buttonLabelStyle: {
    fontWeight:'bold',
    margin: 5,
  }
})

export default ButtonIcon;
