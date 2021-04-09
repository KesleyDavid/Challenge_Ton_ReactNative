import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';

import Main from  './pages/Main';
import Cart from  './pages/Cart';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: '#f2f3f5'
        }
      }}>
        <Screen
          name="Main"
          component={Main}
          options={{
            header: () => <Header showBack={false} />
          }}
        />
        <Screen
          name="Cart"
          component={Cart}
          options={{
            header: () => <Header showBack={true} />
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}