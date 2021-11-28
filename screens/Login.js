import React, { useState, useContext } from 'react'
import { styles } from '../styles/Login'
import { Text, TextInput, TouchableOpacity, View, StatusBar, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import { useLogin } from '../helpers/helpLogin'
import { AuthContext } from '../context/AuthContext';

const Login = ({navigation}) => {

    const [btnSelected, setBtnSelected] = useState(true)

    const {
        username,
        password,
        handleChange
    } = useLogin();
  
    const { signIn } = useContext(AuthContext)

    const handleLogin = (valueUsername, valuePassword) => {
        signIn(valueUsername, valuePassword)
    }
    return (

        <ScrollView contentContainerStyle={styles.container}>
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
                <TouchableOpacity style={styles.btnLogin} onPress={() => {handleLogin(username, password)}}>
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        
        </ScrollView>
    )
}

export default Login
