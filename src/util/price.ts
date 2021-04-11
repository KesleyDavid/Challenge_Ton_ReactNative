export function PriceDivider(price: number) {
  try {
    const splitPrice = price / 12;
    const splitPriceFormated = splitPrice.toFixed(2);
    const [integer,decimal] = splitPriceFormated.split('.');

    return {
      priceInteger: integer,
      priceDecimal: decimal.length === 1 ? `0${decimal}` : decimal
    }
  } catch (error) {
    return {
      priceInteger: 'X',
      priceDecimal: 'X'
    };
  }
}