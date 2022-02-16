class WonderfulArray<T> {
  state: T[];
  constructor(initialVal = []) {
    this.state = initialVal;
  }
  first() {
    return this.state[0];
  }
  last() {
    return this.state[this.state.length - 1];
  }
  // sum() {
  //   return this.state.reduce((a, b) => a + b, 0);
  // }
  sample() {}
}

const myWonderfulArr = new WonderfulArray([1, 2, 3]);

console.log(myWonderfulArr.first());
