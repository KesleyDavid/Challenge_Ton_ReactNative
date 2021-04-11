import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useCategory } from '../../hooks/useCategory';
import api from '../../services/api';

import { Product } from '../../types';

import ProductItem from '../ProductItem';

import * as S from './styled';

export default function ProductList() {
  const { isSelectedMega } = useCategory();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>(`/products?category=${isSelectedMega ? 2 : 1}`);
      setProducts(response.data);
    }

    loadProducts();
  }, [isSelectedMega]);

  return (
    <ScrollView>
      <S.Container>
        {products.map( product => <ProductItem key={product.id} product={product} />)}
      </S.Container>
    </ScrollView>
  )
}
