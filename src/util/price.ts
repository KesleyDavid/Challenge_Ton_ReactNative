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

export function PriceFormater(price: number) {
  try {
    const priceFormatedTemp = price.toFixed(2);
    const priceFormated = priceFormatedTemp.replace('.',',');

    return {
      priceFormated
    }
  } catch (error) {
    return {
      priceFormated: 'X',
    };
  }
}