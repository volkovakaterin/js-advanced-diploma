/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */


import themes from './themes';
import Team from './Team';
import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    const playerTeams = generateTeam(new Team().player, 1, 2);
    const npcTeams = generateTeam(new Team().computer, 1, 2);
    npcTeams.forEach((item) => {
      playerTeams.push(item);
    });
    // playerTeams.forEach((item) => {

    // new PositionedCharacter(item);
    // });
    const mag = new PositionedCharacter({
      level: 1,
      attack: 10,
      defence: 40,
      health: 100,
      type: 'Magician',
    }, 2);
    this.gamePlay.redrawPositions(mag);
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
