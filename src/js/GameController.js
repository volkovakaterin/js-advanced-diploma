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
import { validOneCell, validTwoCell, validFourCell } from './ValidCells';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.teamJoint = [];
    this.cells = document.getElementsByClassName('cell');
    this.validCellsAttack = [];
    this.validCells = [];
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
    const numberSelected = array.indexOf(document.querySelector('.selected-yellow'));
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
      this.computerMove();
      // console.log(this.teamJoint);
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
    if (document.querySelector('.selected-yellow') != null) {
      const array = Array.prototype.slice.call(this.cells);
      const numberSelected = array.indexOf(document.querySelector('.selected'));
      if (this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('swordsman') || this.cells[index].firstChild.classList.contains('bowman') || this.cells[index].firstChild.classList.contains('magician'))) {
        this.gamePlay.setCursor(cursors.pointer);
      } else if (this.cells[index].firstChild === null) {
        if (document.querySelector('.selected-yellow').firstChild.classList.contains('swordsman')) {
          this.validCells = validFourCell(numberSelected);
        } if (document.querySelector('.selected-yellow').firstChild.classList.contains('bowman')) {
          this.validCells = validTwoCell(numberSelected);
        } if (document.querySelector('.selected-yellow').firstChild.classList.contains('magician')) {
          this.validCells = validOneCell(numberSelected);
        } if (this.validCells.includes(index)) {
          this.cells[index].classList.add('selected', 'selected-green');
          this.gamePlay.setCursor(cursors.pointer);
        }
      } else if (this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('daemon') || this.cells[index].firstChild.classList.contains('undead') || this.cells[index].firstChild.classList.contains('vampire'))) {
        if (document.querySelector('.selected-yellow').firstChild.classList.contains('swordsman')) {
          this.validCells = validOneCell(numberSelected);
        } if (document.querySelector('.selected-yellow').firstChild.classList.contains('bowman')) {
          this.validCells = validTwoCell(numberSelected);
        } if (document.querySelector('.selected-yellow').firstChild.classList.contains('magician')) {
          this.validCells = validFourCell(numberSelected);
        } if (this.validCells.includes(index)) {
          this.cells[index].classList.add('selected', 'selected-red');
          this.gamePlay.setCursor(cursors.crosshair);
        }
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

  computerMove() {
    const validCellsAttack = [];
    let cellAttack;
    const characters = [this.teamJoint[2], this.teamJoint[3]];
    const character = characters[Math.floor(Math.random() * characters.length)];
    if (character.character.type === 'daemon') {
      this.validCells = validFourCell(character.position);
    } if (character.character.type === 'vampire') {
      this.validCells = validTwoCell(character.position);
    } if (character.character.type === 'undead') {
      this.validCells = validOneCell(character.position);
    } console.log(this.validCells);
    this.validCells.forEach((index) => {
      if (this.cells[index].firstChild != null && (this.cells[index].firstChild.classList.contains('swordsman') || this.cells[index].firstChild.classList.contains('bowman') || this.cells[index].firstChild.classList.contains('magician'))) {
        // console.log(validCellsAttack);
        validCellsAttack.push(index);
        // console.log(validCellsAttack);
      }
    }); if (validCellsAttack.length > 0) {
      cellAttack = validCellsAttack[Math.floor(Math.random() * validCellsAttack.length)];
      // console.log(cellAttack);
      let targetDefence;
      let attackerAttack;
      let target;
      this.teamJoint.forEach((ch) => {
        if (cellAttack === ch.position) {
          target = this.teamJoint.indexOf(ch);
          // console.log(target);
          targetDefence = ch.character.defence;
        }
      });
      this.teamJoint.forEach((ch) => {
        if (character.position === ch.position) {
          attackerAttack = ch.character.attack;
        }
      });
      const damage = Math.max(attackerAttack - targetDefence, attackerAttack * 0.1);
      this.gamePlay.showDamage(cellAttack, damage);
      // console.log(this.teamJoint[target]);
      // console.log(this.teamJoint[target].character);
      // console.log(this.teamJoint[target].character.health);
      this.teamJoint[target].character.health -= damage;
      // console.log('Привет');
      this.gamePlay.redrawPositions(this.teamJoint);
    }
  }
}
