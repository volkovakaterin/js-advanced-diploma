/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import Character from '../Character';

test('Character', () => {
  class B extends Character {}
  const b = {
    attack: 0, defence: 0, health: 50, level: 2, type: 'generic',
  };
  expect(new B(2)).toEqual(b);
});

test('Character', () => {
  expect(() => {
    new Character(2);
  }).toThrow(Error);
});
