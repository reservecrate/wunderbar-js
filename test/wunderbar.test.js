import { WonderfulArray } from '../src/wunderbar.js';

const myWonderfulArr = new WonderfulArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

test('basic test cases', () => {
  expect(myWonderfulArr.rev(3)).toEqual([3, 2, 1, 4, 5, 6, 7, 8, 9, 10]);
});
