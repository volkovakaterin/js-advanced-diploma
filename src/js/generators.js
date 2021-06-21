/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */

export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const item = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
  const randLevel = Math.floor(1 + Math.random() * maxLevel);
  item.level = randLevel;
  yield item;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const team = [];
  for (let i = 0; i < characterCount; i++) {
    const pop = characterGenerator(allowedTypes, maxLevel);
    const hero = pop.next().value;
    team.push(hero);
  }
  return team;
}
