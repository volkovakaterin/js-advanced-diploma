/* eslint-disable linebreak-style */

import { calcTileType } from '../utils';

test('calcTileType', () => {
  expect(calcTileType(0, 8)).toBe('top-left');
});

test('calcTileType1', () => {
  expect(calcTileType(1, 8)).toBe('top');
});

test('calcTileType2', () => {
  expect(calcTileType(7, 8)).toBe('top-right');
});

test('calcTileType3', () => {
  expect(calcTileType(8, 8)).toBe('left');
});

test('calcTileType4', () => {
  expect(calcTileType(15, 8)).toBe('right');
});
test('calcTileType5', () => {
  expect(calcTileType(56, 8)).toBe('bottom-left');
});
test('calcTileType6', () => {
  expect(calcTileType(57, 8)).toBe('bottom');
});
test('calcTileType7', () => {
  expect(calcTileType(63, 8)).toBe('bottom-right');
});
test('calcTileType8', () => {
  expect(calcTileType(9, 8)).toBe('center');
});
