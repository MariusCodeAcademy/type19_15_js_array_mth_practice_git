'use strict';
console.log('mixed.js file was loaded');

const mixedArray = [
  'banana',
  1,
  'giraffe',
  'pizza',
  true,
  2,
  false,
  'unicorn',
  7,
  'laughter',
  true,
  'and',
  3,
];

// sukurti funkcija, kurii ima masyva kaip argumenta
// a. grazina visu jo skaiciu suma
// b. grazina visu jo skaiciu vidurki

/**
 *
 * @param {(string | number | boolean)[]} arr
 */
function calculateFromArr(arr) {
  // psiaudo kodas
  let suma = 0;
  let kiekSkaiciu = 0;
  console.log('suma ===', suma);

  // sukti cikla per masyva
  arr.forEach((elementas) => {
    // patikrinti ar tipas yra sk
    if (typeof elementas === 'number') {
      // jei sk tai sudeti su kazkuo
      console.log('sk ===', elementas);
      kiekSkaiciu++;
      suma += elementas;
    }
  });
  console.log('suma ===', suma);
  console.log('kiekSkaiciu ===', kiekSkaiciu);
  return suma;
}

let rez = calculateFromArr(mixedArray);
console.log('rez ===', rez);

// atrikri skaicius
const skArr = mixedArray.filter((el) => typeof el === 'number');
console.log('skArr ===', skArr);

const daug2 = skArr.filter((sk) => sk > 2);
console.log('daug2 ===', daug2);

let liArr = daug2.map((sk) => `<li>${sk} skaicius</li>`);

liArr = mixedArray
  .filter((el) => typeof el === 'number')
  .filter((sk) => sk > 2)
  .map((sk) => `<li>${sk} skaicius</li>`);

console.log('liArr ===', liArr);
