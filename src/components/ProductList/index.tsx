import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

import { Product } from '../../types';

import ProductItem from '../ProductItem';

import * as S from './styled';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  console.log('List')
  console.log(products)
  return (
    <ScrollView>
      <S.Container>
        {products.map( product => <ProductItem key={product.id} product={product} />)}
      </S.Container>
    </ScrollView>
  )
}
