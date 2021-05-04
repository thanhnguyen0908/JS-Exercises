import React from "react";
import { View } from "react-native";
import Function from "./Function.js";
import Logo from "./Logo.js";
import styles from "./Styles.js"

export default function App() {
  return (
    <View style={styles.container}>
        <View>
          <Logo />
        </View>
        <View>
          <Function />
        </View>
      </View>
  );
};
