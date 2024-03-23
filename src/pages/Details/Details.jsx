import React from 'react'
import { Image, SafeAreaView, Text, View } from "react-native"
import styles from './Details.style';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';

const Details = ({route}) => {

    const {id} = route.params; 

    const {loading, error, data} = useFetch(`${Config.API_URL}/products/${id}`);

    if (loading) {
        return <Loading />
    }

    if (error ) {
        return <Error />
    }

    return (
        <SafeAreaView>

            <View style={styles.container}>
                <Image style ={styles.image} source={{uri: data.image}} />
                
                <View style={styles.body_container}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.desc}>{data.description}</Text>
                    <Text style={styles.price}>{data.price} TL</Text>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Details;