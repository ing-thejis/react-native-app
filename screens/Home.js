import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import { styles } from '../styles/Home'

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
            <MapView style={styles.map}/>
        </View>
    )
}

export default Home