import React from 'react';

import { useCart } from '../../hooks/useCart';

import CartItem from '../CartItem';

import * as S from './styled';

interface CartItemsAmount {
  [key: number]: number;
}

export default function CartList() {
  const { cart } = useCart();
  const cartSize = cart.length;

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount
  }, {} as CartItemsAmount)

  return (
    <S.Container>
      <S.Resume>{cartSize === 0 ? 'Seu carrinho está vazio :(' : `${cartSize} produto${cartSize > 1 ? 's' : ''} adicionado${cartSize > 1 ? 's' : ''}`}</S.Resume>
      {cart.map( product => <CartItem key={product.id} product={product} cart={cartItemsAmount[product.id] || 0} />)}
    </S.Container>
  )
}
