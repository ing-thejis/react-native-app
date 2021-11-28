import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import { styles } from '../styles/Home'
import { Icon } from 'react-native-elements'

import { AuthContext } from '../context/AuthContext'

const logoutIcon = <Icon type="font-awesome" name="sign-out" size={20} color="#fff"/>

const Home = () => {

    const {signOut} = useContext(AuthContext)
    return (
        
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnLogout} onPress={() => {signOut()}}>
                {logoutIcon}
                <Text style={styles.btnText}>Sing Out</Text>
            </TouchableOpacity>
            <Text>Home</Text>
            <MapView style={styles.map}/>
        </View>
    )
}

export default Home