import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image, Touchable, TouchableOpacity, ScrollView, TextInput} from 'react-native';




export default function Cashback({navigation}) {
  return (
   <View style={styles.container}>
    <View style={styles.container1}>
      <TouchableOpacity style={{width:"10%",height:40,marginLeft:270,alignItems:"center",justifyContent:"center"}} 
      onPress={()=>{navigation.navigate("AboutCashBack")}}
      >
        <Image style={{width:"70%",height:"60%"}} source={require('../../image/Q.jpg')}></Image>
      </TouchableOpacity>
    
    <View style={styles.container2}>
<Text>The Total Asset</Text>
<Text style={{fontSize:30,fontWeight:"bold"}}>US$ 0.00</Text>


    </View>
<Text style={{marginLeft:5,marginTop:15,fontWeight:"bold"}}>All Bills</Text>

<View style={styles.container3}>
  <Image style={{width:"50%",height:"50%"}} source={require('../../image/wallet.jpg')}></Image>
  <Text style={{marginTop:10}}>No bills yet</Text>
</View>

    </View>


    </View>

  )}

    const styles = StyleSheet.create({
     container:{
       width:"96%",
       height:720,
       marginLeft:8,
      //  marginTop:20,
  backgroundColor:"rgb(247,247,247)",

      //  backgroundColor:"gray",
     },


      container1: {
        width:"90%",
        height:140,
        // marginTop:80,
        marginLeft:20,
        // alignItems:"center",
        borderRadius:10,
        elevation:2,
        backgroundColor:"rgb(255,227,58)",
  
      },
      container2:{
width:"70%",alignItems:"center",
// justifyContent:"space-around",
height:110,
// backgroundColor:"pink",
marginLeft:50

      },
container3:{
  width:"70%",marginTop:50,marginLeft:45,
  height:190,
  // backgroundColor:"rgb(247,247,247)",
  alignItems:"center",justifyContent:"center"
}

    })