/* eslint-disable linebreak-style */
import GameStateService from '../GameStateService';
import GamePlay from '../GamePlay';

jest.mock('../GameStateService');


test('load', () => {
  expect(GameStateService.load.mockReturnValue(new Error('Invalid state'))).toBe(GamePlay.constructor.showError('Invalid state'));
});
