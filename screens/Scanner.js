import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setScannedData({ type, data });
    // Linking.openURL(data); // open the URL here if needed.
    // alert(`Bar Code With Type ${type} and data ${data} has been scanned`);
  }

  const closeAlert = () => {
    setScanned(false);
    setScannedData(null);
  };

  const verifyData = () => {
    // API call to verify the scanned data.
    Alert.alert('Verification Result', 'Verification successful!', [
      {
        text: 'OK',
        onPress: () => {
          closeAlert();
        },
      },
    ]);
  };

  const scanAgain = () => {
    setScanned(false);
    setScannedData(null);
  };

  if (hasPermission === null) {
    return <Text style={styles.container}>Requesting for Camera Permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={styles.container}>No Access to Camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.alertBox}>
          <Text style={styles.scannedText}>SCANNED SUCCESSFULLY</Text>
          <Text style={styles.alertText}>
            Scanned Bar Code With Type: {scannedData.type}
          </Text>
          <Text style={styles.alertText}>
            Link: {scannedData.data}
          </Text>
          <Text style={styles.alertText}>
            NAME:
          </Text>
          <Text style={styles.alertText}>
            NIC:
          </Text>
          <Text style={styles.alertText}>
            FROM:
          </Text>
          <Text style={styles.alertText}>
            TO:
          </Text>
          <Text style={styles.alertText}>
            AMMOUNT:
          </Text>
          <Text style={styles.alertText}>
            REMAINNING:
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Close" onPress={closeAlert} style={styles.button} />
            <Button title="Verify" onPress={verifyData} style={styles.button} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  absoluteFillObject: {
    ...StyleSheet.absoluteFillObject,
  },
  alertBox: {
    position: 'absolute',
    left: '10%',
    width: '80%',
    height: '50%',
    padding: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    zIndex: 1,
  },
  scannedText: {
    fontWeight: 'bold',
    fontSize: 20, 
    textAlign: 'center', 
    marginBottom: 20,
  },
  alertText: {
    fontSize: 16, 
    marginBottom: 13,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor:'007AFF'
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: 'black', // Add background color
  },
});
