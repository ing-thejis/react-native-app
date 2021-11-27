import React, { useState } from 'react'
import { styles } from '../styles/Login'
import { Text, TextInput, TouchableOpacity, View, StatusBar, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Admin } from '../db/Users'
import { useLogin } from '../helpers/helpLogin'

const Login = ({navigation}) => {

    const [btnSelected, setBtnSelected] = useState(true)

    const {
        username,
        password,
        handleChange
    } = useLogin();
  
    const handleLogin = async () => {

        setBtnSelected(!btnSelected)

        if (Admin.username === username && Admin.password === password ) {
            alert('Logged in')
        } else {
            alert('Username and/or password is incorrect')
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor="#1e90ff"
                barStyle="light-context"            
            />

            <View style={styles.header}>
                <Image 
                    source={{uri: 'https://www.logolynx.com/images/logolynx/89/891446aa2217b882c17525f0e241d367.png'}}
                    style={styles.logo}
                    resizeMode="stretch"    
                />
                <Text style={styles.welcome}>Welcome to my App</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={ btnSelected===true ? styles.btnSelect : styles.btnUnselect } onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnUnselect} onPress={()=>navigation.navigate('Signup')}>
                        <Text style={styles.btnText}>Signup</Text>
                    </TouchableOpacity>
                </View>  
            </View>

            <View style={styles.content}>
                <TextInput 
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(value)=>handleChange('USERNAME',value)}
                    value={username}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(value)=>handleChange('PASSWORD', value)}
                    value={password}
                />
                <TouchableOpacity><Text style={{color: '#fff', marginVertical: 4}}>Forgot password</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin} onPress={()=>handleLogin()}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
