import React from 'react';

import { CategoryProvider } from './src/hooks/useCategory';

import Routes from './src/routes';

export default function App() { 
  return (
    <CategoryProvider>
      <Routes />
    </CategoryProvider>
  )
};
