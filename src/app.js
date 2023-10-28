/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const domainNameCombinations = generateDomainNames(fruits, animals, gems, cars);
console.log(domainNameCombinations);
};

let fruits = ['apples', 'oranges', 'pears'];
let animals = ['cat', 'dog', 'snakes'];
let gems = ['ruby', 'sapphire', 'diamond'];
let cars = ['Maserati', 'Mercedes', 'McLaren']

function generateDomainNames(fruits, animals, gems, cars) {
  let domainNames = [];

  fruits.forEach((fruit) => {animals.forEach((animal) => {gems.forEach((gem) => {cars.forEach((car) => {const domainName = `${fruit}${animal}${gem}${car}.com`;
  domainNames.push(domainName); }); });});});
  return domainNames;
}
