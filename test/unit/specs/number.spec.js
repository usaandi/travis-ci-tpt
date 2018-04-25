function double(num) {
  if (isNaN(num)) {
    throw new Error('input need to be number!');
  }
  return num * 2;
}

// write 2 test cases that are testing success (tobe)
// and one that is testing not (.not.toBE)
describe('double', () => {
  it('write 1 test cases that are testing success (.tobe) 2*2=4', () => {
    const t1 = double(2);
    expect(t1).toBe(4);
  });
  it('write 2 test cases that are testing success (.tobe) 2*5=10', () => {
    expect(double(5)).toBe(10);
  });
  it('and one that is testing not (.not.toBE)', () => {
    const t1 = double(5);
    expect(t1).not.toBe('9');
  });
  it('double "kala" is not number and throws exception', () => {
    expect(() => {
      double('kala');
    }).toThrow();
  });
});
