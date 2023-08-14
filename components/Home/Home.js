import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from "react-native-paper";
import { book_api, category_api } from "../../respository/index";

const ItemView = ({ item, navigation}) => {
    return (
        <TouchableOpacity style={styles.item_view}>
            <View style={styles.header_item}>
                <Image source={require('../../img/book_img.png')} />
                <Text style={styles.title_item}>{item.title}</Text>
            </View>

            <View style={styles.body_item}>
                <View style={styles.text_item}>
                    <Text style={{ fontSize: 9 }}>Tên TG: </Text>
                    <Text style={{ fontSize: 9, }}>{item.author}</Text>
                </View>

                <View style={styles.text_item}>
                    <Text style={{ fontSize: 9 }}>Giá: </Text>
                    <Text style={{ fontSize: 9 }}>{item.price}</Text>
                </View>

                <View style={styles.text_item}>
                    <Text style={{ fontSize: 9 }}>Thể loại: </Text>
                    <Text style={{ fontSize: 9 }}>{item.nameCategory}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const Home = ({ navigation }) => {
    const [listBooks, setListBooks] = useState([]);

    // gọi đến request API
    useEffect(() => {
        const fetchBooks = async () => {
            const books = await book_api.GetListBook();
            setListBooks(books);
        };

        fetchBooks();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#F0F5F9', flex: 1 }}>
                {/* header */}
                <View style={styles.header}>
                    {/* infor user */}
                    <TouchableOpacity style={styles.userInfo}>
                        <Image source={require('../../img/avatar.png')} style={{ width: 40, height: 40, borderRadius: 50, marginEnd: 8 }} />
                        <Text style={{ fontWeight: "500" }}>Lại Duy Hưng</Text>
                    </TouchableOpacity>
                    {/* đăng xuất icon */}
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Icon name="sign-out" color={"#FC6011"} size={32} />
                    </TouchableOpacity>
                </View>

                {/* search view */}
                <View style={{ marginVertical: 16, marginHorizontal: 8, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", flexDirection: "row", paddingHorizontal: 8, paddingVertical: 6, backgroundColor: '#FAFAFAED', marginHorizontal: 32, borderRadius: 10 }}>
                        <Icon name="search" size={18} color={'#3C3C4399'} style={{ marginEnd: 16 }} />
                        <TextInput style={[styles.inputText, { padding: 0, margin: 0 }]} placeholder="Search" underlineColor="transparent" />
                    </View>
                </View>

                {/* body */}
                <View style={styles.body}>
                    <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", marginHorizontal: 24, marginVertical: 16 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                            Kho sách
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('BookMark')}>
                            <Text style={{ fontSize: 14, color: '#528DFF' }}>
                                xem tất cả
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* phần danh sách thành viên */}
                    <View style={{ backgroundColor: '#fff' }}>
                        <FlatList
                            style={{ width: '100%' }}
                            contentContainerStyle={{ alignItems: "center" }}
                            data={listBooks}
                            horizontal={false}
                            renderItem={({ item }) => <ItemView item={item} navigation={navigation}/>}
                            keyExtractor={item => item.id}
                            numColumns={2}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        flex: 1,
        alignContent: "center",
        flexDirection: 'column',
        backgroundColor: "#fff",
    },

    inputText: {
        flex: 1,
        height: 24,
        marginVertical: 4,
        fontSize: 14,
        backgroundColor: '#FAFAFAED',
        borderBottomColor: 'red',
        cursorColor: 'red',
    },

    header: {
        flex: 0.5,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingTop: 26,
        paddingBottom: 16,
        paddingHorizontal: 32,
    },

    userInfo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },

    body: {
        flex: 9,
        backgroundColor: "#fff",
        marginBottom: 38
    },

    item_view: {
        marginHorizontal: 6,
        width: '46%',
        backgroundColor: "#EBE9E9",
        marginBottom: 8,
        borderRadius: 6,
    },

    header_item: {
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 12,
        marginTop: 8,
    },

    title_item: {
        fontSize: 14,
        fontWeight: "500",
    },

    body_item: {
        // flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    },

    text_item: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 6,
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

export default Home;