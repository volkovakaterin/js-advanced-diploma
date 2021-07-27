/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
export function validTwoCell(n) {
  const validCells = [];
  const zoneOne = [18, 19, 20, 21, 26, 27, 28, 29, 34, 35, 36, 37, 42, 43, 44, 45];
  const zoneTwo = [9, 10, 11, 12, 13, 14];
  const zoneThree = [49, 50, 51, 52, 53, 54];
  const zoneFour = [17, 25, 33, 41];
  const zoneFive = [22, 30, 38, 46];
  const zoneSix = [0, 1, 2, 3, 4, 5, 6, 7];
  const zoneSeven = [56, 57, 58, 59, 60, 61, 62, 63];
  const zoneEight = [8, 16, 24, 32, 40, 48];
  const zoneNine = [15, 23, 31, 39, 47, 55];
  if (zoneOne.includes(n)) {
    for (let i = 1; i <= 2; i *= 2) {
      validCells.push(n - i);
      validCells.push(n + i);
      validCells.push(n - (8 * i));
      validCells.push(n + (8 * i));
      validCells.push(n - (9 * i));
      validCells.push(n + (9 * i));
      validCells.push(n - (7 * i));
      validCells.push(n + (7 * i));
    }
  } if (zoneTwo.includes(n)) {
    validCells.push(n - 9);
    validCells.push(n - 8);
    validCells.push(n + 8);
    validCells.push(n + 16);
    validCells.push(n - 7);
    for (let i = 1; i <= 2; i++) {
      validCells.push(n - i);
      if (n - i === 8) { break; }
    } for (let i = 1; i <= 2; i++) {
      validCells.push(n + i);
      if (n + i === 15) { break; }
    } for (let i = 7; i <= 14; i += 7) {
      validCells.push(n + i);
      if (n + i === 16) { break; }
    } for (let i = 9; i <= 18; i += 9) {
      validCells.push(n + i);
      if (n + i === 23) { break; }
    }
  } if (zoneThree.includes(n)) {
    validCells.push(n + 7);
    validCells.push(n + 8);
    validCells.push(n + 9);
    validCells.push(n - 8);
    validCells.push(n - 16);
    for (let i = 1; i <= 2; i++) {
      validCells.push(n - i);
      if (n - i === 48) { break; }
    } for (let i = 1; i <= 2; i++) {
      validCells.push(n + i);
      if (n + i === 55) { break; }
    } for (let i = 9; i <= 18; i += 9) {
      validCells.push(n - i);
      if (n - i === 40) { break; }
    } for (let i = 7; i <= 14; i += 7) {
      validCells.push(n - i);
      if (n - i === 47) { break; }
    }
  } if (zoneFour.includes(n)) {
    validCells.push(n - 9);
    validCells.push(n - 1);
    validCells.push(n + 7);
    for (let i = 1; i <= 2; i *= 2) {
      validCells.push(n - (8 * i));
      validCells.push(n - (7 * i));
      validCells.push(n + i);
      validCells.push(n + (9 * i));
      validCells.push(n + (8 * i));
    }
  } if (zoneFive.includes(n)) {
    validCells.push(n - 7);
    validCells.push(n + 1);
    validCells.push(n + 9);
    for (let i = 1; i <= 2; i *= 2) {
      validCells.push(n - (8 * i));
      validCells.push(n - (9 * i));
      validCells.push(n - i);
      validCells.push(n + (8 * i));
      validCells.push(n + (7 * i));
    }
  } if (zoneSix.includes(n)) {
    for (let i = 1; i <= 2; i++) {
      if (n + i === 8) { break; }
      validCells.push(n + i);
    } for (let i = 9; i <= 18; i += 9) {
      if ((n + i === 24) || (n + i === 16)) { break; }
      validCells.push(n + i);
    } for (let i = 8; i <= 16; i += 8) {
      validCells.push(n + i);
    } for (let i = 7; i <= 14; i += 7) {
      if (n + i === 15 || n + i === 7) { break; }
      validCells.push(n + i);
    } for (let i = 1; i <= 2; i++) {
      if (n - i === -1) { break; }
      validCells.push(n - i);
    }
  } if (zoneSeven.includes(n)) {
    for (let i = 1; i <= 2; i++) {
      if (n - i === 55) { break; }
      validCells.push(n - i);
    } for (let i = 9; i <= 18; i += 9) {
      if ((n - i === 47) || (n - i === 39)) { break; }
      validCells.push(n - i);
    } for (let i = 8; i <= 16; i += 8) {
      validCells.push(n - i);
    } for (let i = 7; i <= 14; i += 7) {
      if (n - i === 48 || n - i === 56) { break; }
      validCells.push(n - i);
    } for (let i = 1; i <= 2; i++) {
      if (n + i === 64) { break; }
      validCells.push(n + i);
    }
  } if (zoneEight.includes(n)) {
    for (let i = 8; i <= 16; i += 8) {
      validCells.push(n - i);
      if (n - i === 0) { break; }
    } for (let i = 7; i <= 14; i += 7) {
      if (n - i === -6) { break; }
      validCells.push(n - i);
    } for (let i = 1; i <= 2; i++) {
      validCells.push(n + i);
    } for (let i = 9; i <= 18; i += 9) {
      if (n + i === 66) { break; }
      validCells.push(n + i);
    } for (let i = 8; i <= 16; i += 8) {
      validCells.push(n + i);
      if (n + i === 56) { break; }
    }
  } if (zoneNine.includes(n)) {
    for (let i = 8; i <= 16; i += 8) {
      validCells.push(n + i);
      if (n + i === 63) { break; }
    } for (let i = 7; i <= 14; i += 7) {
      validCells.push(n + i);
      if (n + i === 62) { break; }
    } for (let i = 1; i <= 2; i++) {
      validCells.push(n - i);
    } for (let i = 9; i <= 18; i += 9) {
      if (n - i === -3) { break; }
      validCells.push(n - i);
    } for (let i = 8; i <= 16; i += 8) {
      validCells.push(n - i);
      if (n - i === 7) { break; }
    }
  }
  return validCells;
}

export function validFourCell(n) {
  const zoneOne = [0, 1, 2, 3, 4, 5, 6];
  const zoneTwo = [7, 15, 23, 31, 39, 47, 55];
  const zoneThree = [57, 58, 59, 60, 61, 62, 63];
  const zoneFour = [8, 16, 24, 32, 40, 48, 56];
  const zoneFive = [9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 49, 50, 51, 52, 53, 54];
  const validCells = [];
  const borders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 57, 58, 59, 60, 61, 62, 63, 55, 47, 39, 31, 23, 15];
  if (zoneOne.includes(n)) {
    for (let i = 1; i <= 4; i++) {
      validCells.push(n + i);
      if (n + i === 7) { break; }
    } for (let i = 9; i <= 36; i += 9) {
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 8; i <= 32; i += 8) {
      validCells.push(n + i);
    } for (let i = 7; i <= 28; i += 7) {
      if (n + i === 7) { break; }
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 1; i <= 4; i++) {
      if (n - i === -1) { break; }
      validCells.push(n - i);
    }
  } if (zoneTwo.includes(n)) {
    for (let i = 8; i <= 32; i += 8) {
      if (n - i === -1) { break; }
      validCells.push(n - i);
    } for (let i = 7; i <= 28; i += 7) {
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 1; i <= 4; i++) {
      validCells.push(n - i);
    } for (let i = 8; i <= 32; i += 8) {
      validCells.push(n + i);
      if (n + i === 63) { break; }
    } for (let i = 9; i <= 36; i += 9) {
      if (n - i === -2) { break; }
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    }
  } if (zoneThree.includes(n)) {
    for (let i = 8; i <= 32; i += 8) {
      validCells.push(n - i);
    } for (let i = 7; i <= 28; i += 7) {
      if (n - i === 56) { break; }
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    } for (let i = 1; i <= 4; i++) {
      if (n + i === 64) { break; }
      validCells.push(n + i);
    } for (let i = 1; i <= 4; i++) {
      validCells.push(n - i);
      if (n - i === 56) { break; }
    } for (let i = 9; i <= 36; i += 9) {
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    }
  } if (zoneFour.includes(n)) {
    for (let i = 8; i <= 32; i += 8) { // вверх
      validCells.push(n - i);
      if (n - i === 0) { break; }
    } for (let i = 7; i <= 28; i += 7) { // вверх вправо
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    } for (let i = 1; i <= 4; i++) { // вправо
      validCells.push(n + i);
    } for (let i = 8; i <= 32; i += 8) { // вниз
      if (n + i === 64) { break; }
      validCells.push(n + i);
    } for (let i = 9; i <= 36; i += 9) {
      if (n + 9 === 65) { break; }
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    }
  } else if (zoneFive.includes(n)) {
    for (let i = 1; i <= 4; i++) {
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 9; i <= 36; i += 9) {
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 8; i <= 32; i += 8) {
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 8; i <= 32; i += 8) {
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    } for (let i = 7; i <= 28; i += 7) {
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    } for (let i = 7; i <= 28; i += 7) {
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 1; i <= 4; i++) {
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    } for (let i = 9; i <= 36; i += 9) {
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    }
  }
  return (validCells);
}

export function validOneCell(n) {
  const validCells = [];
  const zoneOne = [0, 8, 16, 24, 32, 40, 48, 56];
  const zoneTwo = [7, 15, 23, 31, 39, 47, 55, 63];
  const zoneThree = [0, 1, 2, 3, 4, 5, 6, 7];
  const zoneFour = [56, 57, 58, 59, 60, 61, 62, 63];
  validCells.push(n + 1);
  validCells.push(n + 7);
  validCells.push(n + 8);
  validCells.push(n + 9);
  validCells.push(n - 1);
  validCells.push(n - 7);
  validCells.push(n - 8);
  validCells.push(n - 9);
  if (zoneOne.includes(n)) {
    let i = validCells.indexOf(n + 7);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 1);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 9);
    validCells.splice(i, 1);
  }
  if (zoneTwo.includes(n)) {
    let i = validCells.indexOf(n - 7);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 1);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 9);
    validCells.splice(i, 1);
  }
  if (zoneThree.includes(n)) {
    let i = validCells.indexOf(n - 9);
    if (i > -1) {
      validCells.splice(i, 1);
    }
    i = validCells.indexOf(n - 8);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 7);
    if (i > -1) {
      validCells.splice(i, 1);
    }
  }
  if (zoneFour.includes(n)) {
    let i = validCells.indexOf(n + 9);
    if (i > -1) {
      validCells.splice(i, 1);
    }
    i = validCells.indexOf(n + 8);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 7);
    if (i > -1) {
      validCells.splice(i, 1);
    }
  }
  return validCells;
}
