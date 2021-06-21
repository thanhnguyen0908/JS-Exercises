import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white"
  },
  button: {
    backgroundColor:"red",
    height:40,
    alignSelf:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:5,
    borderRadius:5
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent:'flex-end',
    borderRadius: 5,
    marginTop: 10
  },
  bigtext:{
    fontSize: 35,
    top: 10,
    color: 'black',
    borderBottomWidth:1,
    borderColor: '#dcdcdc',
    width: 320,
    alignSelf:'center',
    justifyContent:'center',

  },
  goback:{
    backgroundColor:"red",
    borderRadius:5,
    padding:10
  },
  smalltext:{
    textAlign:'center', 
    color:'red', 
    marginTop:5},
  ok:{
    textAlign:'center',
    color:'white',
    fontSize: 16
  },
  forgottext:{
    textAlign:'right',
    right: 30,
    color:'black',
    fontSize: 16,
    marginTop: 10
  },
  box:{
    flexDirection:'row',
    borderBottomWidth: 2,
    borderColor:'red',
    height: 40,
    width: '80%',
    alignSelf: 'center',
    marginTop: 1,
  },
  input:{
    fontSize: 17,
    flex: 1,
    },
  titles:{
    fontSize:30,
    color:'red',
    right: 10,
    fontWeight:'bold',
    marginTop: 20
  },
  titleslow:{
    right: 5, 
    fontSize: 20
  },
  warn:{
    fontSize:16
  },
  wholeview:{
    flexDirection:'row', 
    marginTop: 20, 
    justifyContent:'space-around'},
  alignwarn:{
    alignSelf:'center', 
    flexDirection:'row'},
  titlesmall:{
    flex: 1,
    flexDirection:'row',
    left: 10},
  redlayer:{
    flex: 2.1,
    backgroundColor:'red'
  },
  loadingbar: {
    flex:0.7, 
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'center'  },
  redbar: {
    width:"30%", 
    height:'20%', 
    backgroundColor: 'red',  
    borderBottomStartRadius:5, 
    borderTopStartRadius:5,
    marginTop: 10 },
  silverbar:{
    width:"55%", 
    height:'20%', 
    backgroundColor: 'silver',  
    borderBottomEndRadius:5, 
    borderTopEndRadius:5,
    marginTop: 10 },
  rowtext:{
    marginTop: 1, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    width:"85%"
  },
  buttononhome:{
    flex: 1, 
    margin: '1.1%', 
    aspectRatio: 1.4, 
    backgroundColor:'white', 
    borderRadius: 5, 
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  container: {
    flex: 1,
  },
  containerBtnLogin: {
    backgroundColor: 'red',
    padding: 20,
  },
});
export default styles