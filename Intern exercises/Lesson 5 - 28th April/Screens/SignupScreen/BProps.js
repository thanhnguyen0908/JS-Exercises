import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../Styles/Styles'

export const BProps = (props) => {
    return (
        <View style = {[styles.box, props.inputStyle]}>
              <Text style={{fontSize: 20}}>{props.securetext}:</Text>
              <View>
                  <TextInput style={styles.input} secureTextEntry/>
              </View>
          </View>
    );
}