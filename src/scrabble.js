
const aB = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, p: 3, b: 3, c: 3, m: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }
const nB = { "2": 2, "3": 3 }

class Scrabble {

  constructor(word, multiplier = []) {
    this.word = word;
    this.multiplier = multiplier;
  }

  score() {

    let score = 0;
    let j = 0;

    for (let i = 0; i < (this.word || 0).length; i++) {
      score += (aB[this.word[i].toLowerCase()] || 0) * (this.multiplier[j] || 1);
      score *= nB[this.word[i]] || 1;
      j += 1
    }
    return score;
  }
}
export default Scrabble;

// write triple word as "hello3"
// write double word as "hello2"
// if e is a double letter in hello, write multiplier as [1, 2, 1, 1, 1]