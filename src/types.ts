export interface Product {
  id: number;
  category: number;
  title: string;
  priceOld: number;
  price: number;
  image: string;
  feature1: string;
  feature2: string|null;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}
