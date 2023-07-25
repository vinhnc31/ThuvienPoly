import React from "react";
import {StyleSheet, View, Text, SafeAreaView} from "react-native";

const thanh_vien = () => {
    return (
        <View>
            <SafeAreaView>
                <Text>Đây là màn thành viên</Text>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignContent:"center",
    }
});
export default thanh_vien;