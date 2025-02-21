import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ThirdPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Image
          source={require('path_to_your_image')} // Replace with your image path
          style={styles.cameraImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Text</Text>
        <Text style={styles.languageText}>ENG ↔ Korean</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    width: '80%',
    height: '50%',
    backgroundColor: '#cfe',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  cameraImage: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  languageText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ThirdPage;