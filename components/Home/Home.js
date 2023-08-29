import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { book_api, category_api,librarian_api } from "../../respository/index";
import Modal from "react-native-modal";
import { TextInput, Button } from "react-native-paper";

const ItemView = ({ item, navigation}) => {
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

const Home = ({ navigation }) => {
    const [isModalVisibleAV, setModalVisibleAV] = useState(false);
      const { width, height } = Dimensions.get("window");
    const toggleModalAV = () => {
      setModalVisibleAV(!isModalVisibleAV);
    };  
      const [listBooks, setListBooks] = useState([]);

      const [listUser, setlistUser] = useState([]);
      useEffect(() => {
        const fetchUsers = async () => {
          const user = await librarian_api.GetListLibrarian();

          setlistUser(user);
        };

        fetchUsers();
      }, []);
    

    // gọi đến request API
    useEffect(() => {
        const fetchBooks = async () => {
            const books = await book_api.GetListBook10();

            setListBooks(books);
        };

        fetchBooks();
    }, []);

    return (
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: "#F0F5F9", flex: 1 }}>
          {/* header */}
          <View style={styles.header}>
            {/* infor user */}
            <TouchableOpacity style={styles.userInfo} onPress={toggleModalAV}>
              <Image
                source={require("../../img/avatar.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  marginEnd: 8,
                }}
              />
              <Text style={{ fontWeight: "500" }}>Lại Duy Hưng</Text>
              <Modal
                onPress={toggleModalAV}
                animationType="slide"
                alignItems="center"
                justifyContent="flex-end"
                isVisible={isModalVisibleAV}
              >
                <View
                  style={{
                    borderRadius: 10,
                    height: "70%",
                    width: width,
                    alignItems: "center",
                    padding: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Image
                    style={styles.avata}
                    source={{
                      uri: "https://reactnative.dev/img/tiny_logo.png",
                    }}
                  />
                  <View style={{ justifyContent: "flex-start", marginVertical:20 }}>
                    {/* <Text>Tên Thủ Thư: {listUser[3].name}</Text>
                    <Text>Giới Tính: {listUser[2].sex}</Text>
                    <Text>Địa chỉ: {listUser[2].address}</Text>
                    <Text>Số Điện Thoại: {listUser[2].phone}</Text>
                    <Text>Email: {listUser[2].email}</Text>
                    <Text>Ngày sinh: {listUser[2].birthday}</Text>
                    <Text>Ngày vào làm: {listUser[2].dateWork}</Text> */}
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
                    onPress={toggleModalAV}
                  >
                    Hide
                  </Button>
                </View>
              </Modal>
            </TouchableOpacity>
            {/* đăng xuất icon */}
            <TouchableOpacity onPress={() => navigation.navigate("login")}>
              <Icon name="sign-out" color={"#FC6011"} size={32} />
            </TouchableOpacity>
          </View>

          {/* search view */}
          <View
            style={{
              marginVertical: 16,
              marginHorizontal: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                paddingHorizontal: 8,
                paddingVertical: 6,
                backgroundColor: "#FAFAFAED",
                marginHorizontal: 32,
                borderRadius: 10,
              }}
            >
              <Icon
                name="search"
                size={18}
                color={"#3C3C4399"}
                style={{ marginEnd: 16 }}
              />
              <TextInput
                style={[styles.inputText, { padding: 0, margin: 0 }]}
                placeholder="Search"
                underlineColor="transparent"
              />
            </View>
          </View>

          {/* body */}
          <View style={styles.body}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginHorizontal: 24,
                marginVertical: 16,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>Kho sách</Text>
              <TouchableOpacity onPress={() => navigation.navigate("BookMark")}>
                <Text style={{ fontSize: 14, color: "#528DFF" }}>
                  xem tất cả
                </Text>
              </TouchableOpacity>
            </View>
            {/* phần danh sách thành viên */}
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
          </View>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flex: 1,
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  inputText: {
    flex: 1,
    height: 24,
    marginVertical: 4,
    fontSize: 14,
    backgroundColor: "#FAFAFAED",
    borderBottomColor: "red",
    cursorColor: "red",
  },

  tinyLogo: {
    width: 100,
    alignSelf: "center",
    height: 150,
  },
  avata:{
    width:150,
    alignSelf:"center",
    height:150,
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
  header: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingTop: 26,
    paddingBottom: 16,
    paddingHorizontal: 32,
  },

  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  body: {
    flex: 9,
    backgroundColor: "#fff",
    marginBottom: 38,
  },

  item_view: {
    marginHorizontal: 6,
    width: "46%",
    backgroundColor: "#EBE9E9",
    marginBottom: 8,
    borderRadius: 6,
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

  body_item: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  text_item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 6,
    marginBottom: 8,
  },

  icon_style: {
    width: 24,
    height: 24,
  },

  float_button: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginEnd: 32,
    marginTop: -48,
  },
});

export default Home;