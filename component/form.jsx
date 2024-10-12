import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [opt, setOpt] = useState("");

    const handleSubmit = () => {
        console.log(name, email, password, opt);
        
        // Resetting the input fields
        setName("");
        setEmail("");
        setPassword("");
        setOpt("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Form</Text>
            <TextInput
                style={styles.input}
                keyboardType='default'
                value={name}
                onChangeText={e => setName(e)}
                placeholder='Enter your Name'
            />
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={e => setEmail(e)}
                keyboardType='email-address'
                placeholder='Enter your Email'
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={e => setPassword(e)}
                secureTextEntry={true}
                placeholder='Enter your Password'
            />
            <TextInput
                style={styles.input}
                value={opt}
                onChangeText={e => setOpt(e)}
                keyboardType='phone-pad'
                placeholder='Enter your OPT'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Submit Form</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 26, // Set font size to 26
        fontWeight: 'bold', // Make the font bold
        fontStyle: 'italic', // Make the font italic
        marginBottom: 10, // Add some space below the title
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    
    },
});
