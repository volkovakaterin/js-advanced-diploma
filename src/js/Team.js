/* eslint-disable linebreak-style */
import {
  Magician, Bowman, Swordsman, Daemon, Undead, Vampire,
} from './Character';

export default class Team {
  constructor() {
    this.player = [new Magician(), new Bowman(), new Swordsman()];
    this.computer = [new Daemon(), new Undead(), new Vampire()];
  }
}
