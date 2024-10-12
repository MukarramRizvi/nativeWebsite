import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [inputs, setInputs] = useState({email: '', password: ''});
  const navigation = useNavigation();

  const handleLogin = () => {
    if (inputs.email && inputs.password) {
      Alert.alert('Success', 'Logged in successfully!');
      setInputs({email: '', password: ''});
      navigation.navigate('Home'); // Navigate to Home screen
    } else {
      Alert.alert('Error', 'Please enter valid credentials!');
    }
  };

  const isFormValid = inputs.email.length > 0 && inputs.password.length > 0;

  return (
    <ImageBackground
      source={require('../Images/background.jpg')} // Ensure this path is correct
      style={styles.background}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Login</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={inputs.email}
            onChangeText={value => setInputs({...inputs, email: value})}
            placeholder="Enter your Email"
            placeholderTextColor="#fff"
            required
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={inputs.password}
            onChangeText={value => setInputs({...inputs, password: value})}
            placeholder="Enter your Password"
            placeholderTextColor="#fff"
            secureTextEntry
            required
          />
        </View>
        <TouchableOpacity
          style={[styles.button, {opacity: isFormValid ? 1 : 0.5}]}
          onPress={isFormValid ? handleLogin : null}
          disabled={!isFormValid}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: 380,
    backgroundColor: 'rgba(30, 30, 30, 0.8)', // Light black background
    borderWidth: 2,
    borderColor: 'rgba(225,225,225,0.2)',
    borderRadius: 20,
    padding: 30,
    paddingHorizontal: 40,
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
    color: '#fff', // White text color
  },
  inputBox: {
    width: '100%',
    height: 60,
    marginVertical: 15,
  },
  input: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'rgba(225,225,225,0.2)',
    borderRadius: 40,
    fontSize: 16,
    color: '#fff', // White text color for input
    padding: 20,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '700',
  },
});

export default Login;
