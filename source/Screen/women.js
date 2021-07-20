import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, TextInput } from 'react-native';


export default function Women() {
   
   return(
    <View style={styles.container}>
         <View style={styles.container1}>
         <TouchableOpacity style={styles.container2} activeOpacity={.7}>
           <Image source={require("../image/cloth.jpeg")} style={{width:30,height:30}}></Image>    
           <Text>Cloth</Text>
            
         </TouchableOpacity>
         <TouchableOpacity style={styles.container2} activeOpacity={.7}>
           <Image source={require("../image/cloth.jpeg")} style={{width:30,height:30}}></Image>    
           <Text>Cloth</Text>
            
         </TouchableOpacity>
         <TouchableOpacity style={styles.container2} activeOpacity={.7}>
           <Image source={require("../image/cloth.jpeg")} style={{width:30,height:30}}></Image>    
           <Text>Cloth</Text>
            
         </TouchableOpacity>
         <TouchableOpacity style={styles.container2} activeOpacity={.7}>
           <Image source={require("../image/cloth.jpeg")} style={{width:30,height:30}}></Image>    
           <Text>Cloth</Text>
            
         </TouchableOpacity>
         <TouchableOpacity style={styles.container2} activeOpacity={.7}>
           <Image source={require("../image/cloth.jpeg")} style={{width:30,height:30}}></Image>    
           <Text>Cloth</Text>
            
         </TouchableOpacity>
         <TouchableOpacity style={styles.container2} activeOpacity={.7}>
           <Image source={require("../image/cloth.jpeg")} style={{width:30,height:30}}></Image>    
           <Text>Cloth</Text>
            
         </TouchableOpacity>
         <TouchableOpacity style={styles.container2} activeOpacity={.7}>
           <Image source={require("../image/cloth.jpeg")} style={{width:30,height:30}}></Image>    
           <Text>Cloth</Text>
            
         </TouchableOpacity>
         <TouchableOpacity style={styles.container2} activeOpacity={.7}>
           <Image source={require("../image/cloth.jpeg")} style={{width:30,height:30}}></Image>    
           <Text>Cloth</Text>
            
         </TouchableOpacity>
  
          
      
        </View>
        


{/* <ScrollView style={{backgroundColor:"blue"}}> */}
  <View style={styles.container3}>
  <View style={styles.container4}>
           <Image source={require("../image/cloth.jpeg")} style={{width:"100%",height:150}}></Image>    
           <Text style={{color:"silver"}}>Mens New Style,casual,fashionable trousers,overall..</Text>

              <Text style={{fontWeight:"bold"}}>
             US$ 332.09
              </Text>
         </View>
        
         <View style={styles.container5}>
           <Image source={require("../image/cloth.jpeg")} style={{width:"100%",height:150}}></Image>    
           <Text style={{color:"silver"}}>Mens New Style,casual,fashionable trousers,overall..</Text>

              <Text style={{fontWeight:"bold"}}>
             US$ 332.09
              </Text>
         </View>

         <View style={styles.container4}>
           <Image source={require("../image/cloth.jpeg")} style={{width:"100%",height:150}}></Image>    
           <Text style={{color:"silver"}}>Mens New Style,casual,fashionable trousers,overall..</Text>

              <Text style={{fontWeight:"bold"}}>
             US$ 332.09
              </Text>
         </View>

         <View style={styles.container4}>
           <Image source={require("../image/cloth.jpeg")} style={{width:"100%",height:150}}></Image>    
           <Text style={{color:"silver"}}>Mens New Style,casual,fashionable trousers,overall..</Text>

              <Text style={{fontWeight:"bold"}}>
             US$ 332.09
              </Text>
         </View>

  </View>
{/* </ScrollView> */}


    </View>



   );

    
    
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    backgroundColor: 'rgb(245,245,245)',

    paddingTop:100
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container1: {
    // flex: 1,
    flexDirection:"row",
    width:"100%",height:140,
    backgroundColor: 'rgb(245,245,0)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap:"wrap",
  },
  container2: {
    // flex: 1,
    width:90,height:70,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: "space-around",
  },
  container3: {
    flex: 1,
    paddingTop:10,
    alignItems: 'center',
    justifyContent: 'space-around',borderRadius:10,flexDirection:"row",flexWrap:"wrap"
  },
  container4: {
    // flex: 1,
    width:165,height:260,
    backgroundColor: 'white',marginTop:8,
    alignItems: 'flex-start',
    justifyContent: 'center',paddingLeft:10,
    elevation:10,borderRadius:5
  },
  container5: {
    // flex: 1,
    width:165,height:250,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',paddingLeft:10,
    elevation:10,borderRadius:5
  },
});