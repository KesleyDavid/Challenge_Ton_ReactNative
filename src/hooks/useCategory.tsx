import React, { createContext, ReactNode, useContext, useState } from 'react';

interface CategoryProviderProps {
  children: ReactNode;
}

interface CategoryContextData {
  isSelectedMega: boolean;
  setSelectedMega: (isMega: boolean) => void;
}

const CategoryContext = createContext<CategoryContextData>({} as CategoryContextData);

export function CategoryProvider({ children }: CategoryProviderProps) {
  const [isSelectedMega, setSelectedMega] = useState(true);

  return (
    <CategoryContext.Provider
      value={{ isSelectedMega, setSelectedMega }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory(): CategoryContextData {
  const context = useContext(CategoryContext);

  return context;
}
