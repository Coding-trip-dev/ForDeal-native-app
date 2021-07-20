import React from 'react';
import { StyleSheet, Text, View ,Image, Touchable, TouchableOpacity, ScrollView, TextInput} from 'react-native';




export default function Used() {
  return (
   <View style={styles.container}>
     <View style={styles.container1}>
       <Image style={{width:"40%",height:"50%"}} source={require('../../image/coupon.jpg')}></Image>
       <Text style={{marginTop:10,color:"rgb(169,169,169)"}}>You don't have any used coupons</Text>
     </View>
   </View>

  )}

    const styles = StyleSheet.create({
     container:{
       width:"96%",
       height:720,
       marginLeft:8,
       marginTop:40,
       alignItems:"center",justifyContent:"center",
  backgroundColor:"rgb(245,245,245)",

      //  backgroundColor:"gray",
     },
    container1:{
width:"65%",height:250,
// backgroundColor:"yellow",
// justifyContent:"center",
alignItems:"center"

    }
    })