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
import {
  Bowman, Daemon, Magician, Swordsman, Undead, Vampire,
} from './Character';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.teamJoint = [];
    this.cells = document.getElementsByClassName('cell');
    this.validCellsAttack = [];
    this.validCells = [];
    this.objectState = {};
    this.npcTeam = [];
    this.playerTeam = [];
    this.numberPlayer = (n) => {
      const number = [];
      for (let i = 0; i < n; i++) {
        const a = n * i;
        number.push(a);
        number.push(a + 1);
      }
      return number;
    };
    this.numberNpc = (n) => {
      const number = [];
      for (let i = 1; i <= n; i++) {
        const a = n * i - 2;
        number.push(a);
        number.push(a + 1);
      }
      return number;
    };
    this.position = (team, numberTeam, level) => {
      console.log(team);
      console.log(this.objectState.cellsPlayer);
      team.forEach((character) => {
        let posit = numberTeam[Math.floor(Math.random() * numberTeam.length)];
        const index = team.indexOf(character);
        for (let i = 0; i < index; i++) {
          if (posit === team[i].position) {
            posit = numberTeam[Math.floor(Math.random() * numberTeam.length)];
          } if (level > 1 && (this.objectState.cellsPlayer.includes(posit) || this.objectState.cellsNpc.includes(posit))) { posit = numberTeam[Math.floor(Math.random() * numberTeam.length)]; }
        }
        const positionedCharacter = new PositionedCharacter(character, posit);
        team.splice(index, 1, positionedCharacter);
        this.teamJoint.push(positionedCharacter);
      });
    };
    this.newLevel = () => {
      const array = [];
      console.log(this.teamJoint);
      this.teamJoint.forEach((character) => {
        array.push(character.character.type);
      });
      if ((array.includes('magician') === false && array.includes('bowman') === false && array.includes('swordsman') === false) || (array.includes('undead') === false && array.includes('vampire') === false && array.includes('daemon') === false)) {
        console.log('новый уровень');
        this.teamJoint.forEach((character) => {
          if (character.character.type === 'magician' || character.character.type === 'bowman' || character.character.type === 'swordsman') {
            this.objectState.countPoints += character.character.health;
          }
        });
        if (this.objectState.level === 4) {
          this.cells.forEach((event) => {
            event.removeEventListener('click', this.onCellClick);
          });
          GameState.from(this.objectState);
        } else {
          this.gamePlay.drawUi(Object.getOwnPropertyNames(themes[this.objectState.level])[0]);
          this.objectState.level += 1;
          this.teamJoint.forEach((character) => {
            character.character.levelUp();
          });
          let maxLevelPlayer;
          let countCharacterPlayer;
          if (this.objectState.level === 2) {
            maxLevelPlayer = 1;
            countCharacterPlayer = 1;
          } else if (this.objectState.level === 3) {
            maxLevelPlayer = 2;
            countCharacterPlayer = 2;
          } else if (this.objectState.level === 4) {
            maxLevelPlayer = 3;
            countCharacterPlayer = 2;
          }
          this.playerTeam = generateTeam(new Team().player, maxLevelPlayer, countCharacterPlayer);
          const numberP = this.numberPlayer(8);
          const numberN = this.numberNpc(8);
          this.position(this.playerTeam, numberP, this.objectState.level);
          let countCharacter = 0;
          this.teamJoint.forEach((character) => {
            if (character.character.type === 'magician' || character.character.type === 'bowman' || character.character.type === 'swordsman') {
              countCharacter += 1;
            }
          });
          this.npcTeam = generateTeam(new Team().computer, this.objectState.level, countCharacter);
          this.position(this.npcTeam, numberN, this.objectState.level);
          this.gamePlay.redrawPositions(this.teamJoint);
        }
      }
    };
  }

  init() {
    this.gamePlay.drawUi(Object.keys(themes[0])[0]);
    this.playerTeam = generateTeam(new Team().player, 1, 2);
    this.npcTeam = generateTeam(new Team().computer, 1, 2);
    const numberP = this.numberPlayer(8);
    const numberN = this.numberNpc(8);
    this.position(this.playerTeam, numberP, this.objectState.level);
    this.position(this.npcTeam, numberN, this.objectState.level);
    this.objectState = {
      move: 'player',
      characters: this.teamJoint,
      level: 1,
      countPoints: 0,
      selectCell: false,
      selectType: false,
      cellsPlayer: [],
      cellsNpc: [],
    };
    GameState.from(this.objectState);
    console.log(this.teamJoint);
    const cellsPlayer = [];
    const cellsNpc = [];
    this.teamJoint.forEach((character) => {
      if (character.character.type === 'swordsman' || character.character.type === 'bowman' || character.character.type === 'magician') { cellsPlayer.push(character.position); } else if (character.character.type === 'daemon' || character.character.type === 'undead' || character.character.type === 'vampire') { cellsNpc.push(character.position); }
    });
    this.objectState.cellsPlayer = cellsPlayer;
    this.objectState.cellsNpc = cellsNpc;
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
    const newGame = () => {
      this.gamePlay.addNewGameListener(this.newGame.bind(this));
    };
    newGame();
    const saveGame = () => {
      this.gamePlay.addSaveGameListener(this.saveGame.bind(this));
    };
    saveGame();
    const loadGame = () => {
      this.gamePlay.addLoadGameListener(this.loadGame.bind(this));
    };
    loadGame();
    // TODO: load saved stated from stateService
  }

  onCellClick(index) {
    // TODO: react to click
    const array = Array.prototype.slice.call(this.cells); // массив ввсех ячеек
    const numberSelected = array.indexOf(document.querySelector('.selected-yellow')); // ячейка с выбранным персонажем
    if (this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('swordsman') || this.cells[index].firstChild.classList.contains('bowman') || this.cells[index].firstChild.classList.contains('magician'))) {
      if (numberSelected > -1) {
        this.gamePlay.deselectCell(numberSelected);
      } this.gamePlay.selectCell(index);
      this.objectState.selectCell = index;
      this.teamJoint.forEach((character) => {
        if (index === character.position) { this.objectState.selectType = character.character.type; }
      });
    } else if (document.querySelector('.selected') === null && this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('daemon') || this.cells[index].firstChild.classList.contains('undead') || this.cells[index].firstChild.classList.contains('vampire'))) {
      this.gamePlay.setCursor(cursors.notallowed);
      this.gamePlay.constructor.showError('Невозможно выбрать персонажа');
    }
    if (this.cells[index].classList.contains('selected-green')) {
      console.log('простой ход игорока');
      this.teamJoint.forEach((character) => {
        if (numberSelected === character.position) {
          character.position = index;
        }
      });
      this.gamePlay.redrawPositions(this.teamJoint);
      this.cells.forEach((cell) => {
        cell.classList.remove('selected', 'selected-green', 'selected-yellow');
      });
      this.objectState.selectCell = false;
      this.objectState.move = 'computer';
      this.computerMove();
    }
    if (this.cells[index].classList.contains('selected-red') && this.cells[index].firstChild && (this.cells[index].firstChild.classList.contains('daemon') || this.cells[index].firstChild.classList.contains('undead') || this.cells[index].firstChild.classList.contains('vampire'))) {
      console.log('атака игрока');
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
      this.objectState.selectCell = false;
      const promise = this.gamePlay.showDamage(index, damage);

      this.teamJoint[target].character.health -= damage;
      if (this.teamJoint[target].character.health <= 0) {
        this.teamJoint.splice(target, 1);
      }
      promise.then((result) => this.gamePlay.redrawPositions(this.teamJoint));
      this.objectState.move = 'computer';

      promise.then((result) => this.newLevel());
      promise.then((result) => this.computerMove());
    }
    const cellsPlayer = [];
    const cellsNpc = [];
    this.teamJoint.forEach((character) => {
      if (character.character.type === 'swordsman' || character.character.type === 'bowman' || character.character.type === 'magician') { cellsPlayer.push(character.position); } else if (character.character.type === 'daemon' || character.character.type === 'undead' || character.character.type === 'vampire') { cellsNpc.push(character.position); }
    });
    this.objectState.cellsPlayer = cellsPlayer;
    this.objectState.cellsNpc = cellsNpc;
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    let currentChar;
    let message;
    if (this.objectState.cellsPlayer.includes(index) === true || this.objectState.cellsNpc.includes(index) === true) {
      this.teamJoint.forEach((character) => {
        if (index === character.position) {
          currentChar = character;
          message = `🎖 ${currentChar.character.level} ⚔ ${currentChar.character.attack} 🛡 ${currentChar.character.defence} ❤ ${currentChar.character.health}`;
        }
      });
      this.gamePlay.showCellTooltip(message, index);
    }
    if (this.objectState.selectCell) {
      const numberSelected = this.objectState.selectCell;
      if (this.objectState.cellsPlayer.includes(index) === false && this.objectState.cellsNpc.includes(index) === false) {
        if (this.objectState.selectType === 'swordsman') {
          this.validCells = validFourCell(numberSelected);
        } if (this.objectState.selectType === 'bowman') {
          this.validCells = validTwoCell(numberSelected);
        } if (this.objectState.selectType === 'magician') {
          this.validCells = validOneCell(numberSelected);
        } if (this.validCells.validCells.includes(index)) {
          this.cells[index].classList.add('selected', 'selected-green');
          this.gamePlay.setCursor(cursors.pointer);
        } else if (this.validCells.redCells.includes(index)) { this.cells[index].classList.add('selected', 'selected-red'); }
      } else if (this.objectState.cellsNpc.includes(index)) {
        if (this.objectState.selectType === 'swordsman') {
          this.validCells = validOneCell(numberSelected);
        } if (this.objectState.selectType === 'bowman') {
          this.validCells = validTwoCell(numberSelected);
        } if (this.objectState.selectType === 'magician') {
          this.validCells = validFourCell(numberSelected);
        } if (this.validCells.validCells.includes(index)) {
          this.cells[index].classList.add('selected', 'selected-red');
          this.gamePlay.setCursor(cursors.crosshair);
        } else { this.gamePlay.setCursor(cursors.notallowed); }
      }
    } if (this.objectState.cellsPlayer.includes(index)) {
      this.gamePlay.setCursor(cursors.pointer);
    }
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.validCells = [];
    this.gamePlay.hideCellTooltip(index);
    if (this.objectState.cellsPlayer.includes(index) === false && this.objectState.cellsNpc.includes(index) === false) {
      this.cells[index].classList.remove('selected', 'selected-green', 'selected-red');
    } if (this.objectState.cellsNpc.includes(index)) {
      this.cells[index].classList.remove('selected', 'selected-red');
    }
    this.gamePlay.setCursor(cursors.auto);
  }

  computerMove() {
    const validCellsAttack = [];
    let cellAttack;
    const characters = [];
    this.teamJoint.forEach((ch) => {
      if (ch.character.type === 'daemon' || ch.character.type === 'vampire' || ch.character.type === 'undead') {
        characters.push(ch);
      }
    });
    const character = characters[Math.floor(Math.random() * characters.length)];
    if (character.character.type === 'daemon') {
      this.validCells = validFourCell(character.position);
    } if (character.character.type === 'vampire') {
      this.validCells = validTwoCell(character.position);
    } if (character.character.type === 'undead') {
      this.validCells = validOneCell(character.position);
    }
    this.validCells.validCells.forEach((index) => {
      if (this.cells[index].firstChild != null && (this.cells[index].firstChild.classList.contains('swordsman') || this.cells[index].firstChild.classList.contains('bowman') || this.cells[index].firstChild.classList.contains('magician'))) {
        validCellsAttack.push(index);
      }
    }); if (validCellsAttack.length > 0) {
      cellAttack = validCellsAttack[Math.floor(Math.random() * validCellsAttack.length)];
      console.log('атака компа');
      let targetDefence;
      let attackerAttack;
      let target;
      this.teamJoint.forEach((ch) => {
        if (cellAttack === ch.position) {
          target = this.teamJoint.indexOf(ch);
          targetDefence = ch.character.defence;
        }
      });
      this.teamJoint.forEach((ch) => {
        if (character.position === ch.position) {
          attackerAttack = ch.character.attack;
        }
      });
      const damage = Math.max(attackerAttack - targetDefence, attackerAttack * 0.1);
      const promise = this.gamePlay.showDamage(cellAttack, damage);
      this.teamJoint[target].character.health -= damage;
      if (this.teamJoint[target].character.health <= 0) {
        this.teamJoint.splice(target, 1);
      }
      promise.then((resul) => this.gamePlay.redrawPositions(this.teamJoint));
      this.objectState.move = 'player';
      promise.then((result) => this.newLevel());
    } else {
      console.log('обычный ход компа');
      if (character.character.type === 'daemon') {
        this.validCells = validOneCell(character.position);
      } if (character.character.type === 'vampire') {
        this.validCells = validTwoCell(character.position);
      } if (character.character.type === 'undead') {
        this.validCells = validFourCell(character.position);
      } this.validCells.validCells.forEach((n) => {
        if (this.cells[n].firstChild != null) {
          this.validCells.validCells.splice(this.validCells.validCells.indexOf(n), 1);
        }
      });
      const cellMove = this.validCells.validCells[Math.floor(Math.random() * this.validCells.validCells.length)];
      this.teamJoint.forEach((ch) => {
        if (character === ch) {
          ch.position = cellMove;
        }
      });
      this.gamePlay.redrawPositions(this.teamJoint);
      this.objectState.move = 'player';
    }
  }

  newGame() {
    this.teamJoint = [];
    this.init();
    console.log(this.teamJoint);
  }

  saveGame() {
    const gameState = GameState.from(this.objectState);
    this.stateService.save(gameState);
    console.log('сохранение');
  }

  loadGame() {
    const loadState = this.stateService.load();
    if (loadState === new Error('Invalid state')) {
      this.gamePlay.constructor.showError('Invalid state');
    } else {
      const team = loadState.characters;
      const teamNew = [];
      team.forEach((ch) => {
        let character = {};
        if (ch.character.type === 'bowman') { character = new Bowman(ch.character.level); } else if (ch.character.type === 'magician') { character = new Magician(ch.character.level); console.log('создаем мага'); } else if (ch.character.type === 'swordsman') { character = new Swordsman(ch.character.level); } else if (ch.character.type === 'undead') { character = new Undead(ch.character.level); } else if (ch.character.type === 'vampire') { character = new Vampire(ch.character.level); console.log('создаем вампира'); } else if (ch.character.type === 'daemon') { character = new Daemon(ch.character.level); }
        character.health = ch.character.health;
        const positionedCharacter = new PositionedCharacter(character, ch.position);
        teamNew.push(positionedCharacter);
      });
      loadState.characters = teamNew;
      console.log(teamNew);
      this.objectState = loadState;
      this.gamePlay.drawUi(Object.getOwnPropertyNames(themes[this.objectState.level - 1])[0]);
      this.gamePlay.redrawPositions(teamNew);
      this.teamJoint = teamNew;
      console.log('загрузка');
    }
  }
}
