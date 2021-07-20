import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
const windowWidth = Dimensions.get("screen").width;
// windowWidth - 20
const windowHeight = Dimensions.get("window").height;
const Gender = () => {
  return (
    <View style={styles.Container}>
      <TouchableOpacity>
        <Text style={{ color: "gray", fontSize: 20, padding: 10 }}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.mincontainer}>
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            {" "}
            Select the Gender
          </Text>
          <Text style={{ fontSize: 17, letterSpacing: 1, color: "gray" }}>
            let order know you better{" "}
          </Text>
        </View>
      </View>
      <View style={styles.containerBox}>
        <View style={styles.box}>
          <Image
            source={require("../image/male.png")}
            style={{ width: 80, height: 80 }}
            resizeMethod="auto"
            resizeMode="contain"
          />
          <Text style={{ fontSize: 20, paddingRight: 10, fontWeight: "bold" }}>
            Male
          </Text>
        </View>
        <View style={styles.box}>
          <Image
            source={require("../image/male.png")}
            style={{ width: 80, height: 80 }}
            resizeMethod="auto"
            resizeMode="contain"
          />
          <Text style={{ fontSize: 20, paddingRight: 10, fontWeight: "bold" }}>
            Female
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",
    //     backgroundColor: 'red',
    //     alignItems: 'center',
    //     justifyContent: 'center',
  },
  mincontainer: {
    // display:"none",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"green",
    width: "100%",
    // height:"42%",
    padding: 30,
  },
  textContainer: {
    // width:"100%",
    // height:"50%",
    // backgroundColor:"red",
    textAlign: "center",
    alignSelf: "center",
    padding: 20,
    // height:100,
  },
  containerBox: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"green",
    width: "100%",
    // height:"42%",
    // padding:30`
  },
  box: {
    marginBottom: 10,
    width: "70%",
    // backgroundColor:"red",
    justifyContent: "space-around",
    alignItems: "center",
    height: 150,
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
export default Gender;
