import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#003f5c',
  },
  body: {
    marginTop: 50,
    margin: 25,
  },
  text: {
    fontSize: 15,
    marginRight: 180,
    alignItems:'center',
    color:'white'
  },
  inputText: {
    width:"100%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:60,
    marginTop: 10,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    color:'white'
  },
  button: {
    width:"100%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  age: {
    flexDirection: 'row',
  },
  touch: {
    borderRadius:15,
    backgroundColor:"#465881",
  },
  textTouch: {
    padding: 10,
    fontSize: 20,
    color:'white'
  },
  logo: {
    width: 100,
    height: 100,
    alignItems:'center',
    justifyContent:'flex-end',
    top: 50
  },
  Welcome: {
    alignSelf:'center',
    justifyContent:'center',
    color:'white'
  }
});
export default styles