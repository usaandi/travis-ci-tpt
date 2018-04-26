import random from '../../../src/random';

describe('random', () => {
  it('gives number', () => {
    const number = random();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(6);
  });
});
