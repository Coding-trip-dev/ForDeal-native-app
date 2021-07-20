import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("window").height;
import { BASEURL } from "../../config";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
const Minibox = ({  data }) => {
  let navigation = useNavigation()
  const [product, setproduct] = useState([]);
  const updateData2 = async () => {
    try {
      const res = await axios.post(`${BASEURL}/woocommerce`, {
        url: "products?category=4",
        method: "get",
      });

      console.log("res");
      console.log(res.data);
      setproduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(async () => {
    updateData2();
  }, []);
  return product.length > 0 && product.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.container2}
        activeOpacity={0.7}
        onPress={()=> navigation.navigate("ProductCategory",{item})}
      >
        <Image
          source={require("../image/cloth.jpeg")}
          source={{ uri: item.urls }}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
          resizeMethod="auto"
        />
        <Text style={{ fontSize: 10 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  });
};

const styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    // flex: 1,
    width: windowWidth / 3.4,
    height: windowWidth / 3.2,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default Minibox;
