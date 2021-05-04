//First React Native Layout
import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import NumericInput from 'react-native-numeric-input';
 
export default class App extends React.Component {
  state={
    name:"",
  }
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      amount: 0,
      v3: 0,
    }
    this.amount = 0
  }
  changeAmount(text) {
    this.amount = text
  }
  GetValueFunction = () =>{
 
    const { TextInputValueHolder }  = this.state ;
   
       Alert.alert("Welcome",TextInputValueHolder)
    
     }
   
  render(){
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./assets/logo-red.png")}/>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Enter Name..." 
            placeholderTextColor="#003f5c"
            onChangeText={TextInputValueHolder => this.setState({TextInputValueHolder})}/>
        </View>
        <View style={styles.age}>
        <Text style={styles.agetxt}>Age: </Text>
        </View>
        <View style = {styles.box}>
          <NumericInput 
           value={this.state.v3}
           onChange={(v3) => this.setState({ v3 })} 
           rounded minValue={0} 
           onLimitReached={(isMax, msg) => console.log(isMax, msg)} />
           </View>
        <TouchableOpacity style={styles.okBtn} onPress={() => this.GetValueFunction()}>
          <Text style={styles.okText}  >OK</Text>
        </TouchableOpacity>


  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#a9a9a9",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  okBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  okText:{
    color:"white"
  },
  logo: {
    width:100,
    height:100,
    justifyContent:'flex-end',
    alignItems:'center',
    position:'absolute',
    top: 100,
    },
  age:{
    marginRight: 250,
    },
  agetxt:{
    color:"black"
  },
  box:{
    marginLeft: 180,
    backgroundColor: '#F5FCFF'
    },
});