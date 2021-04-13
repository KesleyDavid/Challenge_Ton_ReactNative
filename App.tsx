import React from 'react';

import { CartProvider } from './src/hooks/useCart';

import Routes from './src/routes';

export default function App() { 
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  )
};
