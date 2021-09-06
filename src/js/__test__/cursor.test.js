/* eslint-disable linebreak-style */
import PositionedCharacter from '../PositionedCharacter';
import GamePlay from '../GamePlay';
import GameController from '../GameController';
import GameStateService from '../GameStateService';
import { Bowman, Undead } from '../Character';

describe('cursors', () => {
  const bowmanOne = new PositionedCharacter(new Bowman(1), 27);
  const bowmanTwo = new PositionedCharacter(new Bowman(1), 60);
  const undeadOne = new PositionedCharacter(new Undead(1), 38);
  const undeadTwo = new PositionedCharacter(new Undead(1), 9);
  const teamJoint = [undeadOne, undeadTwo, bowmanOne, bowmanTwo];
  document.body.innerHTML = '<div id="game-container"></div>';
  const gamePlay = new GamePlay();
  gamePlay.bindToDOM(document.querySelector('#game-container'));
  const stateService = new GameStateService(localStorage);
  const gameCtrl = new GameController(gamePlay, stateService);
  gameCtrl.init();
  // gameCtrl.npcTeam.push();
  // gameCtrl.playerTeam.push();
  gamePlay.redrawPositions(teamJoint);
  test('pointer on player character when no one selected', () => {
    gameCtrl.onCellEnter(27);
    expect(gamePlay.boardEl.style.cursor).toBe('pointer');
  });

  test('pointer on other player character and yellow indicator on selecter character', () => {
    gameCtrl.onCellClick(27);
    gameCtrl.onCellEnter(60);
    expect(gamePlay.boardEl.style.cursor).toBe('pointer');
    expect(gamePlay.cells[27].classList.contains('selected-yellow')).toBeTruthy();
  });

  test('pointer and green indicator on possible way to move', () => {
    gameCtrl.onCellClick(27);
    gameCtrl.onCellEnter(35);
    expect(gamePlay.boardEl.style.cursor).toBe('pointer');
    expect(gamePlay.cells[35].classList.contains('selected-green')).toBeTruthy();
  });

  test('crosshair and red indicator on possible way to attack', () => {
    gameCtrl.onCellClick(27);
    gameCtrl.onCellEnter(9);
    expect(gamePlay.boardEl.style.cursor).toBe('crosshair');
    expect(gamePlay.cells[9].classList.contains('selected-red')).toBeTruthy();
  });

  test('not-allowed on not allowed cell', () => {
    gameCtrl.onCellClick(27);
    gameCtrl.onCellEnter(38);
    expect(gamePlay.boardEl.style.cursor).toBe('not-allowed');
  });
});
