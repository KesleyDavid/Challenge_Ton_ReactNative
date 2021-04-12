import React from 'react';

import { Product } from '../../types';

import { useCart } from '../../hooks/useCart';
import { PriceDivider } from '../../util/price';

import { MaterialIcons } from '@expo/vector-icons'; 
import * as S from './styled';

interface ProductItemProps {
  product: Product;
  cart: number;
}

export default function ProductItem({ product, cart }: ProductItemProps) {
  const { addProduct, removeProduct } = useCart();
  const { priceInteger, priceDecimal } = PriceDivider(product.price);

  function handleAddProduct() {
    addProduct(product.id);
  }

  function handleRemoveProduct() {
    removeProduct(product.id);
  }

  return (
    <S.Container>
      <S.Banner>
        <S.ImageProduct source={{ uri: product.image }} />
        <S.Features>
          {product.feature1 && <S.Feature1 source={{ uri: product.feature1 }}  />}
          {product.feature2 && <S.Feature2 source={{ uri: product.feature2 }}  />}
        </S.Features>
      </S.Banner>
      <S.Content>
        <S.Informations>
          <S.Description>
            <S.Title>{product.title}</S.Title>
            <S.Label>De <S.LabelBold>R$ {product.priceOld}</S.LabelBold></S.Label>
            <S.Label>Por <S.LabelBold>R$ {product.price}</S.LabelBold> à vista</S.Label>
            <S.Label>Ou 12x sem juros de</S.Label>
          </S.Description>
          <S.DividedPrice>
            <S.LabelPrice>R$</S.LabelPrice>
            <S.TitlePrice>{priceInteger}</S.TitlePrice>
            <S.LabelPriceCents>,{priceDecimal}</S.LabelPriceCents>
          </S.DividedPrice>
        </S.Informations>
        <S.Button cartAmount={cart > 0} onPress={() => handleAddProduct()}>
          {cart > 0 && (
            <S.CartAmount>
              <MaterialIcons name="add-shopping-cart" size={24} color="white" />
              <S.CartText>{cart}</S.CartText>
            </S.CartAmount>
          )}
          <S.ButtonText>{cart > 0 ? 'Adicionar' : 'Pedir'} {product.title} </S.ButtonText>
        </S.Button>
        {cart > 0 && (
          <S.ButtonRemove onPress={() => handleRemoveProduct()}>
            <S.ButtonText>Remover {product.title} </S.ButtonText>
          </S.ButtonRemove>
        )}
      </S.Content>
    </S.Container>
  )
}
