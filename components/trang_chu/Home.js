import React from "react";
import {StyleSheet, View, Text, SafeAreaView} from "react-native";

const home = () => {
    return (
        <View>
            <SafeAreaView>
                <Text>Đây là trang chủ</Text>
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
export default home;