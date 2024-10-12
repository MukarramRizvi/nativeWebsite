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

const SignUp = () => {
  const [inputs, setInputs] = useState({name: '', email: '', password: ''});
  const navigation = useNavigation();

  const handleSubmit = () => {
    Alert.alert('Submitted', 'Data submitted successfully!');
    setInputs({name: '', email: '', password: ''});
    navigation.navigate('Login', {
      emailFromSignup: inputs.email,
      passwordFromSignup: inputs.password,
    });
  };

  const isFormValid =
    inputs.name.length > 0 &&
    inputs.email.length > 0 &&
    inputs.password.length > 0;

  return (
    <ImageBackground
      source={require('../Images/background.jpg')} // Update this path
      style={styles.background}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Sign Up</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={inputs.name}
            onChangeText={value => setInputs({...inputs, name: value})}
            placeholder="Enter your Name"
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            value={inputs.email}
            onChangeText={value => setInputs({...inputs, email: value})}
            placeholder="Enter your Email"
            placeholderTextColor="#fff"
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
          />
        </View>
        <TouchableOpacity
          style={[styles.button, {opacity: isFormValid ? 1 : 0.5}]}
          onPress={isFormValid ? handleSubmit : null}
          disabled={!isFormValid}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 2,
    borderColor: 'rgba(225,225,225,0.2)',
    borderRadius: 20,
    padding: 30,
    paddingHorizontal: 40,
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
    color: '#fff',
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
    color: '#fff',
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

export default SignUp;
