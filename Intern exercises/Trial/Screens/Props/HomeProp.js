import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/Styles'

export const HomeProp = (props) => {
    return (
      <View style={styles.buttononhome}>
      <TouchableOpacity style={{justifyContent:'center', height:"100%", width:"100%" }} onPress={props.onPressHandler}>
            <Text style={{textAlign:'center'}}>{props.hometext}</Text>
        </TouchableOpacity>
      </View>
    );
}