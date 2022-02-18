import calculate from '../../logic/calculate';

it('Updates state correctly', () => {
  const myInitialObj = {
    total: 0,
    next: null,
    operation: null,
  };
  // eslint-disable-next-line
  expect(calculate(myInitialObj, '4')).toEqual({ 'next': '4', 'total': null });
});
