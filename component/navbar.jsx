import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function Navbar() {
  const navigation = useNavigation(); // Initialize navigation

  const handleSignOut = () => {
    // Add your sign-out logic here, e.g., clearing user data or token
    navigation.navigate('Dashboard'); // Replace with your actual sign-out path
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-professional-m-logo-for-branding-png-image_13391782.png',
        }} // Online image
        style={styles.image}
      />
      <Text style={styles.text_color}>JWPK</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center', // Center alignment vertically
    justifyContent: 'flex-start', // Align items to the start
    paddingHorizontal: 10, // Optional: add some horizontal padding
  },
  text_color: {
    fontSize: 30,
    color: 'white',
    marginRight:65 , // Space between image and text
  },
  image: {
    width: 70,
    height: 70,
    marginRight:60
  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 20, // Space between text and button
    backgroundColor: 'transparent', // Default background
  },
  buttonText: {
    color: 'white', // White text color
    fontSize: 16,
  },
  buttonHover: {
    backgroundColor: 'white', // Background color on hover
  },
});
