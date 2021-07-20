import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/userAction";

export default function Sigin({ navigation }) {
  let [msg, setMsg] = useState(false);
  let dispatch = useDispatch();
  let [state, setState] = useState({
    email: "",
    password: "",
    isAdmin: false,
  });
  let user = useSelector((state) => state.UserReducer.userDetails);
  let newMsg = useSelector((state) => state.UserReducer.msg);
  let submitLogin = () => {
    setMsg(false);
    dispatch(loginUser(state));
  };

  const showToastWithGravity = (newMsg) => {
    ToastAndroid.showWithGravity(
      newMsg,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    setTimeout(() => {
      navigation.navigate("Homepage");
    }, 2000);
  };

  useEffect(() => {
    if (newMsg) {
      showToastWithGravity(newMsg);
    }
  }, [user, newMsg]);
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../image/four.jpg")}
        ></Image>
      </View>

      <View style={styles.container2}>
        <View style={styles.container5}>
          <TextInput
            placeholderTextColor="black"
            onChangeText={(e) => setState({...state,"email":e})}
            style={{
              backgroundColor: "#e3e3e3",
              color: "black",
              width: "100%",
              height: "100%",
              paddingLeft: 15,
              fontSize: 15,
            }}
            placeholder={"Email"}
          ></TextInput>
        </View>
        <View style={styles.container6}>
          <TextInput
            placeholderTextColor="black"
            onChangeText={(e) => setState({...state,"password":e})}
            style={{
              backgroundColor: "#e3e3e3",
              color: "black",
              width: "100%",
              height: "100%",
              paddingLeft: 15,
              fontSize: 15,
            }}
            placeholder={"Password"}
            secureTextEntry={true}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={{
            width: "90%",
            height: "15%",
            backgroundColor: "rgb(254,219,67)",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={submitLogin}
        >
          <Text style={{ fontSize: 23 }}>Sign In</Text>
        </TouchableOpacity>
      
        {/* <View
          style={{
            width: "90%",
            height: "10%",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text>Sign In via Phone</Text>
        </View> */}
      </View>
      {/* <View style={styles.container3}>
        <Text style={{ fontSize: 15 }}>Sign In with</Text>
        <View style={styles.container4}>
          <TouchableOpacity style={{width:"40%",height:"100%",alignItems:"center",justifyContent:"center"}}>
  <Image style={{width:"80%",height:"80%"}} source={require('./assets/google.png')}></Image>

  </TouchableOpacity>
  <TouchableOpacity style={{width:"40%",height:"100%",alignItems:"center",justifyContent:"center"}}>
  <Image style={{width:"80%",height:"80%"}} source={require('./assets/facebook.png')}></Image>

  </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    elevation: 5,
    // backgroundColor: "rgb(253,211,42)",
    // justifyContent:"center",
    // alignItems:"center",
  },

  container1: {
    width: "100%",
    height: 150,
    //backgroundColor:"green",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
    // justifyContent: 'space-evenly',
  },

  container2: {
    width: "100%",
    height: 300,
    //backgroundColor: "blue",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-around",
  },
  container3: {
    width: "100%",
    height: "16%",
    //backgroundColor:"teal",
    marginTop: 150,
    alignItems: "center",
  },
  container4: {
    width: "40%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },

  container5: {
    width: "90%",
    height: "13%",
    //backgroundColor:"yellow",
    borderWidth: 0.8,
    borderRadius: 20,
    overflow: "hidden",
  },
  container6: {
    width: "90%",
    height: "13%",
    //backgroundColor:"teal",
    borderWidth: 0.8,
    borderRadius: 20,
    overflow: "hidden",
  },
});
