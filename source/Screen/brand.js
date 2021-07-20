import React, {useEffect} from 'react';
import { TouchableOpacity } from 'react-native';
import {StyleSheet,View,Text,Dimensions, ScrollView } from 'react-native';
import { Header } from  'react-native-elements';
import Banner from '../Component/Banner';
const windowWidth = Dimensions.get('screen').width;
// windowWidth - 20
const windowHeight = Dimensions.get('window').height;
const bannerlist=[
  {
    title:"New IN",
Des:"50% off",
url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpshtf8nyh_0uHN-jspkXPIEVRg9G5J7JlhQ&usqp=CAU'
},{
  title:"Where finishing is just the begining",
  Des:"New In",
  url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpshtf8nyh_0uHN-jspkXPIEVRg9G5J7JlhQ&usqp=CAU'
},
{
  title:"Our new from popfeel",
  Des:"New In Brand",
  url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpshtf8nyh_0uHN-jspkXPIEVRg9G5J7JlhQ&usqp=CAU'
},
{
  title:"Latest Fashion",
  Des:"70% off",
  url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpshtf8nyh_0uHN-jspkXPIEVRg9G5J7JlhQ&usqp=CAU'
}
]
const Brand = ({navigation}) => {
  return ( 
<View style={styles.Container}>
      <View  style={styles.header}>
        <Text style={styles.headertext} >Brand</Text>
      </View>
      <ScrollView style={styles.banner}>
      {bannerlist.map((data,index)=>{
    return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Brandin")}}>
      <Banner key={index} item={data} />      

    </TouchableOpacity>
      )})}
      </ScrollView>
</View>
 );
};
const styles = StyleSheet.create({
Container:{
 height: '100%',
    width: '100%',
    backgroundColor: 'rgb(245,245,245)',
    alignItems: 'center',
    // justifyContent: 'center',
},
header:{
  width:windowWidth,
  height:50,
  backgroundColor:'white',
  alignItems:"center",
  justifyContent:"center"
},
headertext:{
  width:windowWidth,
  textAlign:"center",
  fontSize:20,
  fontWeight:"bold"
},
})
export default Brand;
