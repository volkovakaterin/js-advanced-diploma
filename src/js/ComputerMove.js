/* eslint-disable no-const-assign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import { validOneCell, validTwoCell, validFourCell } from './ValidCells';

export function RandomCharacter(team) {
  const cells = document.getElementsByClassName('cell');
  let validCells = [];
  const validcellsAttack = [];
  const characters = [team[2], team[3]];
  const character = characters[Math.floor(Math.random() * characters.length)];
  if (character.character.type === 'daemon') {
    validCells = validFourCell(character.position);
  } if (character.character.type === 'vampire') {
    validCells = validTwoCell(character.position);
  } if (character.character.type === 'undead') {
    validCells = validOneCell(character.position);
  } console.log(validCells);
  validCells.forEach((index) => {
    if (cells[index].firstChild && (cells[index].firstChild.classList.contains('swordsman') || cells[index].firstChild.classList.contains('bowman') || cells[index].firstChild.classList.contains('magician'))) {
      validcellsAttack.push(index);
    }
  }); if (validcellsAttack.length > 0) {
    const cellAttack = validcellsAttack[Math.floor(Math.random() * validcellsAttack.length)];
    return cellAttack;
    // let targetDefence;
    // let attackerAttack;
    // let target;
    // team.forEach((ch) => {
    //   if (cellAttack === ch.position) {
    //     target = team.indexOf(ch);
    //     targetDefence = ch.character.defence;
    //   }
    // });
    // team.forEach((ch) => {
    //   if (character.position === ch.position) {
    //     attackerAttack = ch.character.attack;
    //   }
    // });
    // const damage = Math.max(attackerAttack - targetDefence, attackerAttack * 0.1);
    // GamePlay.showDamage(cellAttack, damage);
    // team[target].character.health -= damage;
    // console.log('Привет');
    // GamePlay.redrawPositions(team);
  }
}
