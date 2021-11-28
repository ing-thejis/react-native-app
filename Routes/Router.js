import React, { useEffect, useMemo, useState, useReducer } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import {AuthReducer} from '../context/AuthReducer'
import { AuthContext } from '../context/AuthContext'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Router = () => {

    // const [isLoading, setIsLoading] = useState(true)
    // const [userToken, setUserToken] = useState(null)

    const initLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    }
        
    const [loginState, dispatch] = useReducer(AuthReducer, initLoginState)



    const authContext = useMemo(() => ({
        signIn: async (userName, password) => {
            // setUserToken('dummy-token')
            // setIsLoading(false)
            let userToken
            userToken = null;
            if ( userName == 'user' && password == '1234') {
                try {
                    userToken = 'token-fake'
                    await AsyncStorage.setItem('userToken', userToken)
                } catch (error) {
                    console.log(error)
                    alert('token invalid ')
                }
            }
            dispatch({ type: 'LOGIN', id: userName, token: userToken })
        },
        signOut: async () => {
            // setUserToken(null)
            // setIsLoading(false)
            try {
                await AsyncStorage.removeItem('userToken')
            } catch (error) {
                console.log(error)
                alert('token invalid ')
            }
            dispatch({type: 'LOGOUT'})
        },
        signUp: () => {
            // setUserToken('dummy-token')
            // setIsLoading(false)
        }
    }), [])

    useEffect(() => {
        setTimeout( async () => {
            // setIsLoading(false)
            let userToken
            userToken = null
            
            try {
                userToken = await AsyncStorage.getItem('userToken')
            } catch (error) {
                console.log(error)
                alert('token invalid ')
            }
            
            dispatch({type: 'RETRIEVE_TOKEN', token: userToken})
        }, 2000);
    }, [])
     
    if (loginState.isLoading) {
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color='#1e90ff'/>
            </View>
        )
    }
    
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                
                {loginState.userToken !== null ? <AppStack /> : <AuthStack />}
        
            </NavigationContainer>
        </AuthContext.Provider>

    )
}

export default Router
