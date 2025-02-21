import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './first';
import SecondPage from './second';
import ThirdPage from './third';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" component={FirstPage} options={{ title: 'Silent Link' }} />
        <Stack.Screen name="Second" component={SecondPage} options={{ title: 'About Us' }} />
        <Stack.Screen name="Third" component={ThirdPage} options={{ title: 'The Gestures' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
