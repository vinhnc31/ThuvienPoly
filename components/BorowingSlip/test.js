import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const DATA = [
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

const getSuggestions = (value, data) => {
    const inputValue = value.toLowerCase().trim();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : data.filter(item =>
        item.title.toLowerCase().slice(0, inputLength) === inputValue
    );
};

const renderSuggestion = suggestion => (
    <Text>{suggestion.title}</Text>
);

const Item = ({ item }) => (
    <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subTitle}>Tên sách: {item.nameBook}</Text>
    <Text style={styles.subTitle}>Người mượn: {item.nameUser}</Text>
    <Text style={styles.subTitle}>Thủ thư: {item.nameLibrarian}</Text>
    <Text style={styles.subTitle}>Ngày mượn: {item.startDay}</Text>
    <Text style={styles.subTitle}>Ngày trả: {item.endDay}</Text>
    <Text style={styles.subTitle}>Phí mượn: {item.rentCost}</Text>
    <Text style={styles.subTitle}>Tình trạng: {item.status}</Text>
    </View>
    );

const test = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(DATA);
    const [searched, setSearched] = useState('');
    const [searchByStatus, setSearchByStatus] = useState(false);
  
    useEffect(() => {
      let filteredData = DATA.filter(item => {
        const titleMatched = item.title.toLowerCase().includes(searched.toLowerCase());
        const statusMatched = item.status.toLowerCase().includes(searched.toLowerCase());
        if (searchByStatus) {
          return searched === '' || searched === ' ' || statusMatched;
        }
        return searched === '' || searched === ' ' || titleMatched;
      });
      setData(filteredData);
    }, [searched, searchByStatus]);
  
    const handleSearch = () => {
      setSearched(searchText.trim());
    };
  
    const handleKeyDown = event => {
      if (event.nativeEvent.key === 'Enter') {
        setSearched(searchText.trim());
      }
    };
  
    const handleToggleSearchByStatus = () => {
      setSearchByStatus(!searchByStatus);
      setSearched('');
    };
  
    const renderItem = ({ item }) => (
      <Item item={item} />
    );
  
    return (
        <SafeAreaView style={styles.container}>
      <View >
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
            onKeyDown={handleKeyDown}
          />
          <Button title="Tìm kiếm" onPress={handleSearch} />
          <Button title={searchByStatus ? 'Tìm theo tiêu đề' : 'Tìm theo trạng thái'} onPress={handleToggleSearchByStatus} />
        </View>
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={styles.noResult}>
            <Text style={styles.noResultText}>Không tìm thấy kết quả nào cho "{searched}"</Text>
          </View>
        )}
      </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        fontStyle: 'italic'
    },
    searchContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginBottom: 16,
        alignItems: 'center'
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginRight: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        fontSize: 16
    },
    searchByContainer: {
        flexDirection: 'row',
        marginLeft: 16,
        alignItems: 'center'
    },
    searchByTitle: {
        fontSize: 16,
        marginRight: 8
    },
    searchByButtons: {
        flexDirection: 'row'
    }
});

export default test;