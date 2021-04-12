import React from 'react';

import { useCart } from '../../hooks/useCart';

import CartItem from '../CartItem';

import * as S from './styled';

interface CartItemsAmount {
  [key: number]: number;
}

export default function CartList() {
  const { cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount
  }, {} as CartItemsAmount)

  return (
    <S.Container>
      <S.Resume>{cart.length} produtos adicionados</S.Resume>
      {cart.map( product => <CartItem key={product.id} product={product} cart={cartItemsAmount[product.id] || 0} />)}
    </S.Container>
  )
}
