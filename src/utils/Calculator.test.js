import { termDepositCalculator } from "../utils/Calculator";

test('calculates term deposit for monthly payment frequency', () => {
  const result = termDepositCalculator(10000, 1.10, 36, 'Monthly');
  expect(result).toBe(10335);
});

test('calculates term deposit for quarterly payment frequency', () => {
  const result = termDepositCalculator(10000, 1.10, 36, 'Quarterly');
  expect(result).toBe(10335);
});

test('calculates term deposit for annually payment frequency', () => {
  const result = termDepositCalculator(10000, 1.10, 36, 'Annually');
  expect(result).toBe(10334);
});

test('calculates term deposit for maturity payment frequency', () => {
  const result = termDepositCalculator(10000, 1.10, 36, 'At Maturity');
  expect(result).toBe(10330);
});