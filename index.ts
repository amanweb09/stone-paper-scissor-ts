import utils from './utils';
import type { IResultTypes as IMoveType } from './types';

function startGame() {
  const moves: string[] = ['stone', 'paper', 'scissors'];

  const ix__A: number = utils.generateRandomIx(0, 2);
  const ix__B: number = utils.generateRandomIx(0, 2);

  const move__A: string = moves[ix__A];
  const move__B: string = moves[ix__B];

  const moveObject: IMoveType = {
    a: move__A,
    b: move__B,
    result: '',
  };

  const possibleResults = utils.possibleOutcomes();

  return possibleResults.find((pos) => {
    return pos.a === moveObject.a && pos.b === moveObject.b;
  });
}

const gamePlays: IMoveType[] = [];

for (let i = 0; i < 10; i++) {
  const oc = startGame();
  gamePlays.push(oc);
}

console.log(gamePlays);
