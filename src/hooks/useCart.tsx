import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

import { Product, Stock } from '../types';

import { Alert } from 'react-native';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => Promise<void>;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    async function loadCart() {
      const storagedCart = await AsyncStorage.getItem('@Ton:cart');

      if (storagedCart) {
        setCart(JSON.parse(storagedCart));
      }
    }

    loadCart();
  }, []);

  const addProduct = async (productId: number) => {
    try {

      const { data: {amount: productStock} } = await api.get<Stock>(`/stock/${productId}`);

      const productCart:Product|undefined = cart.find(product => product.id === productId);
      if (productCart) {
        
        if ((productCart.amount + 1) > productStock) {
          Alert.alert('Quantidade solicitada fora de estoque');
          return;
        }

        productCart.amount++;
        setCart([...cart]);
        AsyncStorage.setItem('@Ton:cart',JSON.stringify(cart));

      } else {

        const { data: product } = await api.get<Product>(`/products/${productId}`);

        if (productStock < 1) {
          Alert.alert('Quantidade solicitada fora de estoque');
          return;
        }

        const newCart = [...cart, { ...product, amount: 1 }];
        setCart(newCart);
        AsyncStorage.setItem('@Ton:cart',JSON.stringify(newCart));
      }      

    } catch {
      Alert.alert('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productCart = cart.some(product => product.id === productId);
      
      if (!productCart) {
        Alert.alert('Erro na remoção do produto');
        return;
      }

      const newCart = cart.filter(product => product.id !== productId);

      setCart(newCart);
      AsyncStorage.setItem('@Ton:cart',JSON.stringify(newCart));

    } catch {
      Alert.alert('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {

      if (amount <= 0) {
        return;
      }
      
      const { data: { amount: productStock } } = await api.get<Stock>(`/stock/${String(productId)}`);
      if (amount > productStock) {
        Alert.alert('Quantidade solicitada fora de estoque');
        return;
      }

      const productCart:Product|undefined = cart.find(product => product.id === productId);
      if (!productCart) {
        Alert.alert('Erro na alteração de quantidade do produto');
        return;
      }

      productCart.amount = amount;
      setCart([...cart]);
      AsyncStorage.setItem('@Ton:cart',JSON.stringify(cart));      

    } catch {
      Alert.alert('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
