import operate from '../../logic/operate';

it('Performs mathematical operations', () => {
  expect(operate(3, 2, '-')).toEqual('1');
  expect(operate(8, 4, '%')).toEqual('0');
  expect(operate(1, 5, '-')).toEqual('-4');
  expect(operate(11, 9, 'x')).toEqual('99');
  expect(operate(5, 0, '÷')).toEqual('Can\'t divide by 0.');
  expect(operate(8, 1, '÷')).toEqual('8');
  expect(operate(5, 0, '%')).toEqual('Can\'t find modulo as cannot be divided by 0.');
});