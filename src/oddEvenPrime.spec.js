import { isPrime } from "./oddEvenPrime";
import { isOdd } from "./oddEvenPrime";
import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('Debe retornar verdadero si es un número primo', () => {
    const numbers = [3, 11, 5, 4];
    const result = numbers.map((num)=>isPrime(num))
    const expectedResult = [true, true, true, false]
    expect(result).toEqual(expectedResult);
  });
  test('Debe retornar verdadero si son números pares', () => {
    const numbers = [2, 8, 22, 5];
    const result = numbers.map((num)=>isOdd(num))
    const expectedResult = [true, true, true, false]
    expect(result).toEqual(expectedResult);
  });
  test('Debe retornar verdadero si son números impares', () => {
    const numbers = [13, 17, 3, 4];
    const result = numbers.map((num)=>isOdd(num))
    const expectedResult = [false, false, false, true]
    expect(result).toEqual(expectedResult);
  });
  test('Juego OddEvenPrime', () => {
    const numbers = [2, 3, 7, 8];
    const result = numbers.map((num)=>game(num))
    const expectedResult = ['Prime', 'Even', 'Even', 'Odd']
    expect(result).toEqual(expectedResult);
  });
});