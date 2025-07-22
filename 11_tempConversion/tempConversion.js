const convertToCelsius = function(temp) {
  let converted = ((temp - 32) / 1.8);
  converted = +converted.toFixed(1);
  return converted;
};
console.log(convertToCelsius(32));
const convertToFahrenheit = function(temp) {
  let converted = (temp * 1.8 + 32);
  converted = +converted.toFixed(1);
  return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
