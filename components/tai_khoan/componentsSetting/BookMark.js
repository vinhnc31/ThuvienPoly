import React, { useState,useEffect } from "react";
import { SearchBar } from "react-native-elements";
import { book_api, category_api } from "../../../respository/index";

import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import Modal from "react-native-modal";

import { TextInput, Button } from "react-native-paper";
import BackgoundLogin from "../img/backgound.png";
import logo from "../img/logo.jpg";
const ItemView = ({ item, navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <TouchableOpacity style={styles.item_view} onPress={toggleModal}>
      <View style={styles.header_item}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: item.image,
          }}
        />
        <Text style={styles.title_item}>{item.title}</Text>
      </View>

      <View style={styles.body_item}>
        <View style={styles.text_item}>
          <Text style={{ fontSize: 9 }}>Tên TG: </Text>
          <Text style={{ fontSize: 9 }}>{item.author}</Text>
        </View>

        <View style={styles.text_item}>
          <Text style={{ fontSize: 9 }}>Giá: </Text>
          <Text style={{ fontSize: 9 }}>{item.price}</Text>
        </View>

        <View style={styles.text_item}>
          <Text style={{ fontSize: 9 }}>Thể loại: </Text>
          <Text style={{ fontSize: 9 }}>{item.nameCategory}</Text>
        </View>
      </View>

      <Modal
        animationType="slide"
        alignItems="center"
        justifyContent="center"
        isVisible={isModalVisible}
      >
        <View
          style={{
            borderRadius: 10,
            height: "40%",
            justifyContent: "center",
            width: "80%",
            backgroundColor: "white",
          }}
        >
          <View style={styles.modalitem}>
            <Image
              style={styles.tinyLogo1}
              source={{
                uri: item.image,
              }}
            />
            <View style={styles.originitem}>
              <View>
                <Text>Tên đầu sách :</Text>
                <Text style={styles.formname}>{item.nameBook}</Text>
              </View>
              <View style={styles.textitem}>
                <Text style={styles.text}>Tên tác giả:</Text>
                <Text style={styles.text}>{item.author}</Text>
              </View>
              <View style={styles.textitem}>
                <Text style={styles.text}>Nhà xuất bản:</Text>
                <Text style={styles.text}>{item.publishingCompany}</Text>
              </View>
              <View style={styles.textitem}>
                <Text style={styles.text}>Năm phát hành sách:</Text>
                <Text style={styles.text}>{item.publishingYear}</Text>
              </View>
            </View>
          </View>
          <Button
            style={{
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: 5,
              marginTop: 50,
              marginBottom: 20,
              marginHorizontal: 30,
              borderWidth: 1,
              borderColor: "black",
            }}
            onPress={toggleModal}
          >
            Hide
          </Button>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};
const BookMark = () => {
  state = {
    search: "",
  };
  updateSearch = (search) => {
    //  this.setState({  });
  };
  const navigation = useNavigation();



  const { search } = this.state;

 const [listBooks, setListBooks] = useState([]);

    // gọi đến request API
    useEffect(() => {
        const fetchBooks = async () => {
            const books = await book_api.GetListBook();

            setListBooks(books);
        };

        fetchBooks();
    }, []);
  return (
            <SafeAreaView style={styles.container}>

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
        <View style={{ backgroundColor: "#fff" }}>
          <FlatList
            style={{ width: "100%" }}
            contentContainerStyle={{ alignItems: "center" }}
            data={listBooks}
            horizontal={false}
            renderItem={({ item }) => (
              <ItemView item={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
  header_item: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    marginTop: 8,
  },
  title_item: {
    fontSize: 14,
    fontWeight: "500",
  },
  item_view: {
    marginHorizontal: 6,
    width: "46%",
    backgroundColor: "#EBE9E9",
    marginBottom: 8,
    borderRadius: 6,
  },
  text_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 6,
    marginBottom: 8,
  },
  container: {
    marginBottom: 16,
    flex: 1,
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  tinyLogo: {
    width: 100,
    alignSelf: "center",
    height: 150,
  },
  tinyLogo1: {
    margin: 10,
    width: 100,
    height: 150,
  },
  modalitem: {
    flexDirection: "row",
    alignSelf: "center",
  },
  originitem: {
    width: "60%",

    flexDirection: "column",
    alignSelf: "center",
  },
  textitem: {
    flexDirection: "row",
  },
  text: {
    fontSize: 12,
    marginVertical: 3,
    width: "50%",
  },
  formname: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default BookMark;
