import React, { useState } from 'react';
import {createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import cartReducer from './store/reducers/cart'
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
})

const store = createStore(rootReducer);

//get the fonts
// const fetchFonts = async () =>{
//   return await Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   })
// }

export default function App() {

  // const [fontLoaded, setFontLoaded] = useState(false);
  
  // if(!fontLoaded){
  //   <AppLoading
  //     startAsync={fetchFonts}
  //     onFinish={()=>{
  //       setFontLoaded(true);
  //     }}
  //   />
  // }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}