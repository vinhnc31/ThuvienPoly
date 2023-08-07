import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import icon_search from "../../img/Icon/search.png"
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from "react-native-elements";
import { TextInput } from "react-native-paper";

const DATA =
    [
        {
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "images/things-fall-apart.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Things Fall Apart",
            "year": 1958
        },
        {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "images/fairy-tales.jpg",
            "language": "Danish",
            "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            "pages": 784,
            "title": "Fairy tales",
            "year": 1836
        },
        {
            "author": "Dante Alighieri",
            "country": "Italy",
            "imageLink": "images/the-divine-comedy.jpg",
            "language": "Italian",
            "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
            "pages": 928,
            "title": "The Divine Comedy",
            "year": 1315
        },
        {
            "author": "Unknown",
            "country": "Sumer and Akkadian Empire",
            "imageLink": "images/the-epic-of-gilgamesh.jpg",
            "language": "Akkadian",
            "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
            "pages": 160,
            "title": "The Epic Of Gilgamesh",
            "year": -1700
        },
        {
            "author": "Unknown",
            "country": "Achaemenid Empire",
            "imageLink": "images/the-book-of-job.jpg",
            "language": "Hebrew",
            "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
            "pages": 176,
            "title": "The Book Of Job",
            "year": -600
        },
        {
            "author": "Unknown",
            "country": "India/Iran/Iraq/Egypt/Tajikistan",
            "imageLink": "images/one-thousand-and-one-nights.jpg",
            "language": "Arabic",
            "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
            "pages": 288,
            "title": "One Thousand and One Nights",
            "year": 1200
        },
        {
            "author": "Unknown",
            "country": "Iceland",
            "imageLink": "images/njals-saga.jpg",
            "language": "Old Norse",
            "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
            "pages": 384,
            "title": "Nj\u00e1l's Saga",
            "year": 1350
        },
        {
            "author": "Jane Austen",
            "country": "United Kingdom",
            "imageLink": "images/pride-and-prejudice.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
            "pages": 226,
            "title": "Pride and Prejudice",
            "year": 1813
        },
    ]

const renderItem = ({ item, navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('InfoUser')} style={styles.item_view}>
        <View style={styles.header_item}>
            <Image source={require('../../img/book_img.png')} />
            <Text style={styles.title_item}>{item.title}</Text>
        </View>

        <View style={styles.body_item}>
            <View style={styles.text_item}>
                <Text style={{ fontSize: 9}}>Tên TG: </Text>
                <Text style={{ fontSize: 9,}}>{item.author}</Text>
            </View>

            <View style={styles.text_item}>
                <Text style={{ fontSize: 9}}>Giá: </Text>
                <Text style={{ fontSize: 9}}>{item.year}</Text>
            </View>

            <View style={styles.text_item}>
                <Text style={{ fontSize: 9}}>số trang: </Text>
                <Text style={{ fontSize: 9}}>{item.pages}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* header */}
            <View style={{ backgroundColor: '#F0F5F9' }}>
                <View style={styles.header}>
                    <Image source={require('../../img/logo.png')} style={{ width: 200, height: 50, marginStart: 16 }} />
                </View>

                <View style={{ marginVertical: 16, marginHorizontal: 8, alignItems: "center", justifyContent: "center" }}>
                    <View style={{ alignItems: "center", flexDirection: "row", paddingHorizontal: 8, paddingVertical: 6, backgroundColor: '#FAFAFAED', marginHorizontal: 32, borderRadius: 10 }}>
                        <Icon name="search" size={18} color={'#3C3C4399'} style={{ marginEnd: 16 }} />
                        <TextInput style={[styles.inputText, { padding: 0, margin: 0 }]} placeholder="Search" underlineColor="transparent" />
                    </View>
                </View>

                {/* body */}
                <View style={styles.body}>
                    <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", marginHorizontal: 24, marginVertical: 16 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, flex: 1 }}>
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
                            data={DATA}
                            renderItem={({ item }) => renderItem({ item, navigation })}
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
        flex: 0.5,
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
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        paddingTop: 26,
        paddingBottom: 16,
    },

    body: {
        height: '100%',
        backgroundColor: "#fff",
    },

    item_view: {
        // alignItems: "center",
        // justifyContent: "center",
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
        justifyContent:"flex-start"
    },

    text_item: {
        flexDirection: 'row',
        justifyContent:"space-between",
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

export default home;