/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */


import themes from './themes';
import Team from './Team';
import { generateTeam } from './generators';
import PositionedCharacter from './PositionedCharacter';
import cursors from './cursors';
import GameState from './GameState';
import { validCellBowman } from './ValidCells';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.teamJoint = [];
    this.cells = document.getElementsByClassName('cell');
    this.validCells = [];
    this.validCellMagician = (n) => {
      for (let i = 1; i <= 4; i++) {
        this.validCells.push(n + i);
        this.borders.forEach((index) => {
          if ((n + i) === index) {
            i = 5;
          }
        });
      }
      for (let i = 9; i <= 36; i += 9) {
        this.validCells.push(n + i);
        this.borders.forEach((index) => {
          if ((n + i) === index) {
            i = 37;
          }
        });
      }
      for (let i = 8; i <= 32; i += 8) {
        this.validCells.push(n + i);
        this.borders.forEach((index) => {
          if ((n + i) === index) {
            i = 33;
          }
        });
      }
      for (let i = 8; i <= 32; i += 8) {
        this.validCells.push(n - i);
        this.borders.forEach((index) => {
          if ((n + i) === index) {
            i = 33;
          }
        });
      }
      for (let i = 7; i <= 28; i += 7) {
        this.validCells.push(n - i);
        this.borders.forEach((index) => {
          if ((n + i) === index) {
            i = 29;
          }
        });
      }
      for (let i = 7; i <= 28; i += 7) {
        this.validCells.push(n + i);
        this.borders.forEach((index) => {
          if ((n + i) === index) {
            i = 29;
          }
        });
      }
      for (let i = 1; i <= 4; i++) {
        this.validCells.push(n - i);
        this.borders.forEach((index) => {
          if ((n + i) === index) {
            i = 5;
          }
        });
      }
      for (let i = 9; i <= 36; i += 9) {
        this.validCells.push(n - i);
        this.borders.forEach((index) => {
          if ((n + i) === index) {
            i = 37;
          }
        });
      }
    };


    this.validCellSwordsman = (n) => {
      this.validCells.push(n + 1);
      this.validCells.push(n + 7);
      this.validCells.push(n + 8);
      this.validCells.push(n + 9);
      this.validCells.push(n - 1);
      this.validCells.push(n - 7);
      this.validCells.push(n - 8);
      this.validCells.push(n - 9);
    };
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
    const position = (team, numberTeam) => {
      team.forEach((character) => {
        let posit = numberTeam[Math.floor(Math.random() * numberTeam.length)];
        const index = team.indexOf(character);
        for (let i = 0; i < index; i++) {
          if (posit === team[i].position) {
            posit = numberTeam[Math.floor(Math.random() * numberTeam.length)];
          }
        }
        const positionedCharacter = new PositionedCharacter(character, posit);
        team.splice(index, 1, positionedCharacter);
        this.teamJoint.push(positionedCharacter);
      });
    };
    position(playerTeam, numberP);
    position(npcTeam, numberN);
    this.gamePlay.redrawPositions(this.teamJoint);

    // TODO: add event listeners to gamePlay events
    const enterListener = () => {
      this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    };
    enterListener();
    const leaveListener = () => {
      this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    };
    leaveListener();
    const clickListener = () => {
      this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    };
    clickListener();

    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
    const array = Array.prototype.slice.call(this.cells);
    const numberSelected = array.indexOf(document.querySelector('.selected'));
    if (this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('swordsman') || this.cells[index].firstChild.classList.contains('bowman') || this.cells[index].firstChild.classList.contains('magician'))) {
      if (numberSelected > -1) {
        this.gamePlay.deselectCell(numberSelected);
      } this.gamePlay.selectCell(index);
    } else if (document.querySelector('.selected') === null && this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('daemon') || this.cells[index].firstChild.classList.contains('undead') || this.cells[index].firstChild.classList.contains('vampire'))) {
      this.gamePlay.setCursor(cursors.notallowed);
      this.gamePlay.constructor.showError('Невозможно выбрать персонажа');
    }
    if (this.cells[index].classList.contains('selected-green')) {
      this.teamJoint.forEach((character) => {
        if (numberSelected === character.position) {
          character.position = index;
        }
      });
      this.gamePlay.redrawPositions(this.teamJoint);
      this.cells.forEach((cell) => {
        cell.classList.remove('selected', 'selected-green', 'selected-yellow');
      });
      GameState.from('computer');
    }
    if (this.cells[index].classList.contains('selected-red')) {
      let targetDefence;
      let attackerAttack;
      let target;
      this.teamJoint.forEach((character) => {
        if (index === character.position) {
          target = this.teamJoint.indexOf(character);
          targetDefence = character.character.defence;
        }
      });
      this.teamJoint.forEach((character) => {
        if (numberSelected === character.position) {
          attackerAttack = character.character.attack;
        }
      });
      const damage = Math.max(attackerAttack - targetDefence, attackerAttack * 0.1);
      this.cells.forEach((cell) => {
        cell.classList.remove('selected', 'selected-red', 'selected-yellow');
      });
      this.gamePlay.showDamage(index, damage);
      this.teamJoint[target].character.health -= damage;
      this.gamePlay.redrawPositions(this.teamJoint);
      GameState.from('computer');
    }
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    let currentChar;
    let message;
    if (this.cells[index].firstChild) {
      this.teamJoint.forEach((character) => {
        if (index === character.position) {
          currentChar = character;
          message = `🎖 ${currentChar.character.level} ⚔ ${currentChar.character.attack} 🛡 ${currentChar.character.defence} ❤ ${currentChar.character.health}`;
        }
      });
      this.gamePlay.showCellTooltip(message, index);
    }
    if (document.querySelector('.selected') != null) {
      const array = Array.prototype.slice.call(this.cells);
      const numberSelected = array.indexOf(document.querySelector('.selected'));
      if (document.querySelector('.selected').firstChild.classList.contains('swordsman')) {
        this.validCellSwordsman(numberSelected);
      } if (document.querySelector('.selected').firstChild.classList.contains('bowman')) {
        this.validCells = validCellBowman(numberSelected);
      } if (document.querySelector('.selected').firstChild.classList.contains('magician')) {
        this.validCellMagician(numberSelected);
      }
    } if (this.validCells.includes(index)) {
      if (this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('swordsman') || this.cells[index].firstChild.classList.contains('bowman') || this.cells[index].firstChild.classList.contains('magician'))) {
        this.gamePlay.setCursor(cursors.pointer);
      } if (this.cells[index].firstChild === null) {
        this.cells[index].classList.add('selected', 'selected-green');
        this.gamePlay.setCursor(cursors.pointer);
      } if (this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('daemon') || this.cells[index].firstChild.classList.contains('undead') || this.cells[index].firstChild.classList.contains('vampire'))) {
        this.cells[index].classList.add('selected', 'selected-red');
        this.gamePlay.setCursor(cursors.crosshair);
      }
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.validCells = [];
    this.gamePlay.hideCellTooltip(index);
    if (this.cells[index].firstChild === null) {
      this.cells[index].classList.remove('selected', 'selected-green');
    } if (this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('daemon') || this.cells[index].firstChild.classList.contains('undead') || this.cells[index].firstChild.classList.contains('vampire'))) {
      this.cells[index].classList.remove('selected', 'selected-red');
      this.gamePlay.setCursor(cursors.auto);
    }
  }
}
