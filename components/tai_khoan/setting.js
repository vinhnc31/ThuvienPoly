import {
  View,
  Image,
  Alert,
  Text,
  StyleSheet,
  TouchableHighlight,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

// OR if you are using a custom icon library

export default function Setting({ navigation }) {
  return (
    <View>
      <View style={styles.betWeenAppBar}>
        <View style={styles.flexRow}>
          <TouchableHighlight onPress={{}}>
            <Image
              source={require("../tai_khoan/img/logo.jpg")}
              style={styles.avatar}
            />
          </TouchableHighlight>
          <View style={styles.textSetting}>
            <Text>Preciuos Blade</Text>
            <Text>012345678</Text>
          </View>
        </View>
        <Icon
          name="log-out"
          size={30}
          color="orangered"
          style={{ alignSelf: "center" }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={styles.betWeen}
          onPress={() => navigation.navigate("Rank")}
        >
          <View style={styles.flexRow}>
            <Icon name="bar-graph" size={30} color="orangered" />
            <Text style={styles.textSetting}>Rank</Text>
          </View>
          <Icon name="chevron-right" size={30} color="orangered" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.betWeen}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <View style={styles.flexRow}>
            <Icon name="lock-open" size={30} color="orangered" />
            <Text style={styles.textSetting}>Change Password</Text>
          </View>
          <Icon name="chevron-right" size={30} color="orangered" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.betWeen}
          onPress={() => navigation.navigate("BookMark")}
        >
          <View style={styles.flexRow}>
            <Icon name="bookmarks" size={30} color="orangered" />
            <Text style={styles.textSetting}>Book Mark</Text>
          </View>
          <Icon name="chevron-right" size={30} color="orangered" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  textSetting: {
    paddingLeft: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  flexRow: { flexDirection: "row" },
  betWeenAppBar: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 20,
    paddingTop: 40,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  betWeen: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 20,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  options: {},
});

function bookMark() {
  return (
    <NavigationContainer>
      <Stackass.Navigator>
        <Stackass.Screen
          name="BookMark"
          component={BookMark}
          options={{ headerShown: true }}
        />
        <Stackass.Screen
          name="changePassword"
          component={changePassword}
          options={{ headerShown: true }}
        />
        <Stackass.Screen
          name="Rank"
          component={Rank}
          options={{ headerShown: true }}
        />
      </Stackass.Navigator>
    </NavigationContainer>
  );
}
