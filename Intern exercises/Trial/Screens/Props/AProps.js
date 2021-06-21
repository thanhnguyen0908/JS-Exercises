import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../Styles/Styles'

export const AProps = (props) => {
    return (
        <View style = {[styles.box, props.inputStyle]} >
            <Text style={{fontSize: 20}}>{props.text}:</Text>
            <TextInput 
            style={styles.input} 
            textAlign={'right'} 
            secureTextEntry={props.isSecurity} 
            onChangeText={props.listenerChangeText} 
            maxLength={props.isLength}
            keyboardType={props.isKeyboard}
            value={props.inputValue}
            />
          </View>
    );
}