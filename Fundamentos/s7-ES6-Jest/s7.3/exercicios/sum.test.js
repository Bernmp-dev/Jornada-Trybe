const sum = require('./sum');

describe('Testa funcoes de soma e Error', () => {

it('soma de 4 e 5 = 9', () => {
  expect(sum(4, 5)).toBe(9);
});

it('soma de 0 e 0 = 0', () => {
  expect(sum(0, 0)).toBe(0);
});

it('testa se sum() retorna Error', () => {
  expect(() => {sum(4, '5')}).toThrowError();
});

it('testa se a mensagem de erro esta correta', () => {
  expect(() => {sum(4, '5')}).toThrowError('parameters must be numbers');
});
}); 