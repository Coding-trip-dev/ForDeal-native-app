import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("screen").width;
// windowWidth - 20
const windowHeight = Dimensions.get("window").height;
import { SearchBar } from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
import Banner from "../Component/Banner";
import Minibox from "../Component/miniBox";
import Product from "../Component/product";

const miniproduct = [
  {
    title: "men's",
    urls: "https://source.unsplash.com/1024x768/?nature",
    // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU'
  },
  {
    title: "women deal's",
    urls: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU",
  },
  {
    title: "women deal's",
    urls: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU",
  },
  {
    title: "women deal's",
    urls: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU",
  },
  {
    title: "women deal's",
    urls: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU",
  },
  {
    title: "Hello World",
    urls: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIC2m4o5Ff_s_BOIL0-y7uq8m_Kqrn0Yq1Q&usqp=CAU",
  },
];

export default function Homee() {
  const [search, setsearch] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [images, setimages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree", // Network image
  ]);
  const updateSearch = (search) => {
    setsearch(search);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={{
          backgroundColor: "white",
          borderBottomWidth: 0,
        }}
        inputContainerStyle={{
          backgroundColor: "lightgray",
          borderRadius: 20,
          height: 30,
        }}
        color="black"
        placeholder="what are you looking for?"
        onChangeText={(e) => {
          updateSearch(e);
        }}
        value={search}
      />
      <View
        style={{
          width: windowWidth,
          flexDirection: "row",
          paddingHorizontal: 5,
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              padding: 5,
              borderBottomWidth: 3,
              borderRadius: 10,
              borderColor: "rgb(245,245,0)",
            }}
          >
            Popular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, padding: 5 }}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, padding: 5 }}>Women</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <SliderBox
          images={images}
          sliderBoxHeight={150}
          autoplay
          circleLoop
          dotColor="red"
          dotStyle={{
            width: 7,
            height: 7,
            borderRadius: 10,
            padding: 0,
            margin: 0,
          }}
          
        />

        <View style={styles.container1}>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: 22,
              fontWeight: "bold",
              color: "gray",
            }}
          >
            Hot Categories
          </Text>
          <Minibox data={miniproduct} />
        </View>
        <View style={styles.BannerContainer}>
          <Image
            resizeMode="cover"
            resizeMethod="resize"
            style={{ width: "100%", height: "100%" }}
            source={{ uri: "https://source.unsplash.com/640x420/?tree" }}
          />
        </View>
 
        <View style={styles.container3}>
          <Product pageNumber={page} setLoading={setLoading} />
        </View>
        {loading && (
          <View style={styles.containerBtn}>
            <ActivityIndicator size="large" color="#ef7157" />
          </View>
        )}
        <View style={styles.containerBtn}>
          <TouchableOpacity
            style={styles.show_button}
            onPress={() => {
              setPage(page + 1);
              setLoading(true);
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
                color: "gray",
              }}
            >
              Show more
            </Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    backgroundColor: "rgb(245,245,245)",

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container1: {
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    height: windowHeight / 2.5,
    // backgroundColor: 'rgb(245,245,0)',
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  BannerContainer: {
    height: windowHeight / 3.8,
    width: windowWidth - 20,
    margin: 10,
    backgroundColor: "#ffff",
    elevation: 3,
    //     alignItems: 'center',
    //     justifyContent: 'center',
  },
  container3: {
    flex: 1,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
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
  show_button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#e2e2e2",
  },
  container4: {
    // flex: 1,
    width: 165,
    height: 260,
    backgroundColor: "white",
    marginTop: 8,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    elevation: 10,
    borderRadius: 5,
  },
  container5: {
    // flex: 1,
    width: 165,
    height: 250,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    elevation: 10,
    borderRadius: 5,
  },
});
