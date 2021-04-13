import React from 'react';

import { Product } from '../../types';

import { useCart } from '../../hooks/useCart';
import { PriceFormater } from '../../util/price';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import * as S from './styled';

interface CartItemProps {
  product: Product;
  cart: number;
}

export default function CartItem({ product, cart }: CartItemProps) {
  const { updateProductAmount, removeProduct } = useCart();
  
  const { priceFormated:priceSubTotal } = PriceFormater(product.price * product.amount);
  const { priceFormated:priceItem } = PriceFormater(product.price);

  function handleProductIncrement() {
    updateProductAmount({productId: product.id, amount: product.amount + 1});
  }

  function handleProductDecrement() {
    if (product.amount !== 1) {
      updateProductAmount({productId: product.id, amount: product.amount - 1});
    }
  }

  function handleRemoveProduct() {
    removeProduct(product.id);
  }

  return (
    <S.Container>
      <S.Content>
        <S.Informations>
          <S.Image>
            <S.ImageProduct source={{ uri: product.image }} />
          </S.Image>
          <S.Description>
            <S.Title>{product.title}</S.Title>
            <S.Label><S.LabelBold>{product.amount}</S.LabelBold> pç x <S.LabelBold>R$ {priceItem}</S.LabelBold></S.Label>
            <S.Label>Total: <S.LabelBold>R$ {priceSubTotal}</S.LabelBold></S.Label>
            <S.Actions>
              <S.Button cartAmount={cart > 0} onPress={() => handleProductIncrement()}>
                <MaterialIcons name="add-shopping-cart" size={24} color="white" />
              </S.Button>
              <S.ButtonRemove disabled={product.amount === 1} onPress={() => handleProductDecrement()}>
                <MaterialCommunityIcons name="cart-minus" size={24} color="white" />
              </S.ButtonRemove>
              <S.ButtonRemove onPress={() => handleRemoveProduct()}>
                <MaterialIcons name="highlight-remove" size={24} color="white" />
              </S.ButtonRemove>
            </S.Actions>
          </S.Description>
        </S.Informations>
      </S.Content>
    </S.Container>
  )
}
