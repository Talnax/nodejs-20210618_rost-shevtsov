function sum(a, b) {
  if ([a, b].some((value) => typeof value !== 'number')) {
    throw new TypeError();
  }

  return a + b;
}

// another variant
/*
let sum = (a, b) => {
  if(isNaN(a) && isNaN(b)) {
    throw new TypeError();
  }
  return a + b;
};
*/

module.exports = sum;
