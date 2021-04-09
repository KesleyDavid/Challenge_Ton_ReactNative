import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logo from '../../images/logo-bc.png';

import * as S from './styled';

interface HeaderProps {
  showBack?: boolean;
}

export default function Header({ showBack = true }: HeaderProps) {

  const navigation = useNavigation();

  function handleGoBackToMain() {
    navigation.navigate('Main');
  }

  function handleGoCart() {
    navigation.navigate('Cart');
  }

  return (
    <S.Container>
      { showBack ? (
        <>
          <BorderlessButton onPress={handleGoBackToMain}> 
            <Feather name="arrow-left" size={24} color="white" />
          </BorderlessButton>
          <S.Logo source={logo} /> 
        </>
      ) : (
        <S.Logo source={logo} /> 
      )}
            
      <BorderlessButton onPress={handleGoCart}> 
        <Feather name="shopping-cart" size={24} color="white" />
      </BorderlessButton>

    </S.Container>
  )
}
