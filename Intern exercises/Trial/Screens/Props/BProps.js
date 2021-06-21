import React from 'react';
import { Text } from 'react-native';
import styles from '../Styles/Styles'

export const BProps = (props) => {
  return (
    <Text style={[styles.ok, props.inputStyle]}>{props.text}</Text>
  )
}