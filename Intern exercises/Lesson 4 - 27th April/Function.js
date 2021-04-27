import React, { useState }  from 'react';
import { Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from "./Styles";


export default function Function() {
  const [names, setName] = useState("Empty")
  const [age, setAge] = useState(0)
  const [checked, setCheck] = useState(null)

  const Check = () => {
    setCheck(checked ? false : true )
    if ({checked:true}) { alert("Welcome " + names + ", " + age +" years old")}
    else { alert("No name entered")}
}
  const increase = () => {
    setAge(prevCount => prevCount + 1);
  }
  const decrease = () => {
    setAge(prevCount => prevCount - 1);
    if(age < 1){
      alert('Error')
      setAge(0);
    }
  }
  const OnchangeHandler = (val) => {
    setName(val)
    setCheck({checked:true})
  } 
  return(
    <View style={styles.body}>
        <Text style={styles.text}>Name: </Text>
        <TextInput 
        style={styles.inputText} 
        placeholder='Enter your name...' 
        placeholderTextColor='white'
        onChangeText={OnchangeHandler}>
        </TextInput>
        <View style={styles.age}>
            <Text style={styles.text}>Age:</Text>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.textTouch} onPress={decrease}>-</Text>
            </TouchableOpacity>
            <Text style={styles.textTouch}>{age}</Text>
            <TouchableOpacity style={styles.touch} onPress={increase}>
                <Text style={styles.textTouch}>+</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={Check} style={styles.button}>
            <Text>OK</Text>
        </TouchableOpacity>
      </View>
)
}