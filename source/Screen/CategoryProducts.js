import { json } from "express";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
// import WooCommerceAPI from "react-native-woocommerce-api";
import axios from "axios";
// import dataaa from "./data";
import { useNavigation } from "@react-navigation/native";
import { BASEURL } from "../../config";
const windowWidth = Dimensions.get("screen").width;

const Product = ({ route }) => {
  const navigation = useNavigation();
  const [product, setproduct] = useState(false);
  let { item } = route.params;
  console.log("item");
  console.log(item.id);
  const updateData = async () => {
    try {
      const res = await axios.post(`${BASEURL}/woocommerce`, {
        url: `products`,
        method: "get",
        query_param: `?category=${item.id}`,
      });
      if (product) {
        setproduct([...product, ...res.data]);
      } else {
        setproduct([...res.data]);
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    updateData();
  }, []);
  return (
    <>
      {product ? (
        product.length > 0 ? (
          <FlatList
            data={product}
            keyExtractor={(x, i) => i}
            numColumns={2}
            contentContainerStyle={{
              justifyContent: "space-around",
              alignSelf: "center",
              alignItems: "center",
            }}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={styles.container4}
                  onTouchEnd={() =>
                    navigation.navigate("ProductDetails", { item })
                  }
                >
                  <Image
                    source={{
                      uri:
                        item.images.length > 0
                          ? item.images[0].src
                          : "https://cheeryone.com/wp-content/uploads/2021/07/dgfgh.png",
                    }}
                    style={{
                      width: "100%",
                      height: 150,
                      alignSelf: "center",
                      marginTop: 5,
                    }}
                  />
                  <Text style={{ color: "silver" }}>
                    {item.name.slice(0, 15)}
                  </Text>
                  <Text style={{ fontWeight: "bold" }}>US $ {item.price}</Text>
                </View>
              );
            }}
          />
        ) : (
          <View
            style={{
              fontSize: 18,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>No Product is available for the selected category</Text>
          </View>
        )
      ) : (
        <View style={styles.containerBtn}>
          <ActivityIndicator size="large" color="#ef7157" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  container4: {
    display: "flex",
    width: windowWidth * 0.47,
    height: 260,
    backgroundColor: "white",
    margin: 4,
    paddingLeft: 10,
    elevation: 5,
    borderRadius: 5,
    color: "black",
  },
  containerBtn: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
});
export default Product;
