import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

export default function SearchItem({props}) {
     return (
          
         <TouchableOpacity style={styles.container} onPress={()=>props.navigation.navigate("OnSearchClick")}>
          <Image source={require('../image/cloth.jpeg')} style={{width:40,height:40}}  />
           <Text style={{textAlign:'center'}}>Mens SweatShirts</Text>
         </TouchableOpacity>
          
     )
}

const styles = StyleSheet.create({
     container:{
          width:'30%',
          padding:5,
          marginVertical:5,
          // height:50,
          backgroundColor:'white',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:10,
          
     }
})
