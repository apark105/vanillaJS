import { sum, mul, sub, div } from '../src/sum';

test('Adding 1 + 2 equals 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('Multiplying 1 * 1 equals 1', () => {
  expect(mul(1, 1)).toBe(1);
});
test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0);
});
test('Dividing 1 / 1 equals 1', () => {
  expect(div(1, 1)).toBe(1);
});
