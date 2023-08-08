import React from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import icon_search from "../../img/Icon/search.png"
import icon_add from "../../img/Icon/add.png"
import { FlatList } from "react-native-gesture-handler";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title:'Tên thành viên',
        nameUser:'Lại Duy Hưng',
        dateOfBirth:"01/01/2003",
        phoneNumber:"0378965423",
        address:"Mai dịch-Cầu giấy-Hà Nội"
    }
]

const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.name}>{item.nameUser}</Text>
      <Text style={styles.dateBirth}>{item.dateOfBirth}</Text>
      <Text style={styles.phone}>{item.phoneNumber}</Text>
      <Text style={styles.address}>{item.address}</Text>
    </View>
  );

const thanh_vien = ({navigation}) => {
    return (
        <View>
          <View>
          <View style={styles.header}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginStart: 16 }}>THÀNH VIÊN</Text>
                    <Image source={icon_search}/>
                </View>

<TouchableOpacity onPress={()=> navigation.navigate('thong_tin_thanh_vien')}>
                <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                />
                </TouchableOpacity>
          </View>
      {/* Button */}

                <TouchableOpacity style={styles.float_button} onPress={() => navigation.navigate('them_thanh_vien')}>
                <View style={{ width: 60, height: 60, backgroundColor: '#FC6011', borderRadius: 50, alignItems: "center", justifyContent: "center",marginTop:'95%' }}>
                        <View>
                            <Image source={icon_add} />
                        </View>
                    </View>
                </TouchableOpacity>
           
        </View>
    )
};

const styles = StyleSheet.create({
  
    header: {
        backgroundColor: '#FFF',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingTop: 32,
        paddingBottom: 16,
        marginBottom: 16,
        paddingStart: 8,
        paddingEnd: 16,
        
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor:'#FFCA77'
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      name: {
        fontSize: 14,
      },
      dateBirth: {
        fontSize: 12,
      },
      phone: {
        fontSize: 12,
      },
      address: {
        fontSize: 12,
      },
      
      float_button: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginEnd: 32,
        marginTop: -56,
    }

});

export default thanh_vien;