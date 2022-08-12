module.exports = function check(str, bracketsConfig) {
  
  let array = [];
  
  for (let i = 0; i < bracketsConfig.length; i++) {
      array.push(bracketsConfig[i].join(''))
  };
  
  for (let i = 0; i < array.length; i++) {
      if (str.includes(array[i])) {
          str = str.replace(array[i], '');
          i = -1;
      }
   };
  
  
   if (str) {
       return false
   } else {
       return true
   }
}
