import { game, isPrime } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('should return the same number as a string', () => {
    //ARRANGE
    const numbers = [1, 4, 8];
    const expectedResult = ['1', '4', '8'];
    //ACT
    const result = numbers.map((num) => game(num)); 
    //ASSERT
    expect(result).toEqual(expectedResult);
  });
  test('should return Fizz when is multiple of 3', () => {
    //ARRANGE
    const numbers = [6, 9, 12];
    const expectedResult = ['Fizz', 'Fizz', 'Fizz'];
    //ACT
    const result = numbers.map((num) => game(num));
    //ASSERT
    expect(result).toEqual(expectedResult);
  });
  test('should return Buzz when is multiple of 5', () => {
    //ARRANGE
    const numbers = [10, 20, 50];
    const expectedResult = ['Buzz', 'Buzz', 'Buzz'];
    //ACT
    const result = numbers.map((num) => game(num));
    //ASSERT
    expect(result).toEqual(expectedResult);
  });
  test('should return FizzBuzz when is multiple of 3 and 5', () => {
    //ARRANGE
    const numbers = [15, 30, 45];
    const expectedResult = ['FizzBuzz', 'FizzBuzz', 'FizzBuzz'];
    //ACT
    const result = numbers.map((num) => game(num));
    //ASSERT
    expect(result).toEqual(expectedResult);
  });
  test('should return Whizz when is prime number', () => {
    //ARRANGE
    const numbers = [2, 7];
    const expectedResult = ['Whizz', 'Whizz'];
    //ACT
    const result = numbers.map((num) => game(num));
    //ASSERT
    expect(result).toEqual(expectedResult);
  });
  test('should return FizzWhizz when is multiple of 3 and prime number', () => {
    //ARRANGE
    const number = 3;
    const expectedResult = 'FizzWhizz';
    //ACT
    const result = game(number);
    //ASSERT
    expect(result).toBe(expectedResult);
  });
  test('should return BuzzWhizz when is multiple of 5 and prime number', () => {
    //ARRANGE
    const number = 5;
    const expectedResult = 'BuzzWhizz';
    //ACT
    const result = game(number);
    //ASSERT
    expect(result).toBe(expectedResult);
  });
});

describe('Prime function', () => {
  test('should return true if is prime number', () => {
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].map(number => expect(isPrime(number)).toBeTruthy());
  });
});

