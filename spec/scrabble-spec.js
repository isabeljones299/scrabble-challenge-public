// Note: you shouldn't need to change anything in this file.

import Scrabble from '../src/scrabble.js';
let scrabble;

describe("Scrabble", () => {
  it('returns 0 for empty words', () => {
    scrabble = new Scrabble('');

    expect(scrabble.score()).toEqual(0);
  });

  it('returns 0 for whitespace', () => {
    scrabble = new Scrabble(" \t\n");

    expect(scrabble.score()).toEqual(0);
  });

  it('returns 0 for null', () => {
    scrabble = new Scrabble(null);

    expect(scrabble.score()).toEqual(0);
  });

  it('scores short word', () => {
    scrabble = new Scrabble('a');

    expect(scrabble.score()).toEqual(1);
  });

  it('scores short word', () => {
    scrabble = new Scrabble('f');

    expect(scrabble.score()).toEqual(4);
  });

  it('scores a simple word', () => {
    scrabble = new Scrabble('street');

    expect(scrabble.score()).toEqual(6);
  });

  it('scores a more complicated word', () => {
    scrabble = new Scrabble('quirky');

    expect(scrabble.score()).toEqual(22);
  });

  it('scores a triple word', () => {
    scrabble = new Scrabble('hello3');

    expect(scrabble.score()).toEqual(24);
  });

  it('scores double and triple letters', () => {
    scrabble = new Scrabble('hello', [1, 2, 3, 1, 1]);

    expect(scrabble.score()).toEqual(11);
  })
});

