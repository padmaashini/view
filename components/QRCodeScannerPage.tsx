// import React, { useState, useEffect } from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   Button,
//   PermissionsAndroid,
//   Alert,
// } from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";
// import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StackNavigationProp } from "@react-navigation/stack";
// import { RootStackParamList } from "./RootStackParamList";

// // const troll = { monkey: "christy" };
// // const requestCameraPermission = async () => {
// //   try {
// //     const granted = await PermissionsAndroid.request(
// //       PermissionsAndroid.PERMISSIONS.CAMERA,
// //       {
// //         title: "PatientCompanion Camera Permission",
// //         message:
// //           "PatientCompanion needs access to your camera " +
// //           "so you can have access to the hospital's services",
// //         // buttonNeutral: "Ask Me Later",
// //         // buttonNegative: "Cancel",
// //         buttonPositive: "OK",
// //       }
// //     );
// //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
// //       console.log("You can use the camera");
// //     } else {
// //       console.log("Camera permission denied");
// //     }
// //   } catch (err) {
// //     console.warn(err);
// //   }
// // };

// type LoadingPageNavigationProp = StackNavigationProp<
//   RootStackParamList, // Replace with your route param list type
//   "QRCodeScanner" // Specify the name of your screen
// >;

// interface LoadingPageProps {
//   navigation: LoadingPageNavigationProp;
// }

// const QRCodeScanner: React.FC<LoadingPageProps> = ({ navigation }) => {
//   // export default function QRCodeScanner({ navigation }) {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [scanned, setScanned] = useState(false);

//   useEffect(() => {
//     const getBarCodeScannerPermissions = async () => {
//       // const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(true);
//     };

//     // getBarCodeScannerPermissions();
//   }, []);

//   const handleBarCodeScanned = async ({ type, data }: any) => {
//     setScanned(true);
//     Alert.alert(`Room and bed number ${data} has been scanned!`);
//     try {
//       await AsyncStorage.setItem("qrCodeData", data);
//     } catch (error) {
//       console.error("ERROR in QR", error);
//     }
//     console.log("DATA STORED!!!!!", data);
//     navigation.navigate("Home", { qrCodeData: data });
//     // navigation.navigate("Home");
//   };

//   // if (hasPermission === null) {
//   //   return <Text>Requesting for camera permission</Text>;
//   // }
//   if (hasPermission === false) {
//     // return (
//     //   //   <Button title="request permissions" onPress={requestCameraPermission} />
//     //   <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
//     // );
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View className="flex-1 flex-col">
//       {/* style={styles.container}> */}
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned && (
//         <View className="absolute bottom-0 mx-0 my-8">
//           {/* style={styles.button}> */}
//           <Button
//             title={"Tap to Scan Again"}
//             onPress={() => setScanned(false)}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// // const styles = StyleSheet.create({
// // container: {
// //   flex: 1,
// //   flexDirection: "column",
// //   // justifyContent: "center",
// // },
// // button: {
// //   position: "absolute",
// //   bottom: 0,
// //   marginEnd: 0,
// //   marginVertical: 8,
// // },
// // });

// export default QRCodeScanner;
