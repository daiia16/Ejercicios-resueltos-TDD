import { sum } from "./stringSum";

describe('String Sum code kata', () => {
  test('should return 0 when num1 and num2 are empty strings', () => {
    //ARRANGE
    const num1 = '';
    const num2 = '';
    const result = 0;
    //ACT
    const sumResult = sum(num1, num2);
    //ASSERT
    expect(sumResult).toBe(result);
  });
  test('should return 0 when num1 and num2 are zero strings', () => {
    //ARRANGE
    const num1 = '0';
    const num2 = '0';
    const result = 0;
    //ACT
    const sumResult = sum(num1, num2);
    //ASSERT
    expect(sumResult).toBe(result);
  });
  test('should return 15 when num1 is 7 and num2 is 8', () => {
    //ARRANGE
    const num1 = '7';
    const num2 = '8';
    const result = 15;
    //ACT
    const sumResult = sum(num1, num2);
    //ASSERT
    expect(sumResult).toBe(result);
  });
  test('should return 50 when num1 is an empty string and num2 is 50', () => {
    //ARRANGE
    const num1 = '';
    const num2 = '50';
    const result = 50;
    //ACT
    const sumResult = sum(num1, num2);
    //ASSERT
    expect(sumResult).toBe(result);
  });
  test('should return 30 when num1 is 30 and num2 is non natural', () => {
    //ARRANGE
    const num1 = '30';
    const num2 = '-50';
    const result = 30;
    //ACT
    const sumResult = sum(num1, num2);
    //ASSERT
    expect(sumResult).toBe(result);
  });
  test('should return correct result with more parameters', () => {
    //ARRANGE
    const num1 = '30';
    const num2 = '-50';
    const num3 = '5';
    const num4 = '11';
    const result = 46;
    //ACT
    const sumResult = sum(num1, num2, num3, num4);
    //ASSERT
    expect(sumResult).toBe(result);
  });
});
