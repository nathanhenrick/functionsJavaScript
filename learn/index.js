//* ===========================================================================================
//* map()
//* ===========================================================================================

//! ===========================================================================================
//! DOBRAR VALORES
const numbers = [1, 4, 5, 9, 14, 23];
const doubleNumbers = numbers.map((num) => num * 2);

// console.log(numbers);
// console.log(doubleNumbers);
//! ===========================================================================================
//! FAHRENHEIT PARA CALSIUS
const fahrenheit = [0, 32, 45, 50, 75, 80, 120];
const celsius = fahrenheit.map((num) => {
  return (((num - 32) * 5) / 9).toFixed(2);
});
// console.log(celsius);

//* ===========================================================================================
//* filter()
//* ===========================================================================================

const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];
// const uniqueArray = yetAnotherArray.filter();

//* ===========================================================================================
//* reduce()
//* ===========================================================================================

const rockets = [
  { country: "Russia", launches: 32 },
  { country: "USA", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Italy", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

const totalLaunches = rockets.reduce(
  (prevValue, value) => prevValue + value.launches,
  0
);
// console.log(totalLaunches)

//* ===========================================================================================
//* every()
//* ===========================================================================================

const numberFoot = [8, 9, 1, 2, 2, 7];
const aboveTen = numberFoot.every((elem) => elem < 10);
// console.log(aboveTen)

//* ===========================================================================================
//* some()
//* ===========================================================================================

const oneArray = [1, 15, 123, 43, 23];
const aboveFifth = oneArray.some((elem) => elem >= 50);
// console.log(aboveFifth);

//* ===========================================================================================
//* find()
//* ===========================================================================================

const fruits = [
  { name: "Jca", quantity: 4 },
  { name: "Banana", quantity: 32 },
  { name: "Morango", quantity: 85 },
];
const findMorango = fruits.find((fruit) => fruit.name === "Morango");
// console.log(findMorango);

//* ===========================================================================================
//* includes()
//* ===========================================================================================

const people = [
  { id: 11, name: "Adamastor", age: 23, group: "editor" },
  { id: 47, name: "Joana", age: 38, group: "user" },
  { id: 85, name: "Nathan", age: 19, group: "editor" },
  { id: 72, name: "Maurício", age: 52, group: "admin" },
];
const filterUsers = people.filter((person => person.name.includes("th")));
// console.log(filterUsers);