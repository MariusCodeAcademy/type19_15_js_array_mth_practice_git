'use strict';
console.log('main.js file was loaded');

const mainArr = [2, 12.5, 33, -7.2, 28, 49, -17, 19.9, 42, -14.45, -10, 20];
console.log('mainArr ===', mainArr);
// grazinti nauja masyva pakelti masyvo narius kvadratu

let kvadratuArr = mainArr.map((sk) => {
  let skPakeltasKv = sk * sk;
  skPakeltasKv = Math.pow(sk, 2);
  skPakeltasKv = sk ** 2;
  // console.log('skPakeltasKv ===', skPakeltasKv);
  return skPakeltasKv;
});
kvadratuArr = mainArr.map((sk) => sk * sk);
console.log('kvadratuArr ===', kvadratuArr);

// 6. Atrinkti tiktai lyginių skaičių masyvą
const lyginiai = mainArr.filter((sk) => sk % 2 === 0);
console.log('lyginiai ===', lyginiai);
let sk = 20;
console.log(sk % 2 === 0);

// 8. Visas neigiamas vertes masyve padaryti teigiamomis
let onlyPositivesArr = mainArr.map((sk) => {
  // kiekviena reiksme kaip sk
  // tikrinti ar sk yra maziau uz 0
  // if (sk < 0) {
  //   return sk * -1;
  // }

  // return sk;
  // sk < 0 ? return sk * -1 : return sk;
  return sk < 0 ? sk * -1 : sk;
  // jei taip tai * -1
  // grazinti reiksme kad gryztu i onlyPositivesArr
});
onlyPositivesArr = mainArr.map((sk) => (sk < 0 ? sk * -1 : sk));
onlyPositivesArr = mainArr.map((sk) => Math.abs(sk));
console.log('onlyPositivesArr ===', onlyPositivesArr);

// 13. Atrinkti kas penktą elementą
// panaudoti filter
let kasPenktas = mainArr.filter((sk, idx) => {
  if (idx % 5 === 0) {
    return true;
  }
});
kasPenktas = mainArr.filter((sk, idx) => idx % 8 === 0);
console.log('kasPenktas ===', kasPenktas);
function atrinkKas(kelintas) {
  let rez = mainArr.filter((sk, idx) => idx % kelintas === 0);
  return rez;
}

let atrArrow = (kelintas) => mainArr.filter((sk, idx) => idx % kelintas === 0);

const atrinkta = atrinkKas(10);
console.log('atrinkta ===', atrinkta);
