// main page with requests
import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");
const numColumns = 2;
const data = [
  { id: "1", icon: "water", text: "View my requests" },
  { id: "2", icon: "toilet", text: "Water" },
  { id: "3", icon: "blanket", text: "Washroom" },
  { id: "4", icon: "pain", text: "Pain" },
  { id: "5", icon: "bed", text: "Bed" },
  { id: "6", icon: "food", text: "Food" },
];

const BoxItem = ({ item }) => (
  <View
    style={[
      styles.box,
      {
        backgroundColor: "white",
        width: width / numColumns,
        height: width / 2.3,
        margin: 10,
      },
    ]}
  >
    <Icon name={item.icon} size={64} color="black" />
    <Text style={styles.text}>{item.text}</Text>
  </View>
);

const HomePage = () => {
  // const { qrCodeData } = route.params;
  const route = useRoute();
  const qrCodeData = route.params?.qrCodeData;

  //   useEffect(() => {
  //     const checkAsyncStorage = async () => {
  //       try {
  //         // await AsyncStorage.setItem("qrCodeData", "mockData");
  //         const data = await AsyncStorage.getItem("qrCodeData");
  //       } catch (error) {
  //         console.error("Error checking AsyncStorage:", error);
  //       }
  //     };
  //     checkAsyncStorage();
  //   });

  //   const retrieveData = async () => {
  //     try {
  //       const data = await AsyncStorage.getItem("qrCodeData"); // Retrieve data
  //       console.log("Retrieved data in the home page:", data);
  //     } catch (error) {
  //       console.error("Error retrieving data:", error);
  //     }
  //   };
  //   retrieveData();
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      {/* Emergency button */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          margin: 5,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.buttonText, { fontSize: 30 }]}>Emergency</Text>
        </TouchableOpacity>
      </View>
      {/* request icons */}
      <View style={[styles.container, { flex: 6, backgroundColor: "white" }]}>
        <FlatList
          data={data}
          numColumns={2} // 3 columns
          renderItem={({ item }) => <BoxItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* Footer: Room # Bed # */}
      <View
        style={{
          flex: 0.5,
          backgroundColor: "lightgray",
          paddingLeft: 10,
          justifyContent: "center",
        }}
      >
        {/* <Text>Scanned QR Code Data:</Text> */}
        <Text style={{ fontWeight: "bold", fontSize: 23 }}>{qrCodeData}</Text>
      </View>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container flex to take the available space
    // justifyContent: "center", // Center content vertically
    // alignItems: "center", // Center content horizontally
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#FF0000",
    // paddingHorizontal: 10,
    // paddingVertical: 30,
    borderRadius: 15,
    width: "80%",
    height: "85%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  row: {
    flexDirection: "row", // Horizontal layout within rows
    justifyContent: "space-around", // Spacing between items in rows
    alignItems: "center", // Center items vertically within rows
  },
  item: {
    alignItems: "center", // Center items horizontally
  },
  text: {
    marginTop: 10, // Spacing between icon and text
    fontSize: 30,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    margin: 10,
    // height: "50",
  },
});
