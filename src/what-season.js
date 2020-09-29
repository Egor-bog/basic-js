const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {return rezult = 'Unable to determine the time of year!';}
  if (date  == null) { 
    throw new Error('Error');
  }
  let fake = new Date(date.toString());
if (fake.getFullYear() === date.getFullYear() && fake.getMonth() === date.getMonth() &&
 fake.getDate()=== date.getDate()) {

  let result = '';
  let month = date.getMonth()
  
  if (month >= 0 && month < 2 || month === 11) {
    rezult = 'winter';
  }
  else if (month >= 2 && month < 5) {
    rezult = 'spring'
  }
  else if (month >= 5 && month < 8) {
    rezult = 'summer'
  }
  else if (month >= 8 && month < 11) {
    rezult = 'autumn'

 }
}
 else {throw new Error('Error');
 
  }

 return rezult;

};
