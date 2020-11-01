import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';


const ProductNavigator = createStackNavigator({
    ProductsOverView: ProductOverViewScreen
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS ==='android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS ==='android' ? 'white' :  Colors.primary
    }
})

export default createAppContainer(ProductNavigator);