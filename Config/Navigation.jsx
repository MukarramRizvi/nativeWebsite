import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Signin from '../Dipration/Signin';
import Login from '../Dipration/Login';
import Dashboard from '../Screens/Dashboard';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgba(30, 30, 30, 0.8)', // Light black background for header
          },
          headerTintColor: '#fff', // White text color for header
          headerTitleStyle: {
            fontWeight: 'bold', // Bold title style if needed
          },
        }}
        initialRouteName="Dashboard"
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Login" // Use "Login" instead of "login" to maintain consistency
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
