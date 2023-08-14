'use strict';

function BinarioADecimal(num) {
   var decimal = 0
   var arrayNum = num.split('')
   var arrayNumRev = arrayNum.reverse()
   for (var i = 0; i < arrayNumRev.length; i++) {
      decimal += arrayNumRev[i] * 2 ** i
   }
   return decimal
}

function DecimalABinario(num) {
   if (num === 0) {
      return 0;
   }
   var binary = '';
   while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
   }
   return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
