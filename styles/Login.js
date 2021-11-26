import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e90ff',
        borderWidth: 2,
        borderColor: '#f00'
    },
    welcome: {
        fontSize:30,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        fontFamily: 'Roboto'
    },
    input: {
        width: '90%', 
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    btnUser:{
        backgroundColor: '#ffd700',
        padding: 15,
        width: '45%'
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center',  
    }
})