import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

export default function Balance({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
       

        <View style={styles.container2}>
          <Text>The Total Asset</Text>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>US$ 0.00</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("Withdraw")}}
            style={{
              width: '47%',
              height: 30,
              backgroundColor: 'white',
              elevation: 1,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',alignSelf:"center"
            }}>
            <Text>Withdraw</Text>
          </TouchableOpacity> 
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate("AboutBalance")}}
          style={{
            width: '10%',
            height: 40,alignSelf:"flex-end",
            // marginLeft: 270,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: '70%', height: '60%'}}
            source={require('../../image/question.jpg')}></Image>
        </TouchableOpacity>

       
      </View>
      <Text style={{marginLeft: 5, marginTop: 15, fontWeight: 'bold',marginLeft:20}}>
          All Bills
        </Text>
      <View style={styles.container3}>
          <Image
            style={{width: '50%', height: '50%'}}
            source={require('../../image/wallet.jpg')}></Image>
          <Text style={{marginTop: 10}}>No bills yet</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: 720,
  
  },

  container1: {
    width: '90%',
    height: 130,
    alignSelf: 'center',
  
    borderRadius: 10,
    elevation: 2,flexDirection:"row",
    backgroundColor: 'rgb(246,203,135)',
  },
  container2: {
    width: '70%',
    alignItems: 'center',
    height: 110,
    // backgroundColor:"pink",
    alignSelf: 'center',alignItems:"center",marginLeft:40
  },
  container3: {
    width: '70%',
    alignSelf: 'center',
    height: 190,
    // backgroundColor:"rgb(247,247,247)",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
