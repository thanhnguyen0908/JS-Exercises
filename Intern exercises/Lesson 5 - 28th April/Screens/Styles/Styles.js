import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: "white"
  },
  inputUser: {
    borderBottomWidth:1,
    borderColor: 'red',
    height: 45,
    marginBottom:5,
    color:'black',
    width: 340,
    alignSelf:'center',
    justifyContent:'center',
    fontSize: 20
  },
  button: {
    backgroundColor:"#fb5b5a",
    height:40,
    alignSelf:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:5,
    borderRadius:5
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent:'flex-end',
    borderRadius: 50,
    marginTop: 10
  },
  bigtext:{
    fontSize: 35,
    top: 40,
    color: 'black',
    borderBottomWidth:1,
    borderColor: 'grey',
    width: 340,
    alignSelf:'center',
    justifyContent:'center',

  },
  goback:{
    backgroundColor:"#fb5b5a",
    borderRadius:5,
    padding:10
  },
  smalltext:{
    alignSelf:'center'
  },
  ok:{
    alignSelf:'center',
    justifyContent:'center',
    color:'white',
    fontSize: 16
  },
  forgottext:{
    textAlign:'right',
    right: 30,
    color:'black',
    fontSize: 16
  },
  box:{
    flexDirection:'row',
    borderBottomWidth: 1,
    borderColor:'red',
    height: 40,
    width: 340,
    alignSelf:'center',
    flexWrap:'wrap',
    marginTop: 1,
    },
  input:{
    fontSize: 18, 
    textAlign:'right'
    },
  titles:{
    fontSize:30,
    color:'red',
    right: 10,
    fontWeight:'bold',
    marginTop: 20
  }
});
export default styles