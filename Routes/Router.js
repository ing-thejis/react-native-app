import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppStack from './AppStack'
import AuthStack from './AuthStack'

const Router = () => {

    const [isSignedIn, setIsSignedIn] = useState(false)
    
    return (
    <NavigationContainer>
        
        {isSignedIn ? <AppStack /> : <AuthStack />}
 
    </NavigationContainer>
    )
}

export default Router
