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

const { widthSrc, heightSrc } = Dimensions.get("window");

const them_phieu_muon = ({ navigation }) => {

    return (

        //         {/* PHần thông tin user */}



        

        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <SafeAreaView style={{backgroundColor: '#FC6011', marginBottom: 40}}>
                {/* phần header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require("../../img/Icon/go_back.png")} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Thêm Phiếu mượn</Text>
                    <View></View>
                </View>
                {/* phần body */}
                <ScrollView style={styles.body}>
                    {/* Thôn tin người mượn */}
                    <View style={styles.infor_user}>
                        <View style={styles.header_infor_user}>
                            <Text style={{ fontSize: 16, fontWeight: "bold", }}>Thông tin người mượn</Text>
                            <Image source={require('../../img/Icon/search.png')} />
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
                            <Image source={require('../../img/Icon/search.png')} />
                        </View>
                        <View >
                            <View style={{ width: '100%', marginBottom: 16, }}>
                                <Text>Tên sách</Text>
                                <TextInput placeholder="Nhập họ và tên" style={styles.textInput}></TextInput>
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
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {{color: 'white', fontWeight:"700"}}>Hoàn thành</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
        marginTop: 10,
        borderColor: '#FC6011',
        borderWidth: 1,
        cursorColor: '#FC6011',
    },

    button: {
        alignItems: "center",
        paddingVertical: 12,
        marginHorizontal: 32,
        marginBottom: 32,
        marginTop: 16,
        borderRadius: 50,
        backgroundColor: '#FC6011',
    }


});
export default them_phieu_muon;