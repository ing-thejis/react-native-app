import React, { useState } from 'react'
import { styles } from '../styles/Signup'
import { Text, TextInput, TouchableOpacity, View, StatusBar, AsyncStorageStatic, Image } from 'react-native'
import { useLogin } from '../helpers/helpLogin'
import { Input, Icon } from 'react-native-elements'

const userIcon = <Icon type="font-awesome" name="user-circle" size={20} color="#aaa"/>

const Signup = ({navigation}) => {

    const [btnSelected, setBtnSelected] = useState(true)

    const {
        username,
        password,
        email,
        handleChange
    } = useLogin();

    const handleSignup = () => {
        alert('Signup')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={{uri: 'https://www.logolynx.com/images/logolynx/89/891446aa2217b882c17525f0e241d367.png'}}
                    style={styles.logo}
                    resizeMode="stretch"    
                />
                <Text style={styles.welcome}>Welcome to my App</Text>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnUnselect} onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ btnSelected===true ? styles.btnSelect : styles.btnUnselect } onPress={()=>navigation.navigate('Signup')}>
                        <Text style={styles.btnText}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <StatusBar 
                    backgroundColor="#1e90ff"
                    barStyle="light-context"            
                />
            
                
                <TextInput 
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(value)=>handleChange('USERNAME',value)}
                    value={username}
                    autoCapitalize="none"
                />
            
    
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(value)=>handleChange('EMAIL',value)}
                    value={email}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(value)=>handleChange('PASSWORD', value)}
                    value={password}
                />
                <TouchableOpacity style={styles.btnSignup} onPress={()=>handleSignup()}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                  
        </View>
    )
}

export default Signup
