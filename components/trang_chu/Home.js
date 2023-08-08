import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import iconlogo from "../../img/Icon/icon_logo.png";
import iconbellring from "../../img/Icon/iconbellring.png";
import { SearchBar } from "react-native-elements";
import book from "../../img/Icon/book.png";
const Home = ({ navigation }) => {
  return (
    <View>
      {/* <SafeAreaView style={{ backgroundColor: "#fff" }}> */}
      <View style={styles.container}>
        {/* {header} */}
        <View style={styles.img}>
          <Image source={iconlogo} style={styles.iconlog} />
          <Image source={iconbellring} style={styles.iconbellring} />
        </View>
      </View>
      <View style={styles.seach}>
        <SearchBar
          placeholder="Search"
          lightTheme
          round
          containerStyle={{ backgroundColor: "", borderRadius: 5 }}
        />
      </View>
      <View style={styles.text}>
        <Text onPress={() => navigation.navigate("")}>Kho sách</Text>
        <Text>Xem tất cả</Text>
      </View>
      <View>
        <ScrollView>
          {/* <View> */}
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <View>
                <Image source={book} style={styles.imgsach} />
                <Text style={styles.textsach}>Dạy con làm giàu</Text>
              </View>
              <View style={styles.text1}>
                <Text style={{ fontSize: 8 }}>Tổng sách:20</Text>
                <Text style={{ fontSize: 8, marginHorizontal: 65 }}>
                  Giá thuê:30K
                </Text>
              </View>
            </View>

            <View>
              <View>
                <Image source={book} style={styles.imgsach} />
                <Text style={styles.textsach}>Dạy con làm giàu</Text>
              </View>
              <View style={styles.text1}>
                <Text style={{ fontSize: 8 }}>Tổng sách:20</Text>
                <Text style={{ fontSize: 8, marginHorizontal: 65 }}>
                  Giá thuê:30K
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <View>
                <Image source={book} style={styles.imgsach} />
                <Text style={styles.textsach}>Dạy con làm giàu</Text>
              </View>
              <View style={styles.text1}>
                <Text style={{ fontSize: 8 }}>Tổng sách:20</Text>
                <Text style={{ fontSize: 8, marginHorizontal: 65 }}>
                  Giá thuê:30K
                </Text>
              </View>
            </View>

            <View>
              <View>
                <Image source={book} style={styles.imgsach} />
                <Text style={styles.textsach}>Dạy con làm giàu</Text>
              </View>
              <View style={styles.text1}>
                <Text style={{ fontSize: 8 }}>Tổng sách:20</Text>
                <Text style={{ fontSize: 8, marginHorizontal: 65 }}>
                  Giá thuê:30K
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <View>
                <Image source={book} style={styles.imgsach} />
                <Text style={styles.textsach}>Dạy con làm giàu</Text>
              </View>
              <View style={styles.text1}>
                <Text style={{ fontSize: 8 }}>Tổng sách:20</Text>
                <Text style={{ fontSize: 8, marginHorizontal: 65 }}>
                  Giá thuê:30K
                </Text>
              </View>
            </View>

            <View>
              <View>
                <Image source={book} style={styles.imgsach} />
                <Text style={styles.textsach}>Dạy con làm giàu</Text>
              </View>
              <View style={styles.text1}>
                <Text style={{ fontSize: 8 }}>Tổng sách:20</Text>
                <Text style={{ fontSize: 8, marginHorizontal: 65 }}>
                  Giá thuê:30K
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <View>
                <Image source={book} style={styles.imgsach} />
                <Text style={styles.textsach}>Dạy con làm giàu</Text>
              </View>
              <View style={styles.text1}>
                <Text style={{ fontSize: 8 }}>Tổng sách:20</Text>
                <Text style={{ fontSize: 8, marginHorizontal: 65 }}>
                  Giá thuê:30K
                </Text>
              </View>
            </View>

            <View>
              <View>
                <Image source={book} style={styles.imgsach} />
                <Text style={styles.textsach}>Dạy con làm giàu</Text>
              </View>
              <View style={styles.text1}>
                <Text style={{ fontSize: 8 }}>Tổng sách:20</Text>
                <Text style={{ fontSize: 8, marginHorizontal: 65 }}>
                  Giá thuê:30K
                </Text>
              </View>
            </View>
          </View>

          {/* </View> */}
        </ScrollView>
      </View>
      {/* </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  header: {
    backgroundColor: "#FC6011",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 32,
    paddingBottom: 16,
    marginBottom: 16,
    paddingStart: 8,
    paddingEnd: 16,
  },
  img: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 13,
  },
  iconbellring: {
    marginHorizontal: 15,
    marginTop: 33,
  },
  iconlog: {
    marginHorizontal: 15,
    marginTop: 20,
  },
  seach: {
    marginTop: 100,
  },
  text: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  textsach: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 26,
  },
  imgsach: {
    marginHorizontal: 5,
  },
  text1: {
    flexDirection: "row",
    padding: 5,
    marginHorizontal: 2,
  },
});
export default Home;
