import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoadingPage = () => {
  const navigation = useNavigation();
  const [qrCodeData, setQrCodeData] = useState(null);

  useEffect(() => {
    const checkAsyncStorage = async () => {
      try {
        // await AsyncStorage.setItem("qrCodeData", "mockData");

        console.log("Before getItem"); // Add this line
        const data = await AsyncStorage.getItem("qrCodeData");
        console.log("After getItem"); // Add this line
        console.log("APPPPPP", data);
        if (data !== null && data !== undefined) {
          // Data exists, set it in the component state
          setQrCodeData(data);

          // Now you can navigate to HomeScreen or LoginScreen based on qrCodeData
          if (qrCodeData) {
            navigation.navigate("Home", { qrCodeData: data });
          } else {
            navigation.navigate("Login");
          }
        } else {
          // Data does not exist, navigate to LoginScreen
          navigation.navigate("Login");
        }
      } catch (error) {
        console.error("Error checking AsyncStorage:", error);
      }
    };
    checkAsyncStorage();
  }, [navigation, qrCodeData]);

  // useEffect(() => {
  //   checkAsyncStorage();
  // }, [navigation]);

  // useEffect(() => {
  //   // Simulate an asynchronous initialization process
  //   setTimeout(() => {
  //     // Navigate to the login screen when initialization is complete
  //     navigation.navigate("Loading");
  //   }, 2000); // Change this delay as needed
  // }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")} // Replace with the actual path to your image
        style={styles.image}
      />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300, // Adjust the width and height as needed
    height: 200,
    marginBottom: 20, // Add spacing between the image and the activity indicator
  },
});

export default LoadingPage;
