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
// import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";
import { RouteProp } from "@react-navigation/native";

const { width } = Dimensions.get("window");
const numColumns = 2;
const data = [
  {
    id: "1",
    imageSource: require("../assets/user.png"),
    text: "View my requests",
  },
  { id: "2", imageSource: require("../assets/watercup.png"), text: "Water" },
  { id: "3", imageSource: require("../assets/toilet.png"), text: "Washroom" },
  { id: "4", imageSource: require("../assets/pain.png"), text: "Pain" },
  { id: "5", imageSource: require("../assets/bed.png"), text: "Bed" },
  { id: "6", imageSource: require("../assets/food.png"), text: "Food" },
];

interface BoxItemProps {
  item: {
    // icon: string;
    text: string;
    imageSource: any;
  };
}

const BoxItem: React.FC<BoxItemProps> = ({ item }) => (
  // const BoxItem = ({ item }: { item: string; text: string }) => (
  <View
    className="bg-white m-[10] flex-1 justify-center items-center border-black"
    style={[
      //   // styles.box,
      {
        backgroundColor: "white",
        width: width / numColumns,
        height: width / 2.3,
        margin: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "black",
        borderRadius: 15,
      },
    ]}
  >
    <Image className="w-[60px] h-[60px]" source={item.imageSource} />
    <Text className="mt-2 text-[25px] font-medium">{item.text}</Text>
    {/* style={styles.text}>{item.text}</Text> */}
  </View>
);

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;

// const HomePage = () => {
const HomePage: React.FC<{ route: HomeScreenRouteProp }> = ({ route }) => {
  // const { qrCodeData } = route.params;
  // const route = useRoute();
  // const route = useRoute<HomeScreenParams>(); // Provide the type parameter
  // const qrCodeData = route.params?.qrCodeData;
  const { qrCodeData } = route.params;

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
    <View className="flex-1 bg-[#f0f9ff] flex-col">
      {/* style={[styles.container, { flexDirection: "column" }]}> */}
      {/* Emergency button */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
        }}
      >
        <TouchableOpacity
          className="bg-[#FF0000] rounded-[10px] w-[80%] h-[85%] content-center items-center justify-center border-2 border-black"
          // style={styles.button}
        >
          <Text className="text-white text-[30px]">Emergency</Text>
          {/* style={[styles.buttonText, { fontSize: 30 }]}>Emergency</Text> */}
        </TouchableOpacity>
      </View>
      {/* request icons */}
      <View className="flex-6 bg-[#f0f9ff]">
        {/* style={[styles.container, { flex: 6, backgroundColor: "white" }]}> */}
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
          backgroundColor: "#FFFFFB",
          paddingLeft: 10,
          justifyContent: "center",
        }}
      >
        {/* <Text>Scanned QR Code Data:</Text> */}
        <Text
          className="font-bold text-[23px] text-black"
          // style={{ fontWeight: "bold", fontSize: 23 }}
        >
          {qrCodeData}
        </Text>
      </View>
    </View>
  );
};
export default HomePage;

// const styles = StyleSheet.create({
// container: {
//   flex: 1, // Make the container flex to take the available space
//   // justifyContent: "center", // Center content vertically
//   // alignItems: "center", // Center content horizontally
//   backgroundColor: "white",
// },
// button: {
//   backgroundColor: "#FF0000",
//   // paddingHorizontal: 10,
//   // paddingVertical: 30,
//   borderRadius: 10,
//   width: "80%",
//   height: "85%",
//   alignContent: "center",
//   alignItems: "center",
//   justifyContent: "center",
//   borderWidth: 2,
//   borderColor: "black",
// },
// buttonText: {
//   color: "white",
//   fontSize: 16,
// },
// row: {
//   flexDirection: "row", // Horizontal layout within rows
//   justifyContent: "space-around", // Spacing between items in rows
//   alignItems: "center", // Center items vertically within rows
// },
// item: {
//   alignItems: "center", // Center items horizontally
// },
// text: {
//   marginTop: 10, // Spacing between icon and text
//   fontSize: 30,
// },
// box: {
//   flex: 1,
//   justifyContent: "center",
//   alignItems: "center",
//   borderWidth: 1.5,
//   borderColor: "black",
//   borderRadius: 15,
//   margin: 10,
//   // height: "50",
// },
// });
