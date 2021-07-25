/* eslint-disable no-console */
/* eslint-disable linebreak-style */
export default class GameState {
  static from(object) {
    const move = {
      now: 'players',
    };
    move.now = object;
    console.log(move);
    console.log('Следующий');
    return null;
  }
}
