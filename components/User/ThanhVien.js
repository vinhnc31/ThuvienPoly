import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import icon_search from "../../img/Icon/search.png"
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lại Duy Hưng',
    gender: 'Nam',
    dateOfBirth: "22/07/2003",
    phoneNumber: "0378965423",
    email: 'hungldqn227@gmail.com',
    address: "Mai dịch-Cầu giấy-Hà Nội",
  },

  {
    id: 'bd7acbea-c1b1-46c2-ae5-3ad5abb28ba',
    name: 'Lại Duy Hưng',
    gender: 'Nam',
    dateOfBirth: "22/07/2003",
    phoneNumber: "0378965423",
    email: 'hungldqn227@gmail.com',
    address: "Mai dịch-Cầu giấy-Hà Nội",
  },


  {
    id: 'bd7acbea-cb1-46c2-aed5-3ad53abb28ba',
    name: 'Lại Duy Hưng',
    gender: 'Nam',
    dateOfBirth: "22/07/2003",
    phoneNumber: "0378965423",
    email: 'hungldqn227@gmail.com',
    address: "Mai dịch-Cầu giấy-Hà Nội",
  },


  {
    id: 'bd7acbea-1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lại Duy Hưng',
    gender: 'Nam',
    dateOfBirth: "22/07/2003",
    phoneNumber: "0378965423",
    email: 'hungldqn227@gmail.com',
    address: "Mai dịch-Cầu giấy-Hà Nội",
  },


  {
    id: 'bd7acbea-c1b-46c2-aed5-3ad53abb28ba',
    name: 'Lại Duy Hưng',
    gender: 'Nam',
    dateOfBirth: "22/07/2003",
    phoneNumber: "0378965423",
    email: 'hungldqn227@gmail.com',
    address: "Mai dịch-Cầu giấy-Hà Nội",
  },

  {
    id: 'bdacbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lại Duy Hưng',
    gender: 'Nam',
    dateOfBirth: "22/07/2003",
    phoneNumber: "0378965423",
    email: 'hungldqn227@gmail.com',
    address: "Mai dịch-Cầu giấy-Hà Nội",
  },


]

const renderItem = ({ item, navigation }) => (
  

  <TouchableOpacity onPress={() => navigation.navigate('InfoUser')}>
    <View style={styles.item_view}>
      <View style={styles.header_item}>
        <Text style={styles.title_item}>{item.name}</Text>
      </View>
      <View style={styles.body_item}>
        <View style={styles.text_item}>
          <Text style={{ fontSize: 14 }}>Giới tính: </Text>
          <Text style={{ fontSize: 14 }}>{item.gender}</Text>
        </View>

        <View style={styles.text_item}>
          <Text style={{ fontSize: 14 }}>Ngày sinh: </Text>
          <Text style={{ fontSize: 14 }}>{item.dateOfBirth}</Text>
        </View>

        <View style={styles.text_item}>
          <Text style={{ fontSize: 14 }}>Số điện thoại: </Text>
          <Text style={{ fontSize: 14 }}>{item.phoneNumber}</Text>
        </View>

        <View style={styles.text_item}>
          <Text style={{ fontSize: 14 }}>Email: </Text>
          <Text style={{ fontSize: 14 }}>{item.email}</Text>
        </View>

        <View style={styles.text_item}>
          <Text style={{ fontSize: 14 }}>Địa chỉ: </Text>
          <Text style={{ fontSize: 14 }}>{item.address}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const thanh_vien = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginStart: 16 }}>THÀNH VIÊN</Text>
          <View style={{ flexDirection: 'row', marginEnd: 16, justifyContent: "space-between", alignItems: "center", width: '15%' }}>
            <TouchableOpacity>
              <Icon name="search" size={24} color="#FC6011" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="filter" size={24} color="#FC6011" />
            </TouchableOpacity>
          </View>
        </View>
        {/* body */}

        <View style={styles.body}>
          <Text style={{ marginTop: 8, marginStart: 32, fontSize: 12, marginBottom: 16 }}>
            Tổng thành viên: {DATA.length}
          </Text>
          {/* phần danh sách thành viên */}
          <View style={{ height: "100%", backgroundColor: "#fff", width: '100%' }}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => renderItem({ item, navigation })}
              keyExtractor={item => item.id} />
          </View>
        </View>
        {/* Button */}
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 9 }}></View>
          <TouchableOpacity style={styles.float_button} onPress={() => navigation.navigate('AddUser')}>
            <View style={{ width: 60, height: 60, backgroundColor: '#FC6011', borderRadius: "50%", alignItems: "center", justifyContent: "center" }}>
              <View>
                <Icon name="plus-circle" size={32} color="#fff" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '91.5%',
    alignContent: "center",
    backgroundColor: "#F0F5F9",
  },
  header: {
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingTop: 26,
    paddingBottom: 16,
    marginBottom: 16,
  },

  body: {
    height: '100%',
    backgroundColor: "#fff",
    flexDirection: 'column',
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  item_view: {
    backgroundColor: "#EBE9E9",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 6,
  },

  header_item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 12
  },

  title_item: {
    flex: 4,
    fontSize: 18,
    fontWeight: "500",
    marginEnd: 4,
  },

  body_item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  text_item: {
    width: '100%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
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
  }

});

export default thanh_vien;