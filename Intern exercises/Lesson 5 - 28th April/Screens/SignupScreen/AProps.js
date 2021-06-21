import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../Styles/Styles'

export const AProps = (props) => {
    return (
        <View style = {[styles.box, {marginTop: 5}]}>
              <Text style={{fontSize: 20}}>{props.text}:</Text>
              <View>
                  <TextInput style={styles.input}/>
              </View>
          </View>
    );
}

// export default AProps = () => {
//     return (
//       <View>
//         <AProp atext='Name...' />
//       </View>
//     );
// }