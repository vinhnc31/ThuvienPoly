import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    TextInput,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from '@expo/vector-icons/AntDesign';
import DropdownComponent from './DropdownStatus';
import SearchView from "./SearchView";
import useFilter from './useFilter';

import { borowingSlip_api, book_api, librarian_api, member_api } from "../../respository/index";

const ItemView = ({ navigation, BS , bookList, librarianList, memberList }) => {

    const getBookName = (bookId) => {
        const book = bookList.find((item) => item.id === bookId);
        return book ? book.nameBook : "";
    };

    const getLibrarianName = (librarianId) => {
        const librarian = librarianList.find((item) => item.id === librarianId);
        return librarian ? librarian.name : "";
    };

    const getMemberName = (memberId) => {
        const member = memberList.find((item) => item.id === memberId);
        return member ? member.name : "";
    };

    const bookName = getBookName(BS.bookId);
    const librarianName = getLibrarianName(BS.librarianId);
    const memberName = getMemberName(BS.memberId);

    return (
        <View style={styles.item_view}>
            <View style={styles.header_item}>
                <Text style={styles.title_item}>Phiếu mượn</Text>
                <View style={{ height: 1, backgroundColor: '#D1D1D1', flex: 3 }} />
                <View style={{ flex: 4, marginStart: 4 }}>
                    <DropdownComponent statusBorwingSLip={BS.status} />
                </View>
            </View>
            <View style={styles.body_item}>
                <View style={{ flexDirection: 'column', flex: 0.4 }}>
                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Tên sách: </Text>
                        <Text style={{ fontSize: 11 }}>{bookName}</Text>
                    </View>

                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Thành viên: </Text>
                        <Text style={{ fontSize: 11 }}>{memberName}</Text>
                    </View>

                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Thủ thư: </Text>
                        <Text style={{ fontSize: 11 }}>{librarianName}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'column', flex: 0.4 }}>
                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Ngày mượn: </Text>
                        <Text style={{ fontSize: 11 }}>{BS.dateStart}</Text>
                    </View>

                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Ngày trả: </Text>
                        <Text style={{ fontSize: 11 }}>{BS.dateEnd}</Text>
                    </View>

                    <View style={styles.text_item}>
                        <Text style={{ fontSize: 11 }}>Giá thuê: </Text>
                        <Text style={{ fontSize: 11 }}>{BS.price}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const BorowingSlip = ({ navigation }) => {

    const { showFilterB, filterValueB, handleFilterB, handleCancelB, setFilterValueB } = useFilter();
    const [listBorowingSlips, setListBorowingSlips] = useState([]);
    const [listBooks, setListBooks] = useState([]);
    const [listLibrarians, setListLibrarians] = useState([]);
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        const fetchBorowingSlips = async () => {
            const borowingSlips = await borowingSlip_api.GetListBorowingSlip();
            // console.log(userList);
            setListBorowingSlips(borowingSlips);
        };

        const fetchBooks = async () => {
            const books = await book_api.GetListBook();
            // console.log(userList);
            setListBooks(books);
        };

        const fetchLibrarians = async () => {
            const librarians = await librarian_api.GetListLibrarian();
            // console.log(userList);
            setListLibrarians(librarians);
        };

        const fetchUsers = async () => {
            const userList = await member_api.GetListUser();
            // console.log(userList);
            setListUsers(userList);
        };

        fetchBorowingSlips();
        fetchBooks();
        fetchLibrarians();
        fetchUsers();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: '#F0F5F9', flex: 1 }}>
                {/* header */}
                <View style={{ flex: 0.8 }}>
                    {showFilterB ? (
                        <View style={styles.header}>
                            <SearchView filterValue={filterValueB} onChangeText={setFilterValueB} onCancel={handleCancelB} />
                        </View>
                    ) : (
                        <View style={styles.header}>
                            <Text style={{ fontSize: 20, fontWeight: "bold"}}>PHIẾU MƯỢN</Text>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
                                <TouchableOpacity onPress={handleFilterB}>
                                    <Icon name="search" size={24} color="#FC6011" />
                                </TouchableOpacity>
                                {/* <TouchableOpacity>
                                    <Icon name="filter" size={24} color="#FC6011" />
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    )}
                </View>
                {/* body */}
                <View style={styles.body}>
                    <Text style={{ marginTop: 8, marginStart: 32, fontSize: 12, marginBottom: 16 }}>
                        Tổng phiếu mượn: {listBorowingSlips.length}
                    </Text>
                    {/* phần danh sách phiếu mượn */}
                    <View style={{ height: "100%", backgroundColor: "#fff", width: '100%' }}>
                        <FlatList
                            data={listBorowingSlips}
                            renderItem={({ item }) => <ItemView
                                BS={item}
                                navigation={navigation}
                                bookList={listBooks}
                                librarianList={listLibrarians}
                                memberList={listUsers} />}
                            keyExtractor={item => item.id} />
                    </View>

                    {/* Button */}
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 9 }}></View>
                        <TouchableOpacity style={styles.float_button} onPress={() => navigation.navigate('AddBorowingSlip')}>
                            <View style={{ width: 60, height: 60, backgroundColor: '#FC6011', borderRadius: "50%", alignItems: "center", justifyContent: "center" }}>
                                <View>
                                    <Icon name="plus-circle" size={32} color="#fff" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#fff",
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingTop: 24,
        paddingBottom: 16,
        marginBottom: 16,
        marginHorizontal: 16,
    },

    body: {
        flex: 5,
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        marginBottom: 38
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
        flex: 5,
        fontSize: 16,
        fontWeight: "500",
        marginEnd: 4,
    },

    body_item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    text_item: {
        flex: 1,
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
        marginTop: -84,
    },
});

export default BorowingSlip;
