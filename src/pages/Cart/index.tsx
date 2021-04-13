import React from 'react';
import { ScrollView } from 'react-native';

import CartList from '../../components/CartList';
import CartSummary from '../../components/CartSummary';

import * as S from './styled';

export default function Cart() {
  return (
    <ScrollView>
      <S.Container>
        <CartList />
        <CartSummary />
      </S.Container>
    </ScrollView>
  );
}

