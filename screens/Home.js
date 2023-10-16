import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Scan"
        onPress={() => navigation.navigate('Scanner')}
        style={styles.button}
      />
      <Button
        title="Close"
        onPress={() => {
          // Add logic to close the app here
        }}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000000',
    color: 'white',
    width: 200, 
    height: 50, 
    margin: 10, 
  },
});
