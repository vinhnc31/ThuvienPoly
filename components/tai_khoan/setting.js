import React from "react";
import {StyleSheet, View, SafeAreaView, Text} from "react-native";

const setting = () => {
    return (
        <View>
            <SafeAreaView>
                <Text>Đây là màn setting</Text>
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
export default setting;