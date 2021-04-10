import React, { useEffect } from 'react';

import api from '../../services/api';
import { useCategory } from '../../hooks/useCategory';

import CategoryTab from '../../components/CategoryTab';

import * as S from './styled';

interface Product {
  id: number;
  category: number;
  title: string;
  priceOld: number;
  price: number;
  image: string;
  feature1: string;
  feature2: string|null;
}


export default function Main() {
  const { isSelectedMega } = useCategory();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>(`/products?category=${isSelectedMega ? 2 : 1}`);
    }

    loadProducts();
  }, [isSelectedMega]);

  return (
    <S.Container>
      <CategoryTab />
    </S.Container>
  );
}

