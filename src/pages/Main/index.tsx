import React from 'react';

import { CategoryProvider } from '../../hooks/useCategory';

import CategoryTab from '../../components/CategoryTab';
import ProductList from '../../components/ProductList';

import * as S from './styled';

export default function Main() {
  return (
    <CategoryProvider>
      <S.Container>
        <CategoryTab />
        <ProductList />
      </S.Container>
    </CategoryProvider>
  );
}

