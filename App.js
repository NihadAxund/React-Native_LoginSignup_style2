import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import LoginPage from './pages/loginpage/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupPage from './pages/signuppage/components/SignupPage';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          
        }}>

        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}


