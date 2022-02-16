class WonderfulArray extends Array {
  constructor(initialVal = []) {
    super();
    this.state = initialVal;
  }
  first() {
    return this.state[0];
  }
  last() {
    return this.state[this.state.length - 1];
  }
  sum() {
    return this.state.reduce((a, b) => a + b, 0);
  }
  sample(n = 1) {
    if (n === 1)
      return this.state[Math.floor(Math.random() * this.state.length)];
    const stateCopy = [...this.state];
    for (let i = stateCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [stateCopy[i], stateCopy[j]] = [stateCopy[j], stateCopy[i]];
    }
    return stateCopy.slice(0, n);
  }
  rev(n = this.state.length) {
    if (n === 0) return this.state;
    const stateCopy = [...this.state];
    if (n > 0) {
      const subArr = stateCopy.slice(0, n);
      subArr.reverse();
      stateCopy.splice(0, n, ...subArr);
      return stateCopy;
    } else if (n < 0) {
      const subArr = stateCopy.slice(this.state.length - Math.abs(n));
      subArr.reverse();
      stateCopy.splice(this.state.length - Math.abs(n), Math.abs(n), ...subArr);
      return stateCopy;
    } else return null;
  }
  fill(val, start = 0) {
    const stateCopy = [...this.state];
    if (val >= 0) {
      return stateCopy.splice(
        start,
        this.state.length,
        ...this.state.slice(start).map((elem) => val)
      );
    }
  }
}

const myWonderfulArr = new WonderfulArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(myWonderfulArr.fill('gay', 3));
