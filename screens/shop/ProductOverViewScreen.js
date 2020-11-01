import React from 'react';
import { FlatList } from 'react-native';


import {useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem'

const ProductOverViewScreen  = props =>{
    const products = useSelector(state=>state.products.availableProducts);
    return (
        <FlatList 
            data={products} keyExtractor={item => item.id } 
            renderItem={
                itemData => <ProductItem 
                        image={itemData.item.imageUrl} 
                        price={itemData.item.price} 
                        title={itemData.item.title}
                        onViewDetail={()=>{
                            props.navigation.navigate('ProductDetail')
                        }} 
                        onAddToCart={()=>{}} 
                        />
            } 
        /> 
    );
};

//screen only navigation option

ProductOverViewScreen.navigationOptions = {
    headerTitle: 'All Products'
}


export default ProductOverViewScreen;

