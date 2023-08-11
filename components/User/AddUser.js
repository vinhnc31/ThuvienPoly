import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { TextInput, RadioButton } from "react-native-paper";

const { widthSrc, heightSrc } = Dimensions.get("window");

const handleRadioPress = () => {};

const AddUser = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ backgroundColor: "#FC6011" }}>
        <View style={styles.container}>
          {/* phần header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require("../../img/Icon/go_back.png")} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              Thêm Thành Viên
            </Text>
            <View></View>
          </View>
          {/* phần body */}
          <ScrollView>
            {/* PHần thông tin user */}
            <View style={styles.infor_user}>
              <View style={styles.header_infor_user}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Thông tin thành viên
                </Text>
              </View>
              <View>
                <View style={{ width: "100%", marginBottom: 16 }}>
                  <Text>Họ và Tên</Text>
                  <TextInput
                    placeholder="Nhập họ và tên"
                    style={styles.textInput}
                  ></TextInput>
                </View>

                <View style={{ width: "100%", marginBottom: 16 }}>
                  <Text>Ngày sinh</Text>
                  <TextInput
                    placeholder="Chọn ngày sinh"
                    style={styles.textInput}
                  ></TextInput>
                </View>

                <View style={{ width: "100%", marginBottom: 16 }}>
                  <Text>Địa chỉ</Text>
                  <TextInput
                    placeholder="Nhập địa chỉ"
                    style={styles.textInput}
                  ></TextInput>
                </View>

                <View style={{ width: "100%", marginBottom: 16 }}>
                  <Text>Số điện thoại</Text>
                  <TextInput
                    placeholder="Nhập số điện thoại"
                    style={styles.textInput}
                    keyboardType="phone-pad"
                    maxLength={11}
                  ></TextInput>
                </View>
                <View style={{ width: "100%", marginBottom: 16 }}>
                  <Text>Email</Text>
                  <TextInput
                    placeholder="Nhập Email"
                    style={styles.textInput}
                    keyboardType="email-address"
                  ></TextInput>
                </View>
                <View style={{ width: "100%", marginBottom: 16 }}>
                  <Text>Giới tính</Text>
                  <View>
                    <RadioButton.Group onValueChange={handleRadioPress}>
                      <View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <RadioButton value="nam" />
                          <Text>Nam</Text>

                          <RadioButton value="nu" />
                          <Text>Nữ</Text>
                        </View>
                        
                      </View>
                    </RadioButton.Group>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FC6011",
                paddingTop: 16,
                paddingBottom: 16,
                marginStart: 32,
                marginEnd: 32,
                borderRadius: 50,
                marginBottom: 16,
                marginTop: -8,
              }}
            >
              <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
                Hoàn thành
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
    backgroundColor: "#F0F5F9",
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

  body: {
    backgroundColor: "#fff",
    flexDirection: "column",
  },

  header_infor_user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: 16,
    marginBottom: 16,
  },

  infor_user: {
    paddingStart: 18,
    paddingEnd: 18,
    marginBottom: 32,
    backgroundColor: "#fff",
  },

  textInput: {
    fontSize: 13,
    color: "#ffffff",
    borderRadius: 6,
    width: widthSrc,
    height: 48,
    backgroundColor: "none",
    marginTop: 10,
    borderColor: "#FC6011",
    borderWidth: 1,
    cursorColor: "#FC6011",
  },
});
export default AddUser;
