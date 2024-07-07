var myAge = 33; // variable 'myAge' declared as 33
var earlyYears = 2 * 10.5; // variable 'earlyYears' declared as 2 x 10.5

var laterYears = (myAge - 2) * 4; // variable 'laterYears' declared as the number of years following the first 2 in 'myAge', multiplied by 4

console.log(earlyYears);
console.log(laterYears);
myAgeInDogYears = earlyYears + laterYears; // variable 'myAgeInDogYears' declared as sum of 'earlyYears' and 'laterYears'
myName = 'Jake'.toLowerCase(); // variable 'myName' declared as 'Jake' - converted to lowercase
console.log(`My name is ${myName}.  I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); // name, age, and age in dog years expressed in statement using string interpolation
