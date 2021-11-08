/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
export function validTwoCell(n) {
  const areaCells = { validCells: [], redCells: [] };
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
  const redCells = [];
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
    } redCells.push(n + 17);
    redCells.push(n - 17);
    redCells.push(n + 10);
    redCells.push(n - 10);
    redCells.push(n + 6);
    redCells.push(n - 6);
    redCells.push(n + 15);
    redCells.push(n - 15);
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
    } redCells.push(n + 15);
    redCells.push(n + 17);
    if (n + 10 !== 24) { redCells.push(n + 10); }
    if (n - 6 !== 8) { redCells.push(n - 6); }
    if (n + 6 !== 15) { redCells.push(n + 6); }
    if (n - 10 !== -1) { redCells.push(n - 10); }
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
    redCells.push(n - 15);
    redCells.push(n - 17);
    if (n + 10 !== 64) { redCells.push(n + 10); }
    if (n + 6 !== 55) { redCells.push(n + 6); }
    if (n - 10 !== 39) { redCells.push(n - 10); }
    if (n - 6 !== 48) { redCells.push(n - 6); }
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
    } redCells.push(n - 17);
    redCells.push(n - 15);
    redCells.push(n - 6);
    redCells.push(n + 10);
    redCells.push(n + 17);
    redCells.push(n + 15);
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
    } redCells.push(n - 17);
    redCells.push(n - 15);
    redCells.push(n + 6);
    redCells.push(n - 10);
    redCells.push(n + 17);
    redCells.push(n + 15);
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
    } if (n + 10 < 16) { redCells.push(n + 10); }
    if (n + 17 !== 24) { redCells.push(n + 17); }
    if (n + 6 > 7) { redCells.push(n + 6); }
    if (n + 15 !== 15) { redCells.push(n + 15); }
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
    } if (n - 10 > 47) { redCells.push(n - 10); }
    if (n - 17 !== 39) { redCells.push(n - 17); }
    if (n - 6 < 56) { redCells.push(n - 6); }
    if (n - 15 !== 48) { redCells.push(n - 15); }
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
    } if (n - 15 !== -7) { redCells.push(n - 15); }
    if (n + 17 !== 65) { redCells.push(n + 17); }
    redCells.push(n + 10);
    redCells.push(n - 6);
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
    } if (n + 15 !== 70) { redCells.push(n + 15); }
    if (n - 17 !== -2) { redCells.push(n - 17); }
    redCells.push(n - 10);
    redCells.push(n + 6);
  }
  areaCells.redCells = redCells;
  areaCells.validCells = validCells;
  return areaCells;
}

export function validFourCell(n) {
  const areaCells = { validCells: [], redCells: [] };
  const redCells = [];
  const zoneOne = [0, 1, 2, 3, 4, 5, 6];
  const zoneTwo = [7, 15, 23, 31, 39, 47, 55];
  const zoneThree = [57, 58, 59, 60, 61, 62, 63];
  const zoneFour = [8, 16, 24, 32, 40, 48, 56];
  const zoneFive = [9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 49, 50, 51, 52, 53, 54];
  const validCells = [];
  const borders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 24, 32, 40, 48, 56, 57, 58, 59, 60, 61, 62, 63, 55, 47, 39, 31, 23, 15];
  const plusSeventeen = [24, 32, 40, 48, 56, 64, 72, 80];
  const plusTwentyFive = [32, 40, 48, 56, 64, 72, 80, 88];
  const plusTwentySix = [32, 33, 40, 41, 48, 49, 56, 57, 64, 65, 72, 73, 80, 81, 88, 89];
  const plusThirtyThree = [40, 48, 56, 64, 72, 80, 88, 96];
  const plusThirtyFour = [40, 41, 49, 48, 56, 57, 64, 65, 72, 73, 80, 81, 88, 89, 96, 97];
  const plusThirtyFive = [40, 41, 42, 50, 49, 48, 56, 57, 58, 64, 65, 66, 72, 73, 74, 80, 81, 82, 88, 89, 90, 96, 97, 98];
  const plusTen = [16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57, 64, 65, 72, 73];
  const plusEleven = [16, 17, 18, 24, 25, 26, 32, 33, 34, 40, 41, 42, 48, 49, 50, 56, 57, 58, 64, 65, 66, 72, 73, 74];
  const plusNineteen = [24, 25, 26, 32, 33, 34, 40, 41, 42, 48, 49, 50, 56, 57, 58, 64, 65, 66, 72, 73, 74, 80, 81, 82];
  const plusTwentyEight = [32, 33, 34, 35, 40, 41, 42, 43, 48, 49, 50, 51, 56, 5, 58, 59, 64, 65, 66, 67, 72, 73, 74, 75, 80, 81, 82, 83, 88, 89, 90, 91];
  const plusFifteen = [15, 23, 31, 39, 47, 55, 63, 71];
  const plusTwentyTwo = [22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63, 70, 71, 78, 79];
  const plusTwentyThree = [23, 31, 39, 47, 55, 63, 71, 79];
  const plusTwentyNine = [29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 61, 62, 63, 69, 70, 71, 77, 78, 79, 85, 86, 87];
  const plusThirty = [30, 31, 38, 39, 46, 47, 54, 55, 62, 63, 70, 71, 78, 79, 86, 87];
  const plusThirtyOne = [31, 39, 31, 39, 47, 55, 63, 71, 79, 87];
  const plusFour = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63];
  const plusFive = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 61, 62, 63];
  const plusSix = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];
  const minusSeventeen = [7, 15, 23, 31, 39];
  const minusTwentyFive = [7, 15, 23, 31];
  const minusThirtyThree = [7, 15, 23];
  const minusTwentySix = [6, 7, 14, 15, 22, 23, 30, 31];
  const minusThirtyFour = [6, 7, 14, 15, 22, 23];
  const minusThirtyFive = [5, 6, 7, 13, 14, 15, 21, 22, 23];
  const minusTen = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47];
  const minusEleven = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47];
  const minusNineteen = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39];
  const minusTwentyEight = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31];
  const minusFifteen = [8, 16, 24, 32, 40, 48];
  const minusTwentyTwo = [8, 9, 16, 17, 24, 25, 32, 33, 40, 41];
  const minusTwentyThree = [8, 16, 24, 32, 40];
  const minusTwentyNine = [8, 9, 10, 16, 17, 18, 24, 25, 26, 32, 33, 34];
  const minusThirty = [8, 9, 16, 17, 24, 25, 32, 33];
  const minusThirtyOne = [8, 16, 24, 32];
  const minusThirteen = [8, 9, 10, 16, 17, 18, 24, 25, 26, 32, 33, 34, 40, 41, 42, 48, 49, 50];
  const minusSix = [8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];
  const minusFive = [8, 9, 10, 16, 17, 18, 24, 25, 26, 32, 33, 34, 40, 41, 42, 48, 49, 50, 56, 57, 58];
  const minusFour = [8, 9, 10, 11, 16, 17, 18, 19, 24, 25, 26, 27, 32, 33, 34, 35, 40, 41, 42, 43, 48, 49, 50, 51, 56, 57, 58, 59];
  const plusThirteen = [13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 61, 62, 63, 69, 70, 71];
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
  } if (plusSeventeen.includes(n + 17) === false) { redCells.push(n + 17); }
  if (plusTwentyFive.includes(n + 25) === false) { redCells.push(n + 25); }
  if (plusTwentySix.includes(n + 26) === false) { redCells.push(n + 26); }
  if (plusThirtyThree.includes(n + 33) === false) { redCells.push(n + 33); }
  if (plusThirtyFour.includes(n + 34) === false) { redCells.push(n + 34); }
  if (plusThirtyFive.includes(n + 35) === false) { redCells.push(n + 35); }
  if (plusTen.includes(n + 10) === false) { redCells.push(n + 10); }
  if (plusEleven.includes(n + 11) === false) { redCells.push(n + 11); }
  if (n < 52) { redCells.push(n + 12); }
  if (plusNineteen.includes(n + 19) === false) { redCells.push(n + 19); }
  if (n < 44) { redCells.push(n + 20); }
  if (plusTwentyEight.includes(n + 28) === false) { redCells.push(n + 28); }
  if (plusFifteen.includes(n + 15) === false) { redCells.push(n + 15); }
  if (plusTwentyTwo.includes(n + 22) === false) { redCells.push(n + 22); }
  if (plusTwentyThree.includes(n + 23) === false) { redCells.push(n + 23); }
  if (plusTwentyNine.includes(n + 29) === false) { redCells.push(n + 29); }
  if (plusThirty.includes(n + 30) === false) { redCells.push(n + 30); }
  if (plusThirtyOne.includes(n + 31) === false) { redCells.push(n + 31); }
  if (plusFour.includes(n + 4) === false) { redCells.push(n + 4); }
  if (plusFive.includes(n + 5) === false) { redCells.push(n + 5); }
  if (plusSix.includes(n + 6) === false) { redCells.push(n + 6); }
  if (plusThirteen.includes(n + 13) === false) { redCells.push(n + 13); }
  if (n > 16 && minusSeventeen.includes(n - 17) === false) { redCells.push(n - 17); }
  if (n > 24 && minusTwentyFive.includes(n - 25) === false) { redCells.push(n - 25); }
  if (n > 32 && minusThirtyThree.includes(n - 33) === false) { redCells.push(n - 33); }
  if (n > 25 && minusTwentySix.includes(n - 26) === false) { redCells.push(n - 26); }
  if (n > 33 && minusThirtyFour.includes(n - 34) === false) { redCells.push(n - 34); }
  if (n > 34 && minusThirtyFive.includes(n - 35) === false) { redCells.push(n - 35); }
  if (n > 9 && minusTen.includes(n - 10) === false) { redCells.push(n - 10); }
  if (n > 10 && minusEleven.includes(n - 11) === false) { redCells.push(n - 11); }
  if (n > 11) { redCells.push(n - 12); }
  if (n > 18 && minusNineteen.includes(n - 19) === false) { redCells.push(n - 19); }
  if (n > 19) { redCells.push(n - 20); }
  if (n > 27 && minusTwentyEight.includes(n - 28) === false) { redCells.push(n - 28); }
  if (n > 15 && minusFifteen.includes(n - 15) === false) { redCells.push(n - 15); }
  if (n > 23 && minusTwentyTwo.includes(n - 22) === false) { redCells.push(n - 22); }
  if (n > 24 && minusTwentyThree.includes(n - 23) === false) { redCells.push(n - 23); }
  if (n > 31 && minusTwentyNine.includes(n - 29) === false) { redCells.push(n - 29); }
  if (n > 31 && minusThirty.includes(n - 30) === false) { redCells.push(n - 30); }
  if (n > 31 && minusThirtyOne.includes(n - 31) === false) { redCells.push(n - 31); }
  if (n > 15 && minusThirteen.includes(n - 13) === false) { redCells.push(n - 13); }
  if (n > 7 && minusSix.includes(n - 6) === false) { redCells.push(n - 6); }
  if (n > 7 && minusFive.includes(n - 5) === false) { redCells.push(n - 5); }
  if (n > 7 && minusFour.includes(n - 4) === false) { redCells.push(n - 4); }
  areaCells.validCells = validCells;
  areaCells.redCells = redCells;
  return (areaCells);
}

export function validOneCell(n) {
  const areaCells = {
    validCells: [],
    redCells: [],
  };
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
  areaCells.validCells = validCells;
  return areaCells;
}
