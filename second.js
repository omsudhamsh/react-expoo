import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('C:/Users/omsud/OneDrive/Desktop/expo/react-expoo/assets/Group 6.png')}
          style={styles.logo}
        />
        <Text style={[styles.title, { fontWeight: 'bold' }]}>Silent Link</Text>
      </View>
      <Text style={[styles.aboutTitle, { fontWeight: 'bold' }]}>About us</Text>
      <Text style={[styles.aboutText, { fontWeight: 'bold' }]}>
        Our app turns words into Indian Sign Language (ISL) and vice versa, making communication easy for everyone. Type a message and see it translated into ISL. A great tool for learning ISL or chatting with friends.
      </Text>
      <Text style={[styles.aboutText, { fontWeight: 'bold' }]}>
        Bringing Words to Gestures :)
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('third')}
        style={styles.button}
      >
        <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <Text style={[styles.iconText, { fontWeight: 'bold' }]}>Aa</Text>
          </View>
          <View style={styles.arrow} />
          <Image
            source={require('C:/Users/omsud/OneDrive/Desktop/expo/react-expoo/assets/exp1.png')}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 18,
    color: '#FF5733',
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderWidth: 10,
    borderColor: 'transparent',
    borderLeftColor: '#FF0000', // Arrow color
    transform: [{ rotate: '45deg' }],
    marginHorizontal: 10,
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
});

export default SecondPage;