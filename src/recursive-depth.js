const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 0;
    if (Array.isArray(arr)) {
        if (arr.length == 0) level = 1;
        else {
            arr.forEach(item => {
                let levelItem = 1;
                levelItem += this.calculateDepth(item);
                if(levelItem > level) level = levelItem;
            })
        }
    }
    return level;
  }
};