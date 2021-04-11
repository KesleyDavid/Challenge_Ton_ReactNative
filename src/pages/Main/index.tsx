import React from 'react';


import CategoryTab from '../../components/CategoryTab';
import ProductList from '../../components/ProductList';

import * as S from './styled';

export default function Main() {
  return (
    <S.Container>
      <CategoryTab />
      <ProductList />
    </S.Container>
  );
}

