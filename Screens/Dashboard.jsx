import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Dashboard = ({navigation}) => {
  const handleNavigateToSignin = () => {
    navigation.navigate('Signin');
  };

  const handleNavigateToHome = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Images/images.jpeg')} // Update the path to your image
        style={styles.image}
      />
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleNavigateToSignin}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleNavigateToHome}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Light green background color
  },
  image: {
    width: '50%', // Set your desired width
    height: 200, // Set your desired height
    marginTop: -20, // Space between image and buttons
  },
  buttonContainer: {
    width: '90%', // Adjust the button width to 90%
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: '#4caf50', // Button background color
    padding: 10,
    borderRadius: 5, // Optional: add border radius for rounded corners
  },
  buttonText: {
    color: "white", // Text color for buttons
    fontSize: 16, 
    width:100,
    textAlign:"center",// Font size for button text
  },
});

export default Dashboard;

