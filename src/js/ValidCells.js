/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
export function validTwoCell(n) {
  const validCells = [];
  const zoneTwoBowman = [17, 25, 33, 41];
  const zoneThreeBowman = [10, 11, 12, 12];
  const zoneFourBowman = [22, 30, 38, 46];
  const zoneFiveBowman = [50, 51, 52, 53];
  const zoneSixBowman = [8, 16, 24, 32, 40, 48];
  const zoneEightBowman = [23, 31, 39, 47];
  validCells.push(n - 1);
  validCells.push(n - 2);
  validCells.push(n + 1);
  validCells.push(n + 2);
  validCells.push(n - 8);
  validCells.push(n - 16);
  validCells.push(n + 8);
  validCells.push(n + 16);
  validCells.push(n - 9);
  validCells.push(n - 18);
  validCells.push(n + 9);
  validCells.push(n + 18);
  validCells.push(n - 7);
  validCells.push(n - 14);
  validCells.push(n + 7);
  validCells.push(n + 14);
  if (zoneTwoBowman.includes(n)) {
    let i = validCells.indexOf(n - 2);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 18);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 14);
    validCells.splice(i, 1);
  } if (zoneThreeBowman.includes(n)) {
    let i = validCells.indexOf(n - 16);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 18);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 14);
    validCells.splice(i, 1);
  } if (zoneFourBowman.includes(n)) {
    let i = validCells.indexOf(n - 14);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 18);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 2);
    validCells.splice(i, 1);
  } if (zoneFiveBowman.includes(n)) {
    let i = validCells.indexOf(n + 14);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 16);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 18);
    validCells.splice(i, 1);
  } if (n === 9) {
    let i = validCells.indexOf(7);
    validCells.splice(i, 1);
    i = validCells.indexOf(23);
    validCells.splice(i, 1);
  } if (n === 14) {
    let i = validCells.indexOf(0);
    validCells.splice(i, 1);
    i = validCells.indexOf(16);
    validCells.splice(i, 1);
    i = validCells.indexOf(32);
    validCells.splice(i, 1);
  } if (n === 54) {
    let i = validCells.indexOf(40);
    validCells.splice(i, 1);
    i = validCells.indexOf(56);
    validCells.splice(i, 1);
  } if (n === 49) {
    let i = validCells.indexOf(31);
    validCells.splice(i, 1);
    i = validCells.indexOf(47);
    validCells.splice(i, 1);
    i = validCells.indexOf(63);
    validCells.splice(i, 1);
  } if (n === 0) {
    let i = validCells.indexOf(7);
    validCells.splice(i, 1);
    i = validCells.indexOf(14);
    validCells.splice(i, 1);
  } if (n === 7) {
    let i = validCells.indexOf(0);
    validCells.splice(i, 1);
    i = validCells.indexOf(16);
    validCells.splice(i, 1);
    i = validCells.indexOf(25);
    validCells.splice(i, 1);
  } if (n === 63) {
    let i = validCells.indexOf(56);
    validCells.splice(i, 1);
    i = validCells.indexOf(49);
    validCells.splice(i, 1);
  } if (n === 56) {
    let i = validCells.indexOf(63);
    validCells.splice(i, 1);
    i = validCells.indexOf(55);
    validCells.splice(i, 1);
    i = validCells.indexOf(54);
    validCells.splice(i, 1);
    i = validCells.indexOf(47);
    validCells.splice(i, 1);
    i = validCells.indexOf(38);
    validCells.splice(i, 1);
  } if (zoneSixBowman.includes(n)) {
    let i = validCells.indexOf(n - 9);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 18);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 1);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 2);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 7);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 14);
    validCells.splice(i, 1);
  } if (zoneEightBowman.includes(n)) {
    let i = validCells.indexOf(n - 7);
    validCells.splice(i, 1);
    i = validCells.indexOf(n - 14);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 1);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 2);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 9);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 18);
    validCells.splice(i, 1);
  } if (n === 1) {
    const i = validCells.indexOf(15);
    validCells.splice(i, 1);
  } if (n === 6) {
    let i = validCells.indexOf(8);
    validCells.splice(i, 1);
    i = validCells.indexOf(24);
    validCells.splice(i, 1);
  } if (n === 57) {
    let i = validCells.indexOf(55);
    validCells.splice(i, 1);
    i = validCells.indexOf(39);
    validCells.splice(i, 1);
  } if (n === 62) {
    const i = validCells.indexOf(48);
    validCells.splice(i, 1);
  }
  // console.log(validCells);
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
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 1; i <= 4; i++) {
      validCells.push(n - i);
      if (n - i === 0) { break; }
    }
  } if (zoneTwo.includes(n)) {
    for (let i = 8; i <= 32; i += 8) {
      validCells.push(n - i);
      if (n - i === 7) { break; }
    } for (let i = 7; i <= 28; i += 7) {
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    } for (let i = 1; i <= 4; i++) {
      validCells.push(n - i);
    } for (let i = 8; i <= 28; i += 8) {
      validCells.push(n + i);
      if (n + i === 63) { break; }
    } for (let i = 9; i <= 36; i += 9) {
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    }
  } if (zoneThree.includes(n)) {
    for (let i = 8; i <= 32; i += 8) {
      validCells.push(n - i);
    } for (let i = 7; i <= 28; i += 7) {
      validCells.push(n - i);
      if (borders.includes(n - i)) { break; }
    } for (let i = 1; i <= 4; i++) {
      validCells.push(n + i);
      if (n + i === 63) { break; }
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
      validCells.push(n + i);
      if (n + i === 56) { break; }
    } for (let i = 9; i <= 36; i += 9) { // вниз вправо
      validCells.push(n + i);
      if (borders.includes(n + i)) { break; }
    }
  } else if (zoneFive.includes(n)) {
    for (let i = 1; i <= 4; i++) {
      validCells.push(n + i);
      borders.forEach((index) => {
        if ((n + i) === index) {
          i = 5;
        }
      });
    }
    for (let i = 9; i <= 36; i += 9) {
      validCells.push(n + i);
      borders.forEach((index) => {
        if ((n + i) === index) {
          i = 37;
        }
      });
    }
    for (let i = 8; i <= 32; i += 8) {
      validCells.push(n + i);
      borders.forEach((index) => {
        if ((n + i) === index) {
          i = 33;
        }
      });
    }
    for (let i = 8; i <= 32; i += 8) {
      validCells.push(n - i);
      borders.forEach((index) => {
        if ((n + i) === index) {
          i = 33;
        }
      });
    }
    for (let i = 7; i <= 28; i += 7) {
      validCells.push(n - i);
      borders.forEach((index) => {
        if ((n + i) === index) {
          i = 29;
        }
      });
    }
    for (let i = 7; i <= 28; i += 7) {
      validCells.push(n + i);
      borders.forEach((index) => {
        if ((n + i) === index) {
          i = 29;
        }
      });
    }
    for (let i = 1; i <= 4; i++) {
      validCells.push(n - i);
      borders.forEach((index) => {
        if ((n + i) === index) {
          i = 5;
        }
      });
    }
    for (let i = 9; i <= 36; i += 9) {
      validCells.push(n - i);
      borders.forEach((index) => {
        if ((n + i) === index) {
          i = 37;
        }
      });
    }
  }
  return validCells;
}

export function validOneCell(n) {
  const validCells = [];
  const zoneOne = [0, 8, 16, 24, 32, 40, 48, 56];
  const zoneTwo = [7, 15, 23, 31, 39, 47, 55, 63];
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
  } if (zoneTwo.includes(n)) {
    let i = validCells.indexOf(n - 7);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 1);
    validCells.splice(i, 1);
    i = validCells.indexOf(n + 9);
    validCells.splice(i, 1);
  }
  // console.log(validCells);
  return validCells;
}
