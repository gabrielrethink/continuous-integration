import { describe, expect, it } from 'vitest';
import { isAtopic, isRafa } from './index';
describe('is owner', () => {
  it('Is Atopic True', () => {
    expect(isAtopic('atopic')).toBe(true);
  });
  it('Is Atopic True', () => {
    expect(isAtopic('AtoPiC')).toBe(true);
  });
  it('Is Rafa to be False', () => {
    expect(isAtopic('rafa')).toBe(false);
  });
});

describe('is owner brother?', () => {
  it('Is Atopic True', () => {
    expect(isRafa('rafa')).toBe(true);
  });
  it('Is Atopic True', () => {
    expect(isRafa('RaFa')).toBe(true);
  });
  it('Is Rafa to be False', () => {
    expect(isRafa('Atopic')).toBe(false);
  });
});
