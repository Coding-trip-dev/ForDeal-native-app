import React from 'react'
import { useState } from 'react'
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import Product from '../Component/product';



const OnSearchClick = ({ navigation }) => {
     const [search, setsearch] = useState()
     const [Onsort, setOnsort] = useState(true)
     const updateSearch = (search) => {
          setsearch(search);
     };


     return (
          <View style={styles.container}>
               <View style={styles.headerSearch}>
                    <Icon
                         brand={true}
                         name='chevron-back-outline'
                         type='ionicon'
                         color='#517fa4'
                         onPress={() => { navigation.goBack() }}
                         size={30}
                    />
                    <SearchBar
                         containerStyle={{
                              backgroundColor: "white", borderBottomWidth: 0,
                              width: '92%'
                         }}
                         inputContainerStyle={{ backgroundColor: "lightgray", borderRadius: 20, height: 30 }}
                         color="black"
                         placeholder="what are you looking for?"
                         onChangeText={(e) => { updateSearch(e) }}
                         value={search}
                    />
               </View>
               <View style={styles.headerIcon}>
                    <View style={styles.iconText}>
                         <Text style={styles.inerText} >Sort </Text>
                         <TouchableOpacity>
                              <Icon
                                   name={Onsort ? "caret-up-outline" : "caret-down-outline"}
                                   type='ionicon'
                                   color='black'
                                   size={25}
                                   onPress={() => { setOnsort(!Onsort) }}
                              />
                         </TouchableOpacity>
                    </View>

                    <View style={styles.iconText}>
                         <Text style={[styles.inerText, { borderBottomWidth: 0, }]} >Filter </Text>
                         <TouchableOpacity>
                              <Icon
                                   name="filter-outline"
                                   type='ionicon'
                                   color='black'
                                   size={25}
                              />
                         </TouchableOpacity>
                    </View>
               </View>
               <View style={[styles.hideshowContainer, { position: Onsort ? 'absolute' : null, display: Onsort ? null : 'none' }]}>
                    <TouchableOpacity>
                         <Text style={styles.modalText}>Recomended</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Text style={styles.modalText}>Mens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                         <Text style={styles.modalText}>Mens Short</Text>
                    </TouchableOpacity>
               </View>
               <ScrollView  >
                    <View style={styles.scrollContainer}>
                         <Product />
                    </View>
               </ScrollView>
          </View>
     )
}

export default OnSearchClick

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: 'rgb(245,245,245)',
     },
     headerSearch: {
          width: '100%',
          // backgroundColor: 'cyan',
          height: 45,
          flexDirection: 'row',
          alignItems: 'center', justifyContent: 'center',
          paddingHorizontal: 10,
     },
     headerIcon: {
          width: '100%',
          height: 45,
          // backgroundColor: 'green',
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
     },
     iconText: {
          flexDirection: 'row',
          alignItems: 'center'
     },
     inerText: {
          fontSize: 20,
          borderBottomWidth: 2,
          borderColor: 'yellow',
          borderRadius: 10,
     },
     scrollContainer: {
          flexWrap: 'wrap',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around'
     },
     hideshowContainer: {
          height: 150,
          width: '100%',
          backgroundColor: 'white',
          top: 90,
          zIndex: 1,
          // display: 'none',
     },
     modalText: {
          fontSize: 18,
          padding: 8,
          paddingBottom: 0,
     }
})
