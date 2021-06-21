import React from 'react';
import { Text } from 'react-native';

export const CProps = (props) => {
  return (
    <Text style={{color:'red'}}>{props.text}</Text>
  )
}