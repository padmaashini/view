// App.js
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingPage from "./components/LoadingPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import QRCodeScannerPage from "./components/QRCodeScannerPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image } from "react-native";
import { MedplumClient } from '@medplum/core';

const Stack = createStackNavigator();

const CustomHeader = () => {
  return (
    <View className="flex-row items-center">
      {/* style={{ flexDirection: 'row', alignItems: 'center' }}> */}
      <Image
        className="w-[35px] h-[35px] mt-2"
        source={require("./assets/header.png")} // Replace with the path to your image
        // style={{ width: 30, height: 30, marginRight: 10 }}
      />
    </View>
  );
};

const App = () => {
  // const [initialRoute, setInitialRoute] = useState("Loading");

  // useEffect(() => {
  //   // Check if there is data in AsyncStorage
  //   AsyncStorage.getItem("qrCodeData")
  //     .then((data) => {
  //       console.log("APPPPPPP", data);
  //       if (data) {
  //         // Data exists, set initial route to HomeScreen
  //         setInitialRoute("Home");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error checking AsyncStorage:", error);
  //     });
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        {/* <Stack.Screen
          name="Loading"
          component={LoadingPage}
          options={{ headerShown: false }} // Hide the navigation bar for LoadingScreen
        /> */}
        {/* <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            headerLeft: null,
            headerTitle: "PatientCompanion",
          }}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{
            headerLeft: null,
            headerTitle: () => <CustomHeader />,
            headerStyle: {
              backgroundColor: "#FFFFFB",
              opacity: 90,
            },
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Text className="text-black text-lg">Grand River Hospital</Text>
              </View>
            ),
          }}
        />
        {/* <Stack.Screen
          name="QRCodeScanner"
          component={QRCodeScannerPage}
          options={{ headerTitle: "PatientCompanion" }} */}
        {/* /> */}
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Image source={require("./assets/logo.png")} />
//       <Text>HELLO</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
