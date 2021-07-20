import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image, Touchable, TouchableOpacity, ScrollView, TextInput} from 'react-native';




export default function Valid() {
  return (
   <View style={styles.container}>
     <Text style={{fontWeight:"bold",fontSize:20,marginTop:10,marginLeft:10}}>Valid(0)</Text>
    <View style={styles.container1}>
      <TextInput style={{width:"70%",height:40,borderRadius:7,paddingLeft:10,backgroundColor:"rgb(232,232,232)"}} placeholder={"Please enter Coupon Code "} placeholderTextColor={"rgb(179,179,179)"} selectionColor={"black"}></TextInput>
      <TouchableOpacity style={{width:"25%",height:40,alignItems:"center",justifyContent:"center",backgroundColor:"rgb(255,241,180)",borderRadius:20}}>
        <Text style={{color:"rgb(200,176,127)",fontWeight:"bold"}}>Radeem</Text>
      </TouchableOpacity>
    </View>
<View style={styles.container2}>
  <Image style={{width:"25%",height:"60%"}} source={require('../../image/coupon.jpg')}></Image>
  <Text style={{marginTop:10,color:"rgb(169,169,169)"}}>You don't have any valid coupons</Text>
</View>
   </View>

  )}

    const styles = StyleSheet.create({
     container:{
       width:"96%",
       height:720,
       marginLeft:8,
       marginTop:20,
  // backgroundColor:"rgb(247,247,247)",

      //  backgroundColor:"gray",
     },
     container1: {
      width:"100%",
      height:60,
      flexDirection:"row",
      marginTop:10,
      justifyContent:"space-around",
      // marginLeft:20,
      alignItems:"center",
      // borderRadius:10,
      // elevation:2,
      // backgroundColor:"rgb(255,227,58)",

    },

container2:{
  width:"100%",
  height:200,marginTop:180,
  // backgroundColor:"blue",
alignItems:"center",
justifyContent:"center"
}

    })