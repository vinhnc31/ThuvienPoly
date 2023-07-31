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
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome'

const { widthSrc, heightSrc } = Dimensions.get("window");

const them_phieu_muon = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.content}>
                {/* phần header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        {/* <Image source={require("../../img/Icon/go_back.png")} /> */}
                        <Icon name="angle-left" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Thêm Phiếu mượn</Text>
                    <View></View>
                </View>
                {/* phần body */}
                <ScrollView style={styles.body}>
                    {/* thông tin  thành viên */}
                    <View style={styles.infor_user}>
                        <View style={styles.header_infor_user}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", }}>Thông tin người mượn</Text>
                            <TouchableOpacity>
                                <Icon name="search" size={24} color="#FC6011" />
                            </TouchableOpacity>
                        </View>
                        <View >
                            <View style={{ width: '100%', marginBottom: 16 }}>
                                <Text>Họ và Tên</Text>
                                <TextInput placeholder="Nhập họ và tên" style={styles.textInput}></TextInput>
                            </View>

                            <View style={{ width: '100%', marginBottom: 16 }}>
                                <Text>Ngày sinh</Text>
                                <TextInput placeholder="Chọn ngày sinh" style={styles.textInput}></TextInput>
                            </View>

                            <View style={{ width: '100%', marginBottom: 16 }}>
                                <Text>Địa chỉ</Text>
                                <TextInput placeholder="Nhập địa chỉ" style={styles.textInput}></TextInput>
                            </View>

                            <View style={{ width: '100%', marginBottom: 16 }}>
                                <Text>Số điện thoại</Text>
                                <TextInput placeholder="Nhập số điện thoại" style={styles.textInput} keyboardType="phone-pad" maxLength={11}></TextInput>
                            </View>
                            <View style={{ width: '100%', marginBottom: 16 }}>
                                <Text>Email</Text>
                                <TextInput placeholder="Nhập Email" style={styles.textInput} keyboardType="email-address"></TextInput>
                            </View>
                        </View>
                    </View>

                    {/* phần thông tin sách */}
                    <View style={styles.infor_user}>
                        <View style={styles.header_infor_user}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", }}>Thông tin sách mượn</Text>
                            <TouchableOpacity>
                                <Icon name="search" size={24} color="#FC6011" />
                            </TouchableOpacity>
                        </View>
                        <View >
                            <View style={{ width: '100%', marginBottom: 16, }}>
                                <Text>Tên sách</Text>
                                <TextInput placeholder="Nhập tên sách" style={styles.textInput}></TextInput>
                            </View>
                            <View style={{ flexDirection: "row", marginBottom: 16, maxWidth: '100%', justifyContent: "space-between" }}>
                                <View style={{ width: '49%' }}>
                                    <Text >Tác giả</Text>
                                    <TextInput placeholder="Chọn ngày sinh" style={styles.textInput}></TextInput>
                                </View>
                                <View style={{ width: '49%' }}>
                                    <Text>Nhà xuất bản</Text>
                                    <TextInput placeholder="Nhập địa chỉ" style={styles.textInput}></TextInput>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginBottom: 16, maxWidth: '100%', justifyContent: "space-between" }}>
                                <View style={{ width: '49%' }}>
                                    <Text >Ngày mượn</Text>
                                    <TextInput placeholder="Chọn ngày sinh" style={styles.textInput}></TextInput>
                                </View>
                                <View style={{ width: '49%' }}>
                                    <Text>Ngày trả</Text>
                                    <TextInput placeholder="Nhập địa chỉ" style={styles.textInput}></TextInput>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: "500", }}>Hoàn thành</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FC6011",
    },

    content: {
        backgroundColor: '#fff',
        marginBottom: 40,

    },

    header: {
        backgroundColor: '#FC6011',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingTop: 32,
        paddingBottom: 16,
        paddingStart: 8,
        paddingEnd: 16,
    },

    body: {
        flexDirection: "column",
        backgroundColor: '#F0F5F9',
        paddingBottom: 32,
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
        marginBottom: 16,
        backgroundColor: '#fff'
    },

    textInput: {
        fontSize: 13,
        color: "#ffffff",
        borderRadius: 6,
        width: widthSrc,
        height: 48,
        backgroundColor: "none",
        borderColor: '#FC6011',
        borderWidth: 1,
        cursorColor: '#FC6011',
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#FC6011',
        paddingTop: 16,
        paddingBottom: 16,
        marginStart: 32,
        marginEnd: 32,
        borderRadius: 50,
        marginBottom: 16
    }


});
export default them_phieu_muon;