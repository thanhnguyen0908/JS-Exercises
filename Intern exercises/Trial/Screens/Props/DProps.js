import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../Styles/Styles'

export const DProps = (props) => {
    return (
      <View style={styles.rowtext}>
      <Text>{props.title}:</Text>
      <Text style={[props.color]}>{props.value}</Text>      
      </View>
    );
}