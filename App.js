import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './components/Register';
import LoginScreen from './components/Login';
import Dev from './components/Audio';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Registration" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dev" component={Dev} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// initialRouteName="Registration" screenOptions={{ headerShown: false }}