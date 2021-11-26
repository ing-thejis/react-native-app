import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signup from '../screens/Signup'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
            <Stack.Screen name="Signup" component={Signup} options={{title: 'Signup'}} />
        </Stack.Navigator>
    )
}

export default AppStack