import React from "react";

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Modal,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { TextInput, Button } from "react-native-paper";
import BackgoundLogin from "../img/backgound.png";
import logo from "../img/logo.jpg";
import Icon from "react-native-vector-icons/Entypo";

import { useNavigation } from "@react-navigation/native";
const itemList = [
  { id: 1, img: require("../img/logo.jpg"), name: "Item 1" },
  { id: 2, img: require("../img/logo.jpg"), name: "Item 2" },
  { id: 3, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 4, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 5, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 6, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 7, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 8, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 9, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 10, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 11, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 12, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 13, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 14, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 15, img: require("../img/logo.jpg"), name: "Item 3" },
  { id: 16, img: require("../img/logo.jpg"), name: "Item 3" },

  // Add more items as needed
];

const ItemList = ({ item }) => {
  return (
    <View>
      <View
        key={item.id}
        style={{ flexDirection: "column", borderWidth: 0.5, padding: 10 }}
      >
        <Image source={item.img} style={{ height: 60, width: 60 }} />
        <View
          style={{
            alignSelf: "center",
            flexDirection: "column",
            marginHorizontal: 15,
          }}
        >
          <Text>{item.name}</Text>
          <Text>{item.name}</Text>
        </View>
      </View>
    </View>
  );
};
const Rank = () => {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("12/12/2023");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  const navigation = useNavigation();
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        data: [0, 40, 45, 44, 80, 99, 43, 77, 88, 150],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.8,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 40,
        }}
      >
        <Icon
          name="chevron-small-left"
          size={30}
          color="orangered"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ paddingLeft: 10, fontSize: 20, alignSelf: "center" }}>
          Rank
        </Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            justifyContent: "space-between",
          }}
        >
          <Text>Top 10 Sách</Text>
          <Text>Xem tất cả</Text>
        </View>

        <FlatList data={itemList} horizontal={true} renderItem={ItemList} />
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="calendar" title="Calendar" size={30} color="orangered" />
          <View style={{alignSelf:'center',backgroundColor:'green'}}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" }
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <View style={{ width: screenWidth /3 }}>
                  <TouchableOpacity
                    style={styles.inputBtn}
                    onPress={handleOnPressStartDate}
                  >
                    <Text>{selectedStartDate}</Text>
                  </TouchableOpacity>
                </View>

                <View style={{  alignItems: "center" }}>
                  {/* Create modal for date picker */}
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={openStartDatePicker}
                  >
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <DatePicker
                          mode="calendar"
                          minimumDate={startDate}
                          selected={startedDate}
                          onDateChanged={handleChangeStartDate}
                          onSelectedChange={(date) =>
                            setSelectedStartDate(date)
                          }
                          options={{
                            backgroundColor: "#080516",
                            textHeaderColor: "#469ab6",
                            textDefaultColor: "#FFFFFF",
                            selectedTextColor: "#FFF",
                            mainColor: "#469ab6",
                            textSecondaryColor: "#FFFFFF",
                            borderColor: "rgba(122, 146, 165, 0.1)",
                          }}
                        />

                        <TouchableOpacity onPress={handleOnPressStartDate}>
                          <Text style={{ color: "white" }}>Close</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                </View>
              </KeyboardAvoidingView>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            borderRadius: 40,
            borderWidth: 1,
            borderColor: "orangered",
            margin: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 10,
            height: "5%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Revenue: </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>100.00</Text>
        </View>

        <BarChart
          style={{ alignItems: "center", borderRadius: 20 }}
          data={data}
          height={screenHeight - 365}
          width={screenWidth - 20}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 

  inputBtn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#222",
    height: 30,
    paddingLeft: 8,
    fontSize: 18,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#080516",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Rank;
