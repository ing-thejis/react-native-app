import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: 300,
    },
    btnLogout: {
        backgroundColor: '#f00',
    },
    btnText: {
        color:'#fff'
    }
})