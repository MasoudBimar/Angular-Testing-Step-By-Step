import { compute } from './compute';

// define suite
// describe('Description', () => {
// });

// define test
// it('Test', () => {

// });

// test execution path

describe('Compute', () => { // fdescribe focused describe
  it('it should return zero if input is negative ', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('it should increment the input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
