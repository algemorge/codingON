console.log('================ REST parameter Review ================');

const test2 = [11, 22, 33, 44, 55]
console.log(...test2);

function test3(...rest) {
   console.log(rest);
}
console.log(test2);