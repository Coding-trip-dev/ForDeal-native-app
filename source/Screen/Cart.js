import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Product from "../Component/product";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
const users = [
  {
    name: "brynn",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
  },
  // ... // more users here
];
const Cart = () => {
  let [cartItems, setCartItems] = useState([]);
  let cart = useSelector((state) => state.CatReducer.cartItems);
  let dispatch = useDispatch()

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  console.log(cartItems);
  return (
    <>
      <Text style={{ fontSize: 30, alignSelf: "center" }}>cart</Text>
      {cartItems.length > 0 ? (
        <ScrollView style={{ marginTop: 10 }}>
          {cartItems.map((item,ind) => (
            <Card>
              <Card.Image
                  source={{
                    uri:
                    item.images &&
                      item.images.length > 0
                        ? item.images[0].src
                        : "https://cheeryone.com/wp-content/uploads/2021/07/dgfgh.png",
                  }}
                  style={{ width: "100%", height: 150 }}
              ></Card.Image>
              <Text style={{ marginBottom: 10 }}>{item.name}</Text>
              <Button
                onPress={()=>dispatch({
                  type:"REMOVE_ITEM_FROM_CART",
                  payload: ind
                })}
                icon={<Icon name="trash" color="#ffffff" type="entypo" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="Remove"
              />
            </Card>
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={{ marginTop: 10 }}>
          <Image
            style={{ alignSelf: "center" }}
            source={require("../image/coupon.jpg")}
          ></Image>
          <Text
            style={{
              marginTop: 10,
              color: "rgb(169,169,169)",
              alignSelf: "center",
            }}
          >
            Yor cart is Empty{" "}
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: "60%",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(255,241,180)",
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "rgb(200,176,127)", fontWeight: "bold" }}>
              Go Shopping
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              alignSelf: "center",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Recomended For You
          </Text>
          <View style={styles.reco}>
            <Product />
          </View>
        </ScrollView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  reco: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default Cart;
