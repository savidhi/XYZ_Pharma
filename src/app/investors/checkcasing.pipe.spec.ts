import { CheckcasingPipe } from './checkcasing.pipe';

describe('CheckcasingPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckcasingPipe();
    expect(pipe).toBeTruthy();
  });

  it('create an instance and check transform', () => {
    const value = "Q3";
    const args = 2;
    const pipe = new CheckcasingPipe();
    expect(pipe.transform(value,args)).toBe((value.toUpperCase())+args);  });
});
