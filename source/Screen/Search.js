import React, {useEffect} from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import {StyleSheet,View,Text,Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchItem from '../Component/SearchItem';
const windowWidth = Dimensions.get('screen').width;
// windowWidth - 20
const windowHeight = Dimensions.get('window').height;

const Search = ({navigation}) => {


  const [search, setsearch] = useState()
  const updateSearch = (search) => {
    setsearch( search );
  };
  return ( 
<View style={styles.Container}>
<SearchBar
               containerStyle={{backgroundColor:"white",borderBottomWidth:0,
             }}
               inputContainerStyle={{backgroundColor:"lightgray",borderRadius:20, height:30}}
               color="black"
        placeholder="what are you looking for?"
        onChangeText={(e)=>{updateSearch(e)}}
        value={search}
      />
      <View style={{flexDirection:'row'}}>
        <View style={styles.leftContainer}>
          <TouchableOpacity>
            <Text style={styles.leftText}>Recommend</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Electronics</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Shoes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Watches</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Kids&Toys</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Stationery</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.leftText}>Automotive</Text>
          </TouchableOpacity>

        </View>
    
      <ScrollView  style={styles.RightContainer}>
             <Text style={{paddingLeft:10,fontWeight:'500'}}>Hot</Text>
        <View style={styles.scrollContainer}>
         <SearchItem navigation={navigation}/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
        </View>
        <Text style={{paddingLeft:10,fontWeight:'500'}}>New in</Text>
        <View style={styles.scrollContainer}>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
        </View>
        <Text style={{paddingLeft:10,fontWeight:'500'}}>Men</Text>
        <View style={styles.scrollContainer}>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
         <SearchItem/>
        </View>

      </ScrollView>
      
        
</View>
</View>
 );
};
const styles = StyleSheet.create({
Container:{
 height: '100%',
    width: '100%',
    backgroundColor: 'rgb(245,245,245)',
    // alignItems: 'center',
    // justifyContent: 'center',
},
leftContainer:{
  // flex:1,
  backgroundColor:'lightgray',
  width:'25%',
  height:'100%',
  alignItems:'center'
},
leftText:{padding:10,
  alignSelf:'center'
  ,backgroundColor:'white',
  width:100,
},
RightContainer:{
  flex:1,
  // height:770,
  // backgroundColor:'cyan',
  width:'75%',
  
},
scrollContainer:{
  flexDirection:'row',
  width:'100%',
  flexWrap:'wrap',
  alignItems:'center',
  justifyContent:'space-around'
}
})
export default Search;
