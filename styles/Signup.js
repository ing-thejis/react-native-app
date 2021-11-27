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
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },
    logo: {
        width: 150,
        height:150,
    },
    welcome: {
        fontSize:32,
        textAlign: 'center',
        paddingTop: 50,
        margin: 10,
        color: '#1e90ff',
        fontFamily: 'Roboto'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: '#8e8e8e',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#1e90ff',
        marginTop: 30
    },
    btnUnselect:{
        flex: 2,
        backgroundColor: '#8e8e8e',
        padding: 15,
        width: '45%',
        borderRadius: 20
    },
    btnSelect: {
        flex: 2,
        backgroundColor: '#ff8d1e',
        padding: 15,
        width: '45%',
        borderRadius: 20
    },

    content: {
        flex: 1,
        padding: 10,
        width: '90%'
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10
    },
    btnSignup: {
        backgroundColor: '#ff8d1e',
        padding: 15,
        marginTop: 10,
        borderRadius: 10
    },    
    btnText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',  
    }
})