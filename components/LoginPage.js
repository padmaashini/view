import React from "react";
import {
  Button,
  PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan QR Code</Text>
      <Text style={styles.description}>
        Please scan the QR code provided at your hospital to connect to the
        department's patient services
      </Text>
      {/* <Button title="request permissions" onPress={requestCameraPermission} /> */}
      <Button
        style={styles.scanButton}
        title="Scan QR Code"
        onPress={() => navigation.navigate("QRCodeScanner")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  title: {
    margin: 10,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    margin: 15,
    paddingBottom: 10,
    fontSize: 18,
    // fontWeight: "bold",
    textAlign: "center",
  },
  scanButton: {
    // padding: 18,
    borderRadius: 10,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default LoginPage;
