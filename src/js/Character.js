/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
export class Character {
  constructor(level, type = 'generic') {
    if (new.target.name === 'Character') throw new Error('Ошибка');
    this.level = level;
    this.attack = 0;
    this.defence = 0;
    this.health = 50;
    this.type = type;
    // TODO: throw error if user use "new Character()"
  }

  levelUp() {
    this.level += 1;
    this.health += 80;
    if (this.health > 100) {
      this.health = 100;
    }
    this.attack = Math.round(Math.max(this.attack, (this.attack * (1.8 - this.health / 100))));
  }
}

export class Magician extends Character {
  constructor(level, health, type = 'magician', attack = 10, defence = 40) {
    super(level, health);
    this.type = type;
    this.attack = attack;
    this.defence = defence;
  }
}
export class Daemon extends Character {
  constructor(level, health, type = 'daemon', attack = 10, defence = 40) {
    super(level, health);
    this.type = type;
    this.attack = attack;
    this.defence = defence;
  }
}
export class Bowman extends Character {
  constructor(level, health, type = 'bowman', attack = 25, defence = 25) {
    super(level, health);
    this.type = type;
    this.attack = attack;
    this.defence = defence;
  }
}
export class Swordsman extends Character {
  constructor(level, health, type = 'swordsman', attack = 40, defence = 10) {
    super(level, health);
    this.type = type;
    this.attack = attack;
    this.defence = defence;
  }
}
export class Undead extends Character {
  constructor(level, health, type = 'undead', attack = 40, defence = 10) {
    super(level, health);
    this.type = type;
    this.attack = attack;
    this.defence = defence;
  }
}
export class Vampire extends Character {
  constructor(level, health, type = 'vampire', attack = 25, defence = 25) {
    super(level, health);
    this.type = type;
    this.attack = attack;
    this.defence = defence;
  }
}
