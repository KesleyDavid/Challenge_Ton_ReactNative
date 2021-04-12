import React from 'react'

import { useCart } from '../../hooks/useCart';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logo from '../../images/logo-bc.png';

import * as S from './styled';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface HeaderProps {
  showBack?: boolean;
}

export default function Header({ showBack = true }: HeaderProps) {
  const { cart } = useCart();
  const navigation = useNavigation();

  const cartSize = cart.length;
  const isCartProductExists = cartSize > 0;

  function handleGoBackToMain() {
    navigation.navigate('Main');
  }

  async function handleGoCart() {
    navigation.navigate('Cart');
  }

  return (
    <S.Container>
      { showBack ? (
        <>
          <S.Button onPress={handleGoBackToMain}> 
            <Feather name="arrow-left" size={24} color="white" />
          </S.Button>
          <S.Logo source={logo} /> 
        </>
      ) : (
        <S.Logo source={logo} /> 
      )}
            
      <S.ButtonCart onPress={handleGoCart} isCartProductExists={isCartProductExists}> 
        <Feather name="shopping-cart" size={24} color="white" />
        <S.CartText isCartProductExists={isCartProductExists}>{cartSize}</S.CartText>
      </S.ButtonCart>

    </S.Container>
  )
}
