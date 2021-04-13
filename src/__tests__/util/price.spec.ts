import { PriceFormater, PriceDivider } from '../../util/price';

test('teste para formatação de preços inteiros', () => {
  const { priceFormated } = PriceFormater(7);
  expect(priceFormated).toBe('7,00');
});

test('teste para formatação de preços com centavos', () => {
  const { priceFormated } = PriceFormater(12.56);
  expect(priceFormated).toBe('12,56');
});

test('teste para parcelamento', () => {
  const { priceInteger, priceDecimal } = PriceDivider(202.80);
  expect(priceInteger).toBe('16');
  expect(priceDecimal).toBe('90');
});