import React, { useState } from "react";
import { SearchBar } from "react-native-elements";

import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";

import { TextInput, Button } from "react-native-paper";
import BackgoundLogin from "../img/backgound.png";
import logo from "../img/logo.jpg";
const BookMark = () => {
  state = {
    search: "",
  };
  updateSearch = (search) => {
    //  this.setState({  });
  };
  const navigation = useNavigation();

  const itemList = [
    { id: 1, img: require("../img/logo.jpg"), name: "Item 1" },
    { id: 2, img: require("../img/logo.jpg"), name: "Item 2" },
    { id: 3, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 4, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 5, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 6, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 7, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 8, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 9, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 10, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 11, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 12, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 13, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 14, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 15, img: require("../img/logo.jpg"), name: "Item 3" },
    { id: 16, img: require("../img/logo.jpg"), name: "Item 3" },

    // Add more items as needed
  ];
  const ItemList = () => {
    return (
      <View>
        {itemList.map((item) => (
          <View
            key={item.id}
            style={{ flexDirection: "row", borderWidth: 0.5 }}
          >
            <Image source={item.img} style={{ height: 60, width: 60 }} />
            <View
              style={{
                alignSelf: "center",
                flexDirection: "column",
                marginHorizontal: 15,
              }}
            >
              <Text>{item.name}</Text>
              <Text>{item.name}</Text>
              <View>
                <View
                  style={{
                    width: "70%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                      <Text>{item.name}</Text>
              
                      <Text>{item.name}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  };

  const { search } = this.state;

  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 40,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Icon
            name="chevron-small-left"
            size={30}
            color="orangered"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ paddingLeft: 10, fontSize: 20, alignSelf: "center" }}>
            Kho Sách
          </Text>
        </View>
        <Icon
          name="align-top"
          size={30}
          color="orangered"
          style={{ paddingHorizontal: 10 }}
        />
      </View>
      <SearchBar
        theme={{ colors: "white" }}
        style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ItemList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
});
export default BookMark;
