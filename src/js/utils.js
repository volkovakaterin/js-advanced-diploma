/* eslint-disable linebreak-style */
/* eslint-disable max-len */

export function calcTileType(index, boardSize) {
  if (index === 0) {
    return 'top-left';
  } if (index >= 1 && index <= boardSize - 2) {
    return 'top';
  } if (index === boardSize - 1) {
    return 'top-right';
  } if (index === boardSize || index === boardSize * 2 || index === boardSize * 3 || index === boardSize * 4 || index === boardSize * 5 || index === boardSize * 6) {
    return 'left';
  } if (index === (boardSize * 2) - 1 || index === (boardSize * 3) - 1 || index === (boardSize * 4) - 1 || index === (boardSize * 5) - 1 || index === (boardSize * 6) - 1 || index === (boardSize * 7) - 1) {
    return 'right';
  } if (index === boardSize * (boardSize - 1)) {
    return 'bottom-left';
  } if (index === ((boardSize * boardSize) - 1)) {
    return 'bottom-right';
  } if (index >= (boardSize * (boardSize - 1)) + 1 && index <= (boardSize * boardSize) - 2) {
    return 'bottom';
  }
  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
