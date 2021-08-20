/* eslint-disable linebreak-style */
import {
  Magician, Bowman, Swordsman, Daemon, Undead, Vampire,
} from './Character';

export default class Team {
  constructor() {
    this.player = [Magician, Bowman, Swordsman];
    this.computer = [Daemon, Undead, Vampire];
  }
}
