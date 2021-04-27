import React from 'react';
import { View, Image } from 'react-native';
import styles from "./Styles"

const Logo = () => {
  return (
    <View style = {styles.body}>
          <Image style={styles.logo} source={require("./assets/logo-red.png")}/>
      </View>
  );
};
export default Logo
