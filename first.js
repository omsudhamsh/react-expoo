import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FirstPage = () => {
  const navigation = useNavigation();

return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
                source={require('C:/Users/omsud/OneDrive/Desktop/expo/react-expoo/assets/Group 4599.png')}
                style={[styles.logo, { borderRadius: 20 }]}
            />
            <Text style={styles.title}>Silent Link</Text>
        </View>
        <Button
            title="Enter"
            onPress={() => navigation.navigate('Second')}
            color="#FF5733"
        />
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default FirstPage;