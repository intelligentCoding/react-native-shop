import {createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import ProductOverViewScreen from '../screens/shop/ProductOverViewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import CartScreen from '../screens/shop/CartScreen';
import ordersScreen from '../screens/shop/OrdersScreen';

const defaultNavOptions = {
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
const ProductNavigator = createStackNavigator({
    ProductsOverView: ProductOverViewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
},{
    defaultNavigationOptions:defaultNavOptions
})

//create navigator for orders

const OrdersNavigator = createStackNavigator({
    Orders: ordersScreen,
},{
    defaultNavigationOptions:defaultNavOptions
});


const ShopNavigator = createDrawerNavigator({
    Products: ProductNavigator,
    Orders: OrdersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
})
export default createAppContainer(ShopNavigator);