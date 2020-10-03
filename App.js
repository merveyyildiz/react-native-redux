
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BooksScreen from './src/BooksScreen';
import CartScreen from './src/CartScreen';
import ShoppingCartIcons from './src/ShoppingCartIcon';
import { Provider } from 'react-redux';
import store from './src/redux/store';
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Books"
            component={BooksScreen}
            options={{
              headerRight: (props) => <ShoppingCartIcons {...props} />,
            }}
          />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
