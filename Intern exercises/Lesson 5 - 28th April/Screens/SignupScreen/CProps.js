import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../Styles/Styles'

export const CProps = (props) => {
        return (
        <View style = {[styles.box, props.inputStyle]}>
              <Text style={{fontSize: 20}}>{props.number}:</Text>
              <View >
                  <TextInput style={styles.input} keyboardType='number-pad'/>
              </View>
          </View>
    );
}