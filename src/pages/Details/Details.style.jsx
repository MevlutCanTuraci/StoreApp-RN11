import React from 'react'
import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window')

export default styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    body_container: {
        padding: 10 
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
        padding: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    desc: {
        fontStyle: 'italic',
        marginVertical: 5
    },
    price: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 22,
        textAlign: 'right'
    }
});