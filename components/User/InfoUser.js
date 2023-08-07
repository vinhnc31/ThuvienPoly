import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
const { widthSrc, heightSrc } = Dimensions.get("window");

const thong_tin_thanh_vien = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: '#fff', flex: 1, paddingBottom:55 }}>
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="angle-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Thông tin thành viên
          </Text>
          <View></View>
        </View>

        <View style={{
          maxWidth: '100%', flexDirection: "column",flex:1,
        }}>
          <View style={{ alignItems: "center", marginBottom: 64 }}>
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>
              LẠI DUY HƯNG
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              (id thành viên)
            </Text>
          </View>

          <View style = {{flex: 1,}}>
            <View style={styles.text}>
              <Text>Giới tính</Text>
              <Text>Nam</Text>
            </View>
            <View style={styles.text}>
              <Text>Ngày sinh</Text>
              <Text>04/02/2003</Text>
            </View>
            <View style={styles.text}>
              <Text>Địa chỉ</Text>
              <Text>Mai Dịch-Cầu Giấy-Hà Nội</Text>
            </View>
            <View style={styles.text}>
              <Text>Số điện thoại</Text>
              <Text>0389654775</Text>
            </View>
            <View style={styles.text}>
              <Text>Email</Text>
              <Text>vs@gmail.com</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "#FC6011",
              paddingTop: 16,
              paddingBottom: 16,
              marginStart: 32,
              marginEnd: 32,
              borderRadius: 50,
              marginBottom: 16,
            }}
            onPress={() => navigation.navigate("EditUser")}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
              Chỉnh sửa thông tin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    alignContent: "center",
    backgroundColor: "#FC6011",
  },
  header: {
    backgroundColor: "#FC6011",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 64,
    paddingBottom: 16,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  text: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
});

export default thong_tin_thanh_vien;
