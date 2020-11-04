import React from 'react';
import { FlatList, Platform } from 'react-native';

import {useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem'
import * as cartActioins from '../../store/actions/cart'
import {HeaderButtons , Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
const ProductOverViewScreen  = props =>{
    const products = useSelector(state=>state.products.availableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList 
            data={products} keyExtractor={item => item.id } 
            renderItem={
                itemData => 
                <ProductItem 
                    image={itemData.item.imageUrl} 
                    price={itemData.item.price} 
                    title={itemData.item.title}
                    onViewDetail={()=>{
                        props.navigation.navigate('ProductDetail', 
                        {
                            productId: itemData.item.id,
                            productTitle: itemData.item.title
                        })
                    }} 
                    onAddToCart={()=>{
                        console.log("object")
                        dispatch(cartActioins.addToCart(itemData.item));
                    }} 
                />
            } 
        /> 
    );
};

//screen only navigation option

ProductOverViewScreen.navigationOptions = navData => {
    return {

    headerTitle: 'All Products',
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Cart' 
            iconName={
                Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
            }
            onPress={()=>{
                console.log("hello")
                navData.navigation.navigate('Cart');
            }}
        />
    </HeaderButtons>
    }
}


export default ProductOverViewScreen;

