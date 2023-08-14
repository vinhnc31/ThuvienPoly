import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
    { name: 'Đang mượn' },
    { name: 'Đã trả' },
    { name: 'Quá hạn' },
];

const DropdownComponent = ({ statusBorwingSLip }) => {
    const [name, setName] = useState(null);

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.name}</Text>
            </View>
        );
    };

    const getSelectedTextStyle = (name) => {
        switch (name) {
            case 'Đang mượn':
                return { color: '#f2d82e', fontSize: 14 };
            case 'Đã trả':
                return { color: '#00ff11', fontSize: 14 };
            case 'Quá hạn':
                return { color: '#ff0000', fontSize: 14 };
            default:
                return { color: 'black', fontSize: 14 };
        }
    };

    useEffect(() => {
        setName(getSelectedText(statusBorwingSLip));
    }, [statusBorwingSLip]);

    const getSelectedText = (status) => {
        switch (status) {
            case "0":
                return 'Đang mượn';
            case "1":
                return 'Đã trả';
            case "2":
                return 'Quá hạn';
            default:
                return 'Trạng thái';
        }
    };

    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            data={data}
            maxHeight={300}
            labelField='name'
            valueField="name"
            placeholder='trạng thái'
            value={name}
            onChange={item => {
                setName(item.name);
            }}
            renderItem={renderItem}
            selectedTextStyle={getSelectedTextStyle(name)}
        />
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        height: 28,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 8,
        elevation: 2,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 13,
    },
    placeholderStyle: {
        fontSize: 14,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
});