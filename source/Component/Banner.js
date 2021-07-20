import React, {useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import {StyleSheet,View,Text,Dimensions, Image } from 'react-native';
const windowWidth = Dimensions.get('screen').width;
// windowWidth - 20
const windowHeight = Dimensions.get('window').height;
const Banner = ({item}) => {
  return ( 
     <View style={styles.Container}>
         {/* <TouchableOpacity> */}

          <Image  resizeMode='cover'
          style={{width:'100%',height:'70%'}}
          source={{uri:item.url}} />
          {/* </TouchableOpacity> */}
           <Text style={{fontSize:20,paddingHorizontal:15,}}>{item.title}</Text>
           <Text style={{fontSize:15,paddingHorizontal:15}}>{item.Des}</Text>
     </View>
 );
};
const styles = StyleSheet.create({
Container:{
 height: windowHeight/3,
    width: windowWidth-20,
    margin:10,
    backgroundColor: '#ffff',
    elevation:3,
//     alignItems: 'center',
//     justifyContent: 'center',
},
})
export default Banner;
