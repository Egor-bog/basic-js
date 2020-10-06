const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {    
    return chainMaker = chainMaker.length;
  },
  addLink(value) {
    chainMaker = chainMaker.push(value);
    
  },
  removeLink(position) {
    chainMaker = chainMaker.splice(position-1, 1);
  },
  reverseChain() {
    chainMaker = chainMaker.reverse();
  },
  finishChain() {
    for (i = 0; i < chainMaker.length; i++) {
      chainMaker[i] = "'(' + chainMaker[i] + ')'"; 
    }
    chainMaker = chainMaker.join("~~");
  }
};

module.exports = chainMaker;
