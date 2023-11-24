import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Modal
} from 'react-native';
import { MedplumClient } from '@medplum/core';

const { width } = Dimensions.get('window');
const numColumns = 2;
const tileSize = width / numColumns;
const data = [
  {
    id: '1',
    imageSource: require('../assets/user.png'),
    text: 'View my requests',
  },
  { id: '2', imageSource: require('../assets/watercup.png'), text: 'Water' },
  { id: '3', imageSource: require('../assets/toilet.png'), text: 'Washroom' },
  { id: '4', imageSource: require('../assets/pain.png'), text: 'Pain' },
  { id: '5', imageSource: require('../assets/bed.png'), text: 'Bed' },
  { id: '6', imageSource: require('../assets/food.png'), text: 'Food' },
];

const BoxItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.box} onPress={() => onPress(item)}>
      <Image source={item.imageSource} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const medplum = new MedplumClient();

  const clientId = "26783641-2608-46d7-9875-1a57658e978f"
  const clientSecret = "8869347129b106856c90d73d9242a1a0e267c212fdb8359ccbbe8eb438ef9af2"

  const login = async () => {
    await medplum.startClientLogin(clientId, clientSecret);
  }

  useEffect(() => {
    const loadData = async () => {
      await login();
    };

    loadData();
  }, []);

  const handlePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const getCurrentDateTimeInEST = () => {
    const date = new Date();
  
    // // Convert the UTC date to EST using toLocaleString
    // const estDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  
    // // Format it to the FHIR `dateTime` format
    // // return date.toISOString().split('.')[0] + '-05:00';  // EST is UTC-5
    return date.toISOString()
  }

  const handleConfirm = async(type) => {
    // Handle the confirmation action here
    // console.log('Confirmed:', selectedItem.text);
    await medplum.createResource({
      resourceType: 'Task',
      status: 'requested',
      intent: 'unknown',
      owner: {
        reference: "Practitioner/b292f7a7-0adc-40db-bb76-6245b8411fda",
        id: "b292f7a7-0adc-40db-bb76-6245b8411fda",
        display: "Padmaashini Sukumaran"
      },
      requester: {
        reference: "Patient/841396bb-4ef1-4ef7-abf1-418cae990bac",
        id: "841396bb-4ef1-4ef7-abf1-418cae990bac",
        display: "John Smith"
      },
      code: {
        text: type
      },
      authoredOn: getCurrentDateTimeInEST()

    });
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={numColumns}
        renderItem={({ item }) => <BoxItem item={item} onPress={handlePress} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm your request for {selectedItem?.text}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => handleConfirm(selectedItem?.text)}>
              <Text style={styles.textStyle}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Add Footer if necessary */}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7', // Light gray background
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#4A90E2', // Medium blue background for the header
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#307AB7', // Slightly darker blue for the border
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text for contrast
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  box: {
    backgroundColor: '#FFFFFF', // White tiles for a clean look
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: tileSize - 20,
    height: tileSize,
    elevation: 2, // Add slight shadow for depth (Android)
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.1, // Shadow for iOS
    shadowRadius: 2, // Shadow for iOS
    borderRadius: 15,
  },
  image: {
    width: 80,
    height: 80,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333', // Darker text for readability
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10, // Removed border radius for a rectangular look
    padding: 10,
    elevation: 2,
    marginVertical: 5,
    width: '100%', // Set button width to full-width
    justifyContent: 'center',
  },
  buttonClose: {
    backgroundColor: '#cad5e3',
  },
  buttonConfirm: {
    backgroundColor: '#cad5e3', // Green color for confirmation
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
