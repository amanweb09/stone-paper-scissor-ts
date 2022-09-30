import type { IResultTypes } from './types';

class UtilityFunctions {
  generateRandomIx(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  findPropertyByValue(object: object, value: string): string {
    return Object.keys(object).find((key) => object[key] === value);
  }

  possibleOutcomes(): IResultTypes[] {
    const possibleResults: IResultTypes[] = [
      {
        a: 'stone',
        b: 'scissors',
        result: 'a',
      },
      {
        a: 'scissors',
        b: 'stone',
        result: 'b',
      },
      {
        a: 'paper',
        b: 'scissors',
        result: 'b',
      },
      {
        a: 'scissors',
        b: 'paper',
        result: 'a',
      },
      {
        a: 'stone',
        b: 'paper',
        result: 'b',
      },
      {
        a: 'paper',
        b: 'stone',
        result: 'a',
      },
      {
        a: 'paper',
        b: 'paper',
        result: 'draw',
      },
      {
        a: 'stone',
        b: 'stone',
        result: 'draw',
      },
      {
        a: 'scissors',
        b: 'scissors',
        result: 'draw',
      },
    ];

    return possibleResults;
  }
}

export default new UtilityFunctions();
