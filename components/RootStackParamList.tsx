import QRCodeScanner from "./QRCodeScannerPage";
export type RootStackParamList = {
  Home: { qrCodeData: string };
  Login: undefined; // If 'Login' doesn't have any route params
  Loading: undefined;
  QRCodeScanner: undefined;
  // Define other screens and their params as needed
};
