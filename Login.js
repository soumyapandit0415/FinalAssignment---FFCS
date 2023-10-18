import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
const lightWoodColor = 'rgb(227, 186, 143)';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); 

    const handleLogin = () => {
        // Add your authentication logic here
        if (username === 'Admin' && password === 'Password') {
            onLogin();
        } else {
            // Handle authentication failure
            setError('Invalid username or password. Please try again.');
        }
    }

    return (
        <ImageBackground
            source={require('C://Users//indur//News-Application//assets//bg.png')} 
            style={styles.container}
        >
            <View style={styles.overlay}>
                <Text style={styles.header}>WELCOME TO </Text>
                <Text style={styles.appName}>myNewApplication APP </Text>
                <TextInput
                    style={styles.input}
                    placeholder="USERNAME"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="PASSWORD"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                {error && <Text style={styles.error}>{error}</Text>}
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        color: 'white', 
        fontStyle: 'italic',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        color:'yellow',
        fontWeight:'900',
        fontSize: 40,

    },
    appName: {
        fontSize: 24,
        marginBottom: 10,
        color: 'white', 
        fontStyle: 'italic',
        fontWeight: '800',
        fontSize: 25,
        color: lightWoodColor,
        paddingLeft: 20,
        paddingRight: 15,
        paddingBottom: 50,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        opacity: 0.8, 
        borderRadius: 20,
        alignItems: 'center',
        textAlign:'center',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    loginButton: {
        backgroundColor: 'blue',
        borderRadius: 15,
        padding: 10,
        marginTop: 25,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});

export default Login;
