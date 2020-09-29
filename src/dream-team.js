const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = ''; 
  if (Array.isArray(members) === false) {return false;}
  for(let name of members) {
    if (typeof(name) === 'string') {
      for (let i = 0; i < name.length; i++) {
        if (name[i] !== ' ') {
          dreamTeam += name[i];
          break;
        } 
      }
    }
  }
 
  dreamTeam = dreamTeam.toUpperCase();
  dreamTeam = dreamTeam.split('').sort().join('');
  
   
return dreamTeam;
};
