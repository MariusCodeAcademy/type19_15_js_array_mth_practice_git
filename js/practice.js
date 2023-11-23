'use strict';
console.log('practice.js file was loaded');

const students = [
  {
    name: 'James',
    gender: 'male',
    age: 25,
    town: 'Vilnius',
    hasCar: true,
  },
  {
    name: 'Jill',
    gender: 'female',
    age: 28,
    town: 'Kaunas',
    hasCar: true,
  },
  {
    name: 'Mike',
    gender: 'male',
    age: 18,
    town: 'Kaunas',
    hasCar: false,
  },
  {
    name: 'Jane',
    gender: 'female',
    age: 22,
    town: 'Klaipeda',
    hasCar: false,
  },
  {
    name: 'Jannet',
    gender: 'female',
    age: 29,
    town: 'Klaipeda',
    hasCar: true,
  },
  {
    name: 'Cory',
    gender: 'male',
    age: 30,
    town: 'Siauliai',
    hasCar: true,
  },
  {
    name: 'Minks',
    gender: 'male',
    age: 19,
    town: 'Siauliai',
    hasCar: false,
  },
];
/*
{
  name: 'James',
  gender: 'male',
  age: 25,
  town: 'Vilnius',
  hasCar: true,
}
*/
console.table(students);

// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu

// Psiaudo kodas
// sukurti ir patalpinti ul
const ulEl = document.createElement('ol');
document.body.append(ulEl);
// sukti cikla per students
students.forEach((singleStudObj) => {
  // kuriam li
  const liEl = document.createElement('li');
  // is kiekvieno objekto paimti varda ir amziu
  // console.log('singleStudObj.name ===', singleStudObj.name);
  const liText = `name: ${singleStudObj.name}, age: ${singleStudObj.age}`;
  // console.log('liText ===', liText);
  // idedam i li texta
  liEl.textContent = liText;
  // li talpinam htmle ul elemente
  ulEl.append(liEl);
});
console.log('ulEl ===', ulEl);
// console.log('students[0].name ===', students[0].name);
