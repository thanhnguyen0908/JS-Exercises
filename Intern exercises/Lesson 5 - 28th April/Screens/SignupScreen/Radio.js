import React from 'react';
import { RadioButton } from 'react-native-paper';
import { View, Text} from 'react-native';

const Radio = () => {
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={{marginTop: 30, flexDirection:'row', justifyContent:'space-evenly'}}>
            <RadioButton
            color='red'
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}/>
            <Text style={{fontSize:25, right: 25}}>Ha Noi</Text>
            <RadioButton
            color='red'
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}/>
            <Text style={{fontSize:25, right: 25}}>Thai Nguyen</Text>
        </View>
    )
}
export default Radio