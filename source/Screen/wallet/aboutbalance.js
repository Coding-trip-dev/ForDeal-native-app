import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,useState ,Image, Touchable, TouchableOpacity, ScrollView, TextInput, TouchableHighlight} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee,faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

// const[isSelectedy,setSelectiony]=useState(false);


export default function About_Balance() {
  return (
   <View style={styles.container}>
  <Text style={{fontSize:17,marginTop:20}}>About Balance</Text>
<View style={styles.container1}>
<Text style={{fontSize:18,fontWeight:"bold"}}>What is  Balance Account?</Text>
<Text style={{marginLeft:5}}>1. It is a kind of  more convenient payment method which customers can make the purchase directly and also withdraw cash to bank account 2. At present the current country's account amount is displayed by default. if you have an account in another country, please [Account-Setting-Region] to modify the Region. 
</Text>
</View>
<View style={styles.container2}>
  <Text style={{fontWeight:"bold",fontSize:17}}>Balance Account Refund Rules</Text>
    <Text>1. When product stock out, order cancel, after sales refund occurs, this part iof balance account will be refund to your balance account. 2.if you used online payment, we will refund to the original payment channel. However, if the refund fails,it will be refunded to the balance account </Text>
    </View>  
<TouchableOpacity style={{width:"95%",height:55,backgroundColor:"rgb(254,219,67)",borderRadius:30,alignItems:"center",justifyContent:"center"}}>
  <Text style={{fontSize:18,fontWeight:"bold"}}>I Got it</Text>

</TouchableOpacity>
    </View>

  )}

    const styles = StyleSheet.create({
     container:{
       width:"100%",
       height:700,
       alignItems:"center",
      //  marginTop:20,
  // backgroundColor:"rgb(245,245,245)",

      //  backgroundColor:"gray",
     },


      container1: {
        width:"95%",
        height:180,
        marginTop:20,
        // alignItems:"center",
        //  backgroundColor:"rgb(246,203,135)",
  
      },
      container2: {
        width:"95%",
        height:180,
        marginTop:20,
        // alignItems:"center",
        //  backgroundColor:"green",

      },


      
    })