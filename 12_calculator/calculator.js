const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
  return array.reduce((sum, current) => sum * current, 1);
};

const power = function(a, b) {
	let result = a
  for(let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	let temp = 1
  for (let i = a ; i > 0; i--){
    temp = temp * i
  }
  return temp;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
