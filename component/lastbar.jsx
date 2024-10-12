import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Lastbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TLP ZINDABAD</Text>
      <View style={styles.linksContainer}>
        <Text style={styles.link}>Home</Text>
        <Text style={styles.link}>About</Text>
        <Text style={styles.link}>Contact Us</Text>
        <Text style={styles.link}>Privacy Policy</Text>
        <Text style={styles.link}>Terms of Service</Text>
      </View>
      <Text style={styles.contact}>Contact: +123 456 7890</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: '#555', // Lighter gray background
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  link: {
    color: 'white',
    marginHorizontal: 3,
  },
  contact: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
