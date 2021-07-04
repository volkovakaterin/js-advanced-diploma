/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */


import themes from './themes';
import Team from './Team';
import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import GamePlay from './GamePlay';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);
    const playerTeam = generateTeam(new Team().player, 1, 2);
    const npcTeam = generateTeam(new Team().computer, 1, 2);
    function numberPlayer(n) {
      const number = [];
      for (let i = 0; i < n; i++) {
        const a = n * i;
        number.push(a);
        number.push(a + 1);
      }
      return number;
    }
    function numberNpc(n) {
      const number = [];
      for (let i = 1; i <= n; i++) {
        const a = n * i - 2;
        number.push(a);
        number.push(a + 1);
      }
      return number;
    }
    const numberP = numberPlayer(8);
    const numberN = numberNpc(8);
    function position(team, numberTeam) {
      team.forEach((character) => {
        let position = numberTeam[Math.floor(Math.random() * numberTeam.length)];
        const index = team.indexOf(character);
        for (let i = 0; i < index; i++) {
          if (position === team[i].position) {
            position = numberTeam[Math.floor(Math.random() * numberTeam.length)];
          }
        }
        const positionedCharacter = new PositionedCharacter(character, position);
        team.splice(index, 1, positionedCharacter);
        GameController.gamePlay.redrawPositions(positionedCharacter);
      });
    }
    position(playerTeam, numberP);
    position(npcTeam, numberN);


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
