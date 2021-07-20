import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import {
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  TextInput,
  Image,
  AsyncStorage,
  Text,
} from "react-native";
import { Button, Icon } from "react-native-elements";
// import { colors } from "../constants/themes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import minus from "../image/minus.png";
import plus from "../image/plus.png";

const ProductDetail = ({ route }) => {
  let navigation = useNavigation();
  let { item } = route.params;
  let [qty, setQty] = useState(1);
  let [msg, setMsg] = useState(false);
  let dispatch = useDispatch();
  console.log(item);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView />
      <View style={{ width: "100%", height: "99%" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={{ width: "100%" }}>
            {/* Header Start */}
            <View
              style={{
                width: "95%",
                height: 90,
                alignItems: "center",
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name={"arrow-back-outline"} size={30} />
              </TouchableOpacity>
              <View
                style={{
                  width: "80%",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    letterSpacing: 0.8,
                  }}
                >
                  Products
                </Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <Icon name="shopping-cart" type="entypo" />
              </TouchableOpacity>
            </View>
            {/* Header End */}
            <View
              style={{
                width: "90%",
                height: 300,
                alignSelf: "center",
              }}
            >
              <Image
                source={{
                  uri:
                    item.images.length > 0
                      ? item.images[0].src
                      : "https://cheeryone.com/wp-content/uploads/2021/07/dgfgh.png",
                }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="stretch"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                justifyContent: "space-between",
                alignSelf: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <Text
                style={{
                  // color: colors.GREY.TAB,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                US $ {item.price}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-between",
                alignSelf: "center",
                alignItems: "center",
                height: 50,
                elevation: 1,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: "50%",
                  flexDirection: "row",
                  justifyContent: "space-evenly",

                  height: "100%",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => setQty(qty - 1)}>
                  <Image
                    source={minus}
                    style={{ width: 50, height: 20 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{qty}</Text>
                <TouchableOpacity onPress={() => setQty(qty + 1)}>
                  <Image
                    source={plus}
                    style={{ width: 50, height: 20 }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <Button
                title="Add to cart"
                onPress={() => {
                  dispatch({
                    type: "ADD_ITME_INTO_CART",
                    payload: item,
                  });
                  Alert.alert("Item has been added");
                }}
              />
            </View>

            <Text
              style={{
                width: "90%",
                alignSelf: "center",
                marginTop: "4%",
                fontFamily: "sans-serif",
                fontSize: 26,
                fontWeight: "bold",
              }}
            >
              Details
            </Text>
            <View
              style={{
                width: "93%",
                alignSelf: "center",
                marginTop: "4%",
              }}
            >
              <Text style={{ width: "100%" }}>{item.description}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductDetail;
