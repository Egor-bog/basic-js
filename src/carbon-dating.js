const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let rezult = 0;
  if (typeof(sampleActivity) === 'string') {
      if (sampleActivity === NaN ) {return false;}
      if (sampleActivity < 0)  {return false;}
      if (sampleActivity ===  Infinity)  {return false;}
if (sampleActivity > 0 && sampleActivity <= 15) {
  rezult = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693/HALF_LIFE_PERIOD));
}
  if (rezult === NaN ) {return false;}
  if (rezult < 0)  {return false;}
  if (rezult ===  Infinity)  {return false;}

  return rezult;
}
  else {
    return false;
  }
};