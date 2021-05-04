import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/Styles'

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'black', marginBottom: 10}}>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={styles.goback}>
              <Text>Go Back</Text>
          </TouchableOpacity>
      </View>
    );
  }
export default HomeScreen