import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { useCategory } from '../../hooks/useCategory';
import { Product } from '../../types';

import CategoryTab from '../../components/CategoryTab';

import * as S from './styled';

export default function Main() {
  const { isSelectedMega } = useCategory();

  const [products, setProducts] = useState<Product[]>([]);

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

