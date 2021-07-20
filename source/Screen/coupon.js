import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Product from '../Component/product';
 
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/actions/userAction";


export default function Account({ navigation }) {
  
  let user = useSelector((state) => state.UserReducer.userDetails);
  let [isUser,setUser] = useState(false)
  let dispatch = useDispatch()
  useEffect(()=>{
    setUser(user.user)
  },[user])

  const LogoutMe = ()=>{
    setUser(false)
    dispatch(Logout())
  }

  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.container7}>
            <TouchableOpacity style={{ width: "15%", height: "100%", marginLeft: 310, justifyContent: "center", alignItems: 'center' }}>
              <Image style={{ width: 20, height: 20, }} source={require('../image/m12.jpeg')}></Image>
            </TouchableOpacity>
          </View>
         
          <View style={styles.container8}>
            <Image style={{ width: 50, height: 50, }} source={require('../image/m11.jpeg')}></Image>
            {!isUser && 
            <TouchableOpacity style={{ width: "30%", height: 30, backgroundColor: "black", borderRadius: 30, alignItems: "center", justifyContent: "center" }} onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: "rgb(254,219,67)", fontWeight: "bold" }}>Sign Up</Text>
            </TouchableOpacity>}
            {isUser && 
            <Text style={{ color: "black", fontWeight: "bold" }}>{user.user.email}</Text>
            }
            {!isUser && 
            <TouchableOpacity style={{ width: "30%", height: 30, borderRadius: 30, alignItems: "center", justifyContent: "center", borderWidth: 0.8 }} onPress={() => navigation.navigate("Login")}>
              <Text>Sign In</Text>
            </TouchableOpacity>
          }
            {isUser && 
            <TouchableOpacity style={{ width: "30%", height: 30, borderRadius: 30, alignItems: "center", justifyContent: "center", borderWidth: 0.8 }} onPress={LogoutMe}>
              <Text>Logout</Text>
            </TouchableOpacity>
          }
          </View>

        </View>


        <View style={styles.container2}>
          <View style={{ width: "100%", height: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ paddingLeft: 10 }}>My Orders</Text>
            <TouchableOpacity style={{ width: "12%", height: "100%", alignItems: "center", flexDirection: "row", justifyContent: "space-around" }}>
              <Text>All</Text>
              <Image style={{ width: "30%", height: "60%" }} source={require('../image/m14.jpeg')}></Image>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 100, flexDirection: "row", justifyContent: "space-around" }}>
            <TouchableOpacity style={{ width: "20%", height: "90%", }}>
              <Image style={{ width: "60%", height: "30%" }} source={require('../image/m1.jpeg')}></Image>
              <Text style={{ paddingLeft: 1, fontSize: 11 }}>pending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "20%", height: "90%", }}>
              <Image style={{ width: "60%", height: "30%" }} source={require('../image/m2.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Preparing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "20%", height: "90%", }}>
              <Image style={{ width: "50%", height: "30%" }} source={require('../image/m3.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Shipped</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "20%", height: "90%", }}>
              <Image style={{ width: "40%", height: "30%" }} source={require('../image/m4.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Review</Text>
            </TouchableOpacity>

          </View>
        </View>


        <View style={styles.container3}>
          <Text style={{ fontSize: 15, paddingLeft: 15, color: "black" }}>Services</Text>
          <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 5 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("Wallet") }} >
              <Image style={{ width: 25, height: 25 }} source={require('../image/m5.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Coupon") }} >
              <Image style={{ width: 25, height: 25 }} source={require('../image/m5.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Coupon</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image style={{ width: 25, height: 25 }} source={require('../image/m5.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Wishlist</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 50, flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 5 }}>
            <TouchableOpacity >
              <Image style={{ width: 25, height: 25 }} source={require('../image/m5.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image style={{ width: 25, height: 25 }} source={require('../image/m5.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image style={{ width: 25, height: 25 }} source={require('../image/m5.jpeg')}></Image>
              <Text style={{ fontSize: 11 }}>Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container4}>
          <View style={{ width: "30%", height: 30, flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", }}>
            <Image style={{ width: 22, height: 20 }} source={require('../image/m13.jpeg')}></Image>
            <Text style={{ fontSize: 13 }} >Settings</Text>
          </View>
          <TouchableOpacity style={{ width: "15%", height: "60%", alignItems: "center", justifyContent: "center", }}>
            <Image style={{ width: "50%", height: 20 }} source={require('../image/m14.jpeg')}></Image>
          </TouchableOpacity>
        </View>
        <Text style={{ paddingLeft: 10, marginTop: 10 }}>Recomended</Text>

        <View style={styles.reco}>
          <Product />
        </View>


      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white", justifyContent: "center"
  },

  container1: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(254,219,67)",
  },
  container7: {
    width: "100%",
    height: "20%",
    // backgroundColor:"pink",

  },
  container8: {
    width: "95%",
    height: 100,
    // backgroundColor:"green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
    marginRight: 15,
  },


  container2: {
    width: "95%",
    height: 90,
    backgroundColor: "white", borderRadius: 10,
    alignItems: "center",
    elevation: 15, paddingLeft: 10, paddingRight: 10, alignSelf: "center"
    // justifyContent:"space-around",
  },
  container3: {
    width: "95%",
    height: 150,
    backgroundColor: "white",
    marginTop: 10,
    elevation: 15,
    alignSelf: "center", padding: 10, borderRadius: 10
  },
  container4: {
    width: "95%",
    height: 40,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "teal",
    backgroundColor: "rgb(280,280,280)",
    alignItems: "center",
    elevation: 40, alignSelf: "center", borderRadius: 10
  },
  container5: {
    width: "100%",
    height: 300,
    backgroundColor: "red"
  },
  container6: {
    width: "100%",
    height: 300,
    backgroundColor: "gray"
  },
  reco: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'space-around', borderRadius: 10, flexDirection: "row", flexWrap: "wrap"
  }


});