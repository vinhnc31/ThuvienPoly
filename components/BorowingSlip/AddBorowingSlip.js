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
    Modal,
    
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome'
import Search_View from "./SearchView";
import useFilter from './useFilter';

const { widthSrc, heightSrc } = Dimensions.get("window");

const AddBorowingSlip = ({ navigation }) => {

    const { showFilterU, filterValueU, handleFilterU, handleCancelU, setFilterValueU,
        showFilterB, filterValueB,handleFilterB,handleCancelB, setFilterValueB } = useFilter();

    const [showCalendar, setShowCalendar] = useState(false);

    const [startDate, setStartDay] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const onChangeStartDate = (startDate) => {
        setStartDay(startDate);
    }

    const onChangeEndtDate = (endDate) => {
        setEndDate(endDate);
    }

    const handleShowCalendar = () => {
        setShowCalendar(!showCalendar);
    }

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
                        <View>
                            {showFilterU ? (
                                <View style={styles.header_infor_user}>
                                    <Search_View filterValue={filterValueU} onChangeText={setFilterValueU} onCancel={handleCancelU} />
                                </View>
                            ) : (
                                <View style={styles.header_infor_user}>
                                    <Text style={{ fontSize: 16, fontWeight: "bold", }}>Thông tin người mượn</Text>
                                    <TouchableOpacity onPress={handleFilterU}>
                                        <Icon name="search" size={24} color="#FC6011" />
                                    </TouchableOpacity>
                                </View>
                            )}
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
                        <View>
                            {showFilterB ? (
                                <View style={styles.header_infor_user}>
                                    <Search_View filterValue={filterValueB} onChangeText={setFilterValueB} onCancel={handleCancelB} />
                                </View>
                            ) : (
                                <View style={styles.header_infor_user}>
                                    <Text style={{ fontSize: 16, fontWeight: "bold", }}>Thông tin sách mượn</Text>
                                    <TouchableOpacity onPress={handleFilterB}>
                                        <Icon name="search" size={24} color="#FC6011" />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>

                        <View >
                            <View style={{ width: '100%', marginBottom: 16, }}>
                                <Text>Tên sách</Text>
                                <TextInput placeholder="Nhập tên sách" style={styles.textInput}></TextInput>
                            </View>

                            <View style={{ flexDirection: "row", marginBottom: 16, maxWidth: '100%', justifyContent: "space-between" }}>
                                <View style={{ width: '49%' }}>
                                    <Text >Tên tác giả</Text>
                                    <TextInput placeholder="Tên tác giả" style={styles.textInput}></TextInput>
                                </View>

                                <View style={{ width: '49%' }}>
                                    <Text>Nhà xuất bản</Text>
                                    <TextInput placeholder="Nhập địa chỉ" style={styles.textInput}></TextInput>
                                </View>

                            </View>

                            <View style={{ flexDirection: "row", marginBottom: 16, maxWidth: '100%', justifyContent: "space-between" }}>
                                <View style={{ width: '49%' }}>
                                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: 4 }}>
                                        <Text style={{ flex: 1, }}>Ngày mượn</Text>
                                        <View>
                                            <TouchableOpacity onPress={handleShowCalendar}>
                                                <Icon name="calendar" size={24} color="#FC6011" />
                                            </TouchableOpacity>
                                            {showCalendar && (
                                                <View>
                                                    
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                    <TextInput placeholder="Chọn ngày mượn" style={styles.textInput}></TextInput>
                                </View>

                                <View style={{ width: '49%' }}>
                                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginHorizontal: 4 }}>
                                        <Text style={{ flex: 1, }}>Ngày trả</Text>
                                        <TouchableOpacity>
                                            <Icon name="calendar" size={24} color="#FC6011" />
                                        </TouchableOpacity>
                                    </View>
                                    <TextInput placeholder="chọn ngày trả" style={styles.textInput}></TextInput>
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


    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
      },
      modal: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        width: '80%',
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 2,
      },
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
        marginTop: 8,
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
    },
    datePicker: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },


});
export default AddBorowingSlip;