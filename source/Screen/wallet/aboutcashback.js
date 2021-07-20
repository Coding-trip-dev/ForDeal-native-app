import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,useState ,Image, Touchable, TouchableOpacity, ScrollView, TextInput, TouchableHighlight} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee,faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

// const[isSelectedy,setSelectiony]=useState(false);


export default function About_Cashback() {
  return (
   <View style={styles.container}>
  <Text style={{fontSize:17,marginTop:20}}>About Cashback</Text>
<View style={styles.container1}>
<Text style={{fontSize:18,fontWeight:"bold"}}>What is  Cashback Account?</Text>
<Text style={{marginLeft:5}}>After signing the order successfylly, you can post your  photo review and get the Cashback.You can pay with your Cashback account balance for your next order. The Cashback Account balnce could be used to pay for products, but not including  Shipping Cost and COD Cost. it can't be withdrawn.  
</Text>
</View>
<View style={styles.container2}>
  <Text style={{fontWeight:"bold",fontSize:17}}>Voucher Account Expiration Rule</Text>
    <Text>The Cashback Account balnce is invalid at least 3 months after signing the order, Mar 31st, June 30th, Sep 30th, Dec 31st of each year are the expiration dates. For example, if you recieve the Cashback between the Apr 1st  and June 30th, the Cashback expiration date will be Sep 30th.</Text>
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