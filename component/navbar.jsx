import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import flagImage from '../palestine-flag-vector-20323832-removebg-preview.png'; // Adjust the path to your local image

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://png.pngtree.com/png-vector/20240805/ourmid/pngtree-professional-m-logo-for-branding-png-image_13391782.png' }} // Online image
        style={styles.image}
      />
      <Text style={styles.text_color}>TLP ZINDABAD</Text>
      <Image
        source={flagImage} // Use the imported local image
        style={styles.image2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center", // Center alignment vertically
    justifyContent: "flex-start", // Align items to the start
    paddingHorizontal: 10, // Optional: add some horizontal padding
  },
  text_color: {
    fontSize: 30,
    color: "white",
    marginLeft: 20, // Space between image and text
  },
  image: {
    width: 70,
    height: 70,
  },
  image2: {
    width: 70,
    height: 70,
    marginLeft: 20, // Optional: space between the text and the second image
  },
});
