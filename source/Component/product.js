import { json } from "express";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
// import WooCommerceAPI from "react-native-woocommerce-api";
import axios from "axios";
import dataaa from "./data";
import { useNavigation } from "@react-navigation/native";
import {BASEURL} from '../../config'
const windowWidth = Dimensions.get("screen").width;
 
const Product = ({ pageNumber, setLoading }) => {
  const navigation = useNavigation();
  const [product, setproduct] = useState([]);
 
  const updateData = async () => {
    try {
      const res = await axios.post(`${BASEURL}/woocommerce`, {
        url: "products",
        method: "get",
        query_param: `?page=${pageNumber}`,
      });
      setproduct([...product, ...res.data]);
      console.log(product[1]);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
 
  useEffect(async () => {
    updateData();
    updateData2()
  }, [pageNumber]);
  return (
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
            onTouchEnd={() => navigation.navigate("ProductDetails", { item })}
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
            <Text style={{ color: "silver" }}>{item.name.slice(0, 15)}</Text>
            <Text style={{ fontWeight: "bold" }}>US $ {item.price}</Text>
          </View>
        );
      }}
    />
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
});
export default Product;
