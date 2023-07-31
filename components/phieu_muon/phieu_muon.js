import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    SafeAreaView,
    FlatList,
    SectionList,
    Image,
    TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import DropdownComponent from './Dropdown_status';

const { widthSrc, heightSrc } = Dimensions.get("window");

export const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Phiếu mượn 1',
        nameBook: 'Dạy con làm giàu',
        nameUser: 'Lại Duy Hưng',
        nameLibrarian: 'Nguyễn Văn Lộc',
        startDay: '01/06/2023',
        endDay: '31/06/2023',
        rentCost: '30000',
        status: 'Đang mượn'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Phiếu mượn 2',
        nameBook: 'Dạy con làm giàu',
        nameUser: 'Lại Duy Hưng',
        nameLibrarian: 'Nguyễn Văn Lộc',
        startDay: '01/06/2023',
        endDay: '31/06/2023',
        rentCost: '30000',
        status: 'Đã trả'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Phiếu mượn 3',
        nameBook: 'Dạy con làm giàu',
        nameUser: 'Lại Duy Hưng',
        nameLibrarian: 'Nguyễn Văn Lộc',
        startDay: '01/06/2023',
        endDay: '31/06/2023',
        rentCost: '30000',
        status: 'Quá hạn'
    },

    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Phiếu mượn 3',
        nameBook: 'Dạy con làm giàu',
        nameUser: 'Lại Duy Hưng',
        nameLibrarian: 'Nguyễn Văn Lộc',
        startDay: '01/06/2023',
        endDay: '31/06/2023',
        rentCost: '30000',
        status: 'Quá hạn'
    },

    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Phiếu mượn 3',
        nameBook: 'Dạy con làm giàu',
        nameUser: 'Lại Duy Hưng',
        nameLibrarian: 'Nguyễn Văn Lộc',
        startDay: '01/06/2023',
        endDay: '31/06/2023',
        rentCost: '30000',
        status: 'Quá hạn'
    },

    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Phiếu mượn 3',
        nameBook: 'Dạy con làm giàu',
        nameUser: 'Lại Duy Hưng',
        nameLibrarian: 'Nguyễn Văn Lộc',
        startDay: '01/06/2023',
        endDay: '31/06/2023',
        rentCost: '30000',
        status: 'Quá hạn'
    },

    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Phiếu mượn 3',
        nameBook: 'Dạy con làm giàu',
        nameUser: 'Lại Duy Hưng',
        nameLibrarian: 'Nguyễn Văn Lộc',
        startDay: '01/06/2023',
        endDay: '31/06/2023',
        rentCost: '30000',
        status: 'Quá hạn'
    },
];

const item_view = ({ item }) => {
    return (
        <View style={styles.item_view}>
            <View style={styles.header_item}>
                <Text style={styles.title_item}>{item.title}</Text>
                <View style={{ width: '100%', height: 1, backgroundColor: '#D1D1D1', flex: 4}} />
                <View style = {{flex: 4, marginStart: 4}}>
                    <DropdownComponent/>
                </View>
            </View>
            <View style={styles.body_item}>
                <View style={{ flexDirection: 'column', width: "48%" }}>
                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Tên sách: </Text>
                        <Text style={{ fontSize: 11 }}>{item.nameBook}</Text>
                    </View>

                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Thành viên: </Text>
                        <Text style={{ fontSize: 11 }}>{item.nameUser}</Text>
                    </View>

                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Thủ thư: </Text>
                        <Text style={{ fontSize: 11 }}>{item.nameLibrarian}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'column', width: "48%" }}>
                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Ngày mượn: </Text>
                        <Text style={{ fontSize: 11 }}>{item.startDay}</Text>
                    </View>

                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Ngày trả: </Text>
                        <Text style={{ fontSize: 11 }}>{item.endDay}</Text>
                    </View>

                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Giá thuê: </Text>
                        <Text style={{ fontSize: 11 }}>{item.rentCost}</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

const phieu_muon = ({ navigation }) => {

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <View style={styles.container}>
                {/* header */}
                <View style={styles.header}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginStart: 16 }}>PHIẾU MƯỢN</Text>
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
                        Tổng phiếu mượn: {DATA.length}
                    </Text>
                    {/* phần danh sách phiếu mượn */}
                    <View style={{ height: "100%", backgroundColor: "#fff", width: '100%' }}>
                        <FlatList
                            data={DATA}
                            renderItem={item_view}
                            keyExtractor={item => item.id}/>
                    </View>
                </View>
                {/* Button */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 9 }}></View>
                    <TouchableOpacity style={styles.float_button} onPress={() => navigation.navigate('them_phieu_muon')}>
                        <View style={{ width: 60, height: 60, backgroundColor: '#FC6011', borderRadius: "50%", alignItems: "center", justifyContent: "center" }}>
                            <View>
                                <Icon name="plus-circle" size={32} color="#fff" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
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
        padding: 8,
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
        fontSize: 16,
        fontWeight: "500",
        marginEnd: 4,
    },

    body_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    text_item: {
        flexDirection: 'row',
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
export default phieu_muon;
