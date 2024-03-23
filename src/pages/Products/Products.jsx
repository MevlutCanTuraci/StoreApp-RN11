import React from 'react'
import { SafeAreaView, FlatList } from "react-native"
import styles from './Products.style'
import Config from 'react-native-config'
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const Products = ({navigation}) => {
    
    const {loading, error, data} = useFetch(`${Config.API_URL}/products`);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return (
            <Error />
        )
    }
    
    const renderProduct = ({item}) => {
        return(
            <ProductCard 
                product={item } onSelect={() => handleProductSelect(item.id)}
            />
        );
    }

    const handleProductSelect = (id) => {
        navigation.navigate("DetailsPage", {id});
    }

    return (
        <SafeAreaView>
            
            <FlatList
                data={data}
                renderItem={renderProduct} 
            />

        </SafeAreaView>
    )
}

export default Products;