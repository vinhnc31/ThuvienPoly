import React, {useState} from 'react';
import { TouchableOpacity, TextInput, View, Text, StyleSheet } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Search_View = (props) => {

    return (
        <View style={styles.searchContainer}>
            <View style={styles.input}>
                <TextInput placeholder="Nhập thông tin tìm kiếm" style={styles.TextInput} onChangeText={props.onChangeText} value={props.filterValue}></TextInput>
                <TouchableOpacity style={styles.icon_search}>
                    <AntIcon name="search1" size={18} color="#FC6011" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={props.onCancel}>
                <Text style={{ fontSize: 13, color: '#FC6011' }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        marginStart: 16,
        marginEnd: 16,
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 11,
        marginEnd: 4
    },

    TextInput: {
        flex: 1,
        fontSize: 14,
        padding: 8,
        marginEnd: 6,
    },

    icon_search: {
        borderTopRightRadius: 11,
        borderBottomRightRadius: 11,
        paddingStart: 15,
        paddingEnd: 10,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Search_View;