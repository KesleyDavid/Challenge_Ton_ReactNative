import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import { useCart } from '../../hooks/useCart';
import { useCategory } from '../../hooks/useCategory';

import api from '../../services/api';

import { Product } from '../../types';

import ProductItem from '../ProductItem';

import * as S from './styled';

interface CartItemsAmount {
  [key: number]: number;
}

export default function ProductList() {
  const { isSelectedMega } = useCategory();
  const { cart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);


  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;
    return sumAmount
  }, {} as CartItemsAmount)

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
        {products.map( product => <ProductItem key={product.id} product={product} cart={cartItemsAmount[product.id] || 0} />)}
      </S.Container>
    </ScrollView>
  )
}
