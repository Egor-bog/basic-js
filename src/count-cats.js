const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  for (let submatrix of matrix) {
    for (let element of submatrix) {
      if (element == '^^') {
        cats += 1;
      }
    }
  }
  return cats;
};