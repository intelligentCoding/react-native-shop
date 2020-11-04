import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen';

const ProductNavigator = createStackNavigator({
    ProductsOverView: ProductOverViewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS ==='android' ? Colors.primary : ''
        },
        headerTitleStyle:{
            // fontFamily: 'open-sans-bold',
        },
        //for IOS
        headerBackTitleStyle:{
            // fontFamily: 'open-sans',
        },
        headerTintColor: Platform.OS ==='android' ? 'white' :  Colors.primary
    }
})

export default createAppContainer(ProductNavigator);