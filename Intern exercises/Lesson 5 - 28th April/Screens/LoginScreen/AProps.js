import React from 'react';
import { TextInput } from 'react-native';
import styles from '../Styles/Styles'

export const AProps = (props) => {
    return (
        <TextInput 
        style={[styles.inputUser, props.inputStyle]} 
        placeholder={props.atext}
        placeholderTextColor='black'>
        
        </TextInput>
    );
}

// export default AProps = () => {
//     return (
//       <View>
//         <AProp atext='Name...' />
//       </View>
//     );
// }