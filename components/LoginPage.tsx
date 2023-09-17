import React from "react";
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";

// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: "PatientCompanion Camera Permission",
//         message:
//           "PatientCompanion needs access to your camera " +
//           "so you can have access to the hospital's services",
//         // buttonNeutral: "Ask Me Later",
//         // buttonNegative: "Cancel",
//         buttonPositive: "OK",
//       }
//     );
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("You can use the camera");
//     } else {
//       console.log("Camera permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
// }
// };

type LoadingPageNavigationProp = StackNavigationProp<
  RootStackParamList, // Replace with your route param list type
  "Login" // Specify the name of your screen
>;

interface LoadingPageProps {
  navigation: LoadingPageNavigationProp;
}

const LoginPage: React.FC<LoadingPageProps> = ({ navigation }) => {
  // const LoginPage = ({ navigation }) => {
  return (
    <View
      className={`flex-1 pt-[${StatusBar.currentHeight}px] bg-[#ecf0f1] p-[10px]`}
    >
      <Text className="mt-[30px] text-[28px] font-bold text-center">
        {/* style={styles.title}> */}
        Scan QR Code
      </Text>
      <Text className="m-[15px] pb-[10px] font-normal text-[18px] text-center">
        {/* style={styles.description}> */}
        Please scan the QR code provided at your hospital to connect to the
        department's patient services
      </Text>
      {/* <Button title="request permissions" onPress={requestCameraPermission} /> */}
      <TouchableOpacity
        className="rounded-[10px] mt-[16px] py-[8px] border-[2px] border-[#20232a] bg-white w-[80%] self-center"
        // style={styles.scanButton}
        // title="Scan QR Code"
        onPress={() => navigation.navigate("QRCodeScanner")}
      >
        <Text className="text-center text-[20px] font-semibold">
          Click to Scan QR Code
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   // justifyContent: "center",
//   paddingTop: StatusBar.currentHeight,
//   backgroundColor: "#ecf0f1",
//   padding: 10,
// },
// title: {
//   margin: 10,
//   fontSize: 28,
//   fontWeight: "bold",
//   textAlign: "center",
// },
// description: {
//   margin: 15,
//   paddingBottom: 10,
//   fontSize: 18,
//   // fontWeight: "bold",
//   textAlign: "center",
// },
//   scanButton: {
//     // padding: 18,
//     borderRadius: 10,
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: "#20232a",
//     backgroundColor: "#61dafb",
//     color: "#20232a",
//     textAlign: "center",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
// });

export default LoginPage;
