import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { member_respository as member_api } from '../../responsitories/index'

const { widthSrc, heightSrc } = Dimensions.get("window");

const InfoUser = ({ navigation, route }) => {
  const { userId } = route.params;
  const [userDetails, setUserDetails] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      // Lấy danh sách thành viên từ API
      const userList = await member_api.getListUser();
      console.log("--------INFO USER--------", userList);
      setUsers(userList);

      // Tìm thành viên trong mảng users dựa trên userId
      const user = userList.find((item) => item.id === userId);
      console.log("--------INFO USER--------DETAILS", user);
      setUserDetails(user);
    };

    fetchUserDetails();
  }, [userId]);

  console.log("ssssssssssssss", userDetails);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: '#fff', flex: 1, paddingBottom: 55 }}>
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
          maxWidth: '100%', flexDirection: "column", flex: 1,
        }}>
          {userDetails ? (
            <View >
              <View style={{ alignItems: "center", marginBottom: 64 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>{userDetails.name}</Text>
              </View>
              <View>
                <View style={styles.text}>
                  <Text>Giới tính</Text>
                  <Text>{userDetails.sex}</Text>
                </View>
                <View style={styles.text}>
                  <Text>Ngày sinh</Text>
                  <Text>04/02/2003</Text>
                </View>
                <View style={styles.text}>
                  <Text>Địa chỉ</Text>
                  <Text>{userDetails.address}</Text>
                </View>
                <View style={styles.text}>
                  <Text>Số điện thoại</Text>
                  <Text>{userDetails.phone}</Text>
                </View>
                <View style={styles.text}>
                  <Text>Email</Text>
                  <Text>{userDetails.email}</Text>
                </View>
              </View>
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
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

export default InfoUser;
