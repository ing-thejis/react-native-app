import React from 'react'
import { styles } from '../styles/Login'
import { Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor="#1e90ff"
                barStyle="light-context"            
            />
            <Text style={styles.welcome}>Login</Text>
            <TextInput 
                style={styles.input}
                placeholder="Username"
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                secureTextEntry={true}
            />
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnUser} onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnUser} onPress={()=>navigation.navigate('Signup')}>
                    <Text style={styles.btnText}>Signup</Text>
                </TouchableOpacity>
            </View>       
        </View>
    )
}

export default Login
