import React from 'react';

import { Product } from '../../types';

import { PriceDivider } from '../../util/price';

import * as S from './styled';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  
  const { priceInteger, priceDecimal } = PriceDivider(product.price);
  
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
        <S.Button>
          <S.ButtonText>Pedir {product.title} </S.ButtonText>
        </S.Button>
      </S.Content>
    </S.Container>
  )
}
