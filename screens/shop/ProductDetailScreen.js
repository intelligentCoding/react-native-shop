import React from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActioins from '../../store/actions/cart'

const ProductDetailScreen = props =>{
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod=>prod.id === productId))
    const selectedProduct1 = useSelector(state => state)
    const dispatch = useDispatch();
    console.log(selectedProduct1)
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.action}>
            <Button color={Colors.primary} title="Add to Cart" onPress={()=>{
                  dispatch(cartActioins.addToCart(selectedProduct));
            }}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );
}

ProductDetailScreen.navigationOptions = navaData =>{
    return {
        headerTitle: navaData.navigation.getParam('productTitle')
    };
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
     price:{
        // fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20 
     },
     description:{
        // fontFamily: 'open-sans',
         fontSize: 14,
         textAlign: 'center',
         marginHorizontal: 20
     },
     action:{
         marginVertical: 10,
        alignItems: 'center' 
     }
})

export default ProductDetailScreen;