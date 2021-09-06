/* eslint-disable linebreak-style */
import GameStateService from '../GameStateService';
import GamePlay from '../GamePlay';
import GameController from '../GameController';
import PositionedCharacter from '../PositionedCharacter';
import { Bowman, Undead } from '../Character';

jest.mock('../GameState');

describe('load', () => {
  const bowmanOne = new PositionedCharacter(new Bowman(1), 16);
  const bowmanTwo = new PositionedCharacter(new Bowman(1), 41);
  const undeadOne = new PositionedCharacter(new Undead(1), 22);
  const undeadTwo = new PositionedCharacter(new Undead(1), 38);
  const teamJoint = [undeadOne, undeadTwo, bowmanOne, bowmanTwo];
  document.body.innerHTML = '<div id="game-container"></div>';
  const gamePlay = new GamePlay();
  gamePlay.bindToDOM(document.querySelector('#game-container'));
  const stateService = new GameStateService(localStorage);
  const gameCtrl = new GameController(gamePlay, stateService);
  gameCtrl.init();
  gamePlay.redrawPositions(teamJoint);
  gameCtrl.saveGame();
  test('load', async () => {
    expect.assertions(1);
    try {
      await stateService.load();
    } catch (e) {
      expect(e).toEqual(new Error('Invalid state'));
    }
  });
});
