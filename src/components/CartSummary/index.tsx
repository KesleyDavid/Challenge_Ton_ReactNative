import React from 'react';

import { useCart } from '../../hooks/useCart';
import { PriceDivider, PriceFormater } from '../../util/price';

import * as S from './styled';

export default function CartSummary() {
  const { cart } = useCart();

  const total =
  cart.reduce((sumTotal, product) => {
    sumTotal += product.amount * product.price
    return sumTotal;
  }, 0);

  const { priceFormated } = PriceFormater(total);
  const { priceInteger, priceDecimal } = PriceDivider(total);

  return (
    <S.Container>
      <S.Text>Total:</S.Text>
      <S.Value>R$ {priceFormated}</S.Value>
      <S.Text>ou 12x de <S.Value>R$ {priceInteger},{priceDecimal}</S.Value></S.Text>
      
    </S.Container>
  );
}

