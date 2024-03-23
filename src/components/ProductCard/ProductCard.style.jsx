import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container:{
        borderWidth: 1,
        backgroundColor: '#e0e0ee ',
        borderColor: '#bdbdbb', 
        margin: 10,
        flexDirection: 'row', 
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: '#FFFFFF',
    },
    body_container: {
        flex: 1,
        padding: 6,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16 
    },
    price:{
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 16  
    }

});