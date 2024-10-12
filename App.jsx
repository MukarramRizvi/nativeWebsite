import React from 'react';
// import Navbar from './component/navbar'
// import Navbarniche from './component/navbarniche'
// import Cards from './component/cards'
// import Lastbar from './component/lastbar'
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Navigation from './Config/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import About from './Screens/About';
// import Farig from './component/Farig'
// import Form from './component/form'

export default function App() {

const Stack = createStackNavigator()

  return (
    <>


<Navigation/>
    </>
  )
}
