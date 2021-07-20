import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,useState ,Image, Touchable, TouchableOpacity, ScrollView, TextInput,} from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee,faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

// const[isSelectedy,setSelectiony]=useState(false);


export default function WithDrawBalance() {
  return (
   <View style={styles.container}>

   <View style={styles.container1}>
<Text style={{fontSize:16,marginRight:130}}>Withdraw Amount (USD)</Text>
<TextInput style={{width:"90%",height:60,elevation:2,backgroundColor:"rgb(245,245,245)",paddingLeft:10,marginTop:5}} selectionColor={"black"} ></TextInput>

<View style={styles.container2}>
  <Text style={{fontSize:12,marginLeft:10,color:"rgb(146,146,146)",fontWeight:"bold"}}>You can withdraw  US$ 0.00.</Text>
  <TouchableOpacity style={{width:"30%",height:30,justifyContent:"center",paddingLeft:5}}>
    <Text style={{fontSize:12,color:"rgb(32,116,206)"}}>Full withdraw</Text>
  </TouchableOpacity>
</View>
    </View>
<View style={styles.container3}>
  <View style={styles.container4}>
  <TouchableOpacity style={{width:"15%",height:40,backgroundColor:"gray"}}>
{/* <View style={styles.checkboxContainer}> */}
{/* <CheckBox 
value={isSelectedy}
onValueChange={setSelctiony}
style={styles.checkbox}

/> */}
{/* <Text style={styles.label}>Yes</Text> */}

{/* </View> */}

  </TouchableOpacity>
<Text style={{fontSize:11,color:"rgb(136,136,136)",marginLeft:5}}>Tips: When you apply for withdraw, A part of your{'\n'}balance will be charged as fee by the bank 

  </Text>
  </View>

  <TouchableOpacity style={{width:"90%",height:50,backgroundColor:"rgb(255,241,180)",borderRadius:40,alignItems:"center",justifyContent:"center"}}>
    <Text style={{fontSize:18,color:"rgb(168,159,116)",fontWeight:"bold"}}>Submit</Text>
  </TouchableOpacity>
</View>

    </View>

  )}

    const styles = StyleSheet.create({
     container:{
       width:"100%",
       height:690,
      //  marginTop:20,
  backgroundColor:"rgb(245,245,245)",

      //  backgroundColor:"gray",
     },


      container1: {
        width:"100%",
        height:160,
        marginTop:10,
        alignItems:"center",
        // backgroundColor:"rgb(246,203,135)",
  
      },
// checkboxContainer:{

// flexDirection:"row",
// marginBottom:20,

// },
// checkbox:{
//   alignSelf:"center",
// },
// label:{
//   margin:8,color:"red"
// },

      
container2:{
  width:"90%",
  height:60,flexDirection:"row",
  // backgroundColor:"red",
  alignItems:"center"
},
container3:{
  width:"100%",
  height:160,
  justifyContent:"space-around",
  // backgroundColor:"blue",
alignItems:"center"
},
container4:{
  width:"90%",
  height:70,
  alignItems:"center",
  // backgroundColor:"brown",
  flexDirection:"row",
}
    })