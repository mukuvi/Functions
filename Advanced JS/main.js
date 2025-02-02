let firstName = "james";
firstName += " he is a good boy";
// console.log(firstName.length);
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());
// console.log(firstName.slice(0, 5));
// console.log(firstName.split(""));
// console.log(firsonsole.log(jsonString);
// console.log(parseObject);tName.split(" "));
// console.log(firstName.split("").join(" + "));

//slice operator
let nameofh = "james";
// console.log(nameofh.slice(1, 3));

//type operator
let money = "50";
money = parseInt(money); //or money = +money; or money = Number(money);
money = money.toString();
// console.log(typeof money);

// control flow
let button = 0;
let text;
switch (button) {
  case 1:
    text = "ON";
    break;
  case 0:
    text = "OFF";
    break;
  default:
    text = "----";
}
// console.log(text);

//FOR LOOP

for (let i = 0; i < 3; i++) {
  // console.log(`The value is ${i}`);
  for (let j = 0; j < 2; j++) {
    // console.log(`The value is ${j}`);
  }
}

//While LOOP

let i = 0;
while (i < 10) {
  // console.log(`Thew value is ${i}`);
  i++;
}

//DO WHILE LOOP

let k = 0;
do {
  // console.log("Hello Dad and Mum");
  k++;
} while (k <= 5);

//logical operators AND(&&) OR(||) NOT(!)

const a = true;
const b = false;
const c = 2;

// console.log(a && b); //AND
// console.log(a || b); //OR
// console.log(a != b); //NOT
// console.log(!a);

//ARRAYS

let fruits = ["mango", "banana", "apple", "orange"];
let Efruits = ["strawberries", "watermelon", "pineapple"];

const allfruits = fruits.concat(Efruits); //concat method
fruits.push("avocado");
fruits.pop();
fruits.shift();
fruits.unshift("tomato");
fruits.sort();
let fruit;

// for (fruit in allfruits) {
//   console.log(allfruits[fruit]);
// }

//OBJECTS

let lessons = {
  math: 88,
  eng: 78,
  kisw: 90,
  sci: { bio: 89, chem: 72, phy: 96 },
  tech: ["agri", "comp"],
  89: "Total",
};
lessons.geo = 92;
// console.log(lessons.sci.bio); //dot notation
// console.log(lessons["89"]); //bracket notation
// console.log(lessons);

//functions

function sayHello(name) {
  console.log(`Hello ${name}`);
}
// sayHello("james");
// sayHello("mutiso");
//function declaration
function callMe(a, b) {
  return a + b;
}
// console.log(callMe(12, 34));

//function expression
const greetings = function (user) {
  console.log(`Hello ${user}`);
};
// greetings("James");

//Function callback = when we provide a function as an (Argument)to another function that fucntion is known as callback function

function callbackFunc(functOne) {
  const numb = 30;
  functOne(numb);
}
callbackFunc(function (numb) {
  // console.log(numb);
});

//Object methods

function greet() {
  return `Hello my name is ${person.names} and i am ${person.age} years old.`;
}

// console.log(person.greet());
//method inside an object in javascript

const persona = {
  namess: "John",
  ages: 22,
  greett: function () {
    return `Hello its ${this.namess} chatting, and am ${this.ages} years old`;
  },
};
// console.log(persona.greett());

//JSON
//used for transmitting data between between servers and web applications
const myInfo = {
  name: "Jm ngandu ",
  age: 20,
  email: "jm@gmail.com",
  isSubsribed: true,
  hobbies: ["Reading", "Coding", "Cooking"],
  address: {
    city: "Nairobi",
    location: "Westie",
  },
};

// const jsonString = JSON.stringify(myInfo); //convert to json file
// const parseObject = JSON.parse(jsonString); //convert to object
// // console.log(jsonString);
// // console.log(parseObject);

//DATE AND TIME

//year, month,days,hours,minutes,seconds,milliseconds
const allDate = new Date(2024, 6, 28, 16, 23, 1, 2);
// console.log(allDate);
const currentDate = new Date();

const thisYear = currentDate.getFullYear(); //year
const thisMonth = currentDate.getMonth(); //month
const thisDay = currentDate.getDay(); //day
const thisHour = currentDate.getHours(); //hours
const thisMinute = currentDate.getMinutes(); //minute
const thisMillisecond = currentDate.getMilliseconds(); //milliseconds
// console.log(`Year ${thisYear}`);
// console.log(`Month ${thisMonth}`);
// console.log(`Day ${thisDay}`);
// console.log(`Hour ${thisHour}`);
// console.log(`Minute ${thisMinute}`);
// console.log(`Millisecond ${thisMillisecond}`);
// console.log(currentDate.toDateString()); //datestring
// console.log(currentDate.toISOString()); //ISO format
// console.log(currentDate.toLocaleString());

//set interval-the code keeps on running after the set interval

// setInterval(() => {
//   // console.log("hello dad and mum");
// }, 2000);

// //settimeout-the code waits for the set time and executes
// setTimeout(function () {
//   // console.log("This function will be executed after three seconds");
// }, 3000);

// //stop interval after 10seconds

// const intervalId = setInterval(() => {
//   // console.log("This function is being executed after an interval");
// }, 1000);
// setTimeout(() => {
//   // clearInterval(intervalId);
//   // console.log("interval stopped");
// }, 10000);

//TEMPLATE STRINGS//

// console.log(`
// hello
//      i am
//           james`);
// console.log(`${3 + 9}`);

function info() {
  return `My name is james`;
}
// console.log(`${info()}`);

//ARROW FUNCTIONS

const namei = (jina, nchi) => {
  return `mama ${jina} anaishi ${nchi}`;
};
// console.log(namei("africa ", "kenya"));

hey = (username) => `hello ${username}`; //for a single line code
// console.log(hey("james"));

county = (center) => ` ${center}`;
// console.log(county("maliku"));

//ENHANCED OBJECT LITERALS - are set of enhancements to the syntax for defining objects in javascript

function userr(name, age, work) {
  return {
    name,
    age,
    work,
    intro: () => {
      console.log(`My name is ${name} & I'm ${age} years old & I'm a ${work}`);
    },
  };
}
const tesla = userr("tess", 20, "engineer");
const newton = userr("newton", 23, "programmer");
// console.log(tesla);
// console.log(newton.intro());

//DEFAULT FUNCTION PARAMETERS -allow you to assign default values to function parameters

function deffun(rate = 0) {
  if (rate === 5) {
    console.log(`High ratings :)`);
  } else if (rate === 0) {
    console.log(`Low ratings :(`);
  }
}
// deffun();

function multiply(a, b = 1) {
  return a * b;
}
// console.log(multiply(6, 7));

//SPREAD OPERATOR -it takes an iterable(eg an array ) and expands it into indivudual elements

//spread in functions

function spreadMe(a, b, c, d) {
  console.log("A", a);
  console.log("B", b);
  console.log("C", c);
  console.log("D", d);
}
const towns = ["Kitui", "turkana", "lamu", "isiolo"];
// spreadMe(...towns);

//spread operator in arrays

const subjects = ["Geography", "history", "English"];
const others = ["Physics", "Biology", "Chemistry"];
const allSubjects = [...subjects, ...others, "Computer"];
// console.log(allSubjects);

//spread operator on objects
const petrolStations = { Shell: 1, Total: 2 };
const otherStations = { Rubis: 3, Oilibya: 3 };
const allStations = { ...petrolStations, ...otherStations };
// console.log(allStations);

//REST OPERATOR-allows a function to accept an indefnite number of arguments
function userD(...userData) {
  console.log(userData);
}
// userD("javascript", "is fun");

function someone(first, last, ...hobbies) {
  console.log("First Name: ", first);
  console.log("Last Name: ", last);
  console.log("Hobbies: ", hobbies);
}
// someone("james", "mukuvi", "programming", "cooking", "Travelling");

// DESTRUCTURING - allows us to "unpack" values from data-structures (Arrays,objects,functions) into separate distinct variables

//ARRAY DESTRUCTURING -name doesn't matter but the order does matter

const family = ["father", "mother", "children"];

const [x, y, z] = family;

// console.log(x);

function f() {
  return [1, 2];
}
let l, m;
[l, m] = f();
// console.log(l);
// console.log(m);

function fn() {
  return [1, 2, 3];
}
const [o, , p] = fn(); //ignoring a value in return
// console.log(o);
// console.log(p);

//assigning rest of an array to a variable
const [d, ...e] = ["laptop", "phone", "computer"];
// console.log(e);

const colors = ["red", "green", "blue", "yellow", "orange"];
const [color1, , color2, ...color3] = colors; //all
// console.log(color1);
// console.log(color2);
// console.log(color3);

//OBJECT DESTRUCTURING - order doesn't matter but the name does matter

const coolCity = {
  theName: "Eldoret",
  theCounty: "Uasin Gishu",
  theBusiness: "Farming",
};

const { theName, theCounty, theBusiness } = coolCity;

// console.log(
//   `${theName} town is in ${theCounty} county and main economic activity is ${theBusiness}`
// );

//ADVANCED DESTRUCTURING
const coolTown = {
  theName: "Eldoret",
  theCounty: "Uasin Gishu",
  theBusiness: "Farming",
};
const {
  theName: theTown, //for example changing the keys
  theCounty: thePlace,
  theBusiness: theEconomic,
} = coolTown;
// console.log(
//   `${theTown} town is in ${thePlace} county and main economic activity is ${theEconomic}`
// );

//OBJECT DESTRUCTURNG AND REST OPERATOR

let { ab, bc, ...rest } = { ab: 100, bc: 200, cd: 300, de: 400, ef: 500 };
// console.log(rest);

//FUNCTION DESTRUCTURING
const thePerson = {
  isName: "James Mukuvi",
  isAge: 20,
  isCountry: "Kenya",
};

function personInfo(thePerson) {
  console.log(`Name: ${thePerson.isName}`);
  console.log(`Age: ${thePerson.isAge}`);
  console.log(`Country: ${thePerson.isCountry}`);
}
// personInfo(thePerson);

const jamesM = {
  fam: "jamess",
  car: "mercedes benz",
  apartment: "JAMESAPP",
};

function jamesf({ fam, car, apartment }) {
  //function destructured
  console.log(`FAMILY: ${fam}`);
  console.log(`CAR: ${car}`);
  console.log(`APARTMENT: ${apartment}`);
}
// jamesf(jamesM);

//NESTED DESTRUCTURING

const songs = [
  { title: "Lucky You ", singer: "Joyner", duration: "4.34" },
  { title: "Just Like You ", singer: "NF", duration: "3.23" },
  { title: " Humble singer", singer: "Kendrick Lamar", duration: "2.33" },
  { title: " Old Town Road", singer: "Lil Nas X", duration: "1.43" },
  { title: "Cold Sholder ", singer: "Central Cee", duration: "5.23" },
];

const [, , { singer }] = songs;
const [, , , { title: mr }] = songs;
// console.log(singer);
// console.log(mr);

// console.log(songs[0].title);

//TERNARY OPERATOR - is a concise way of writing conditional expressions
//it takes three operands: a condition followed by a question mark(?), an expression to execute if the condition is true, followed by a colon(:), and an expression to execute if the condition is false

// condition ? exprIfTrue : exprIfFalse;
let password = 8;
function passwordChecker(pw) {
  // if (pw >= 8) {
  //   return `Strong Password`;
  // } else {
  //   return `  Week password`;
  // }
  return pw >= 8 ? `Strong Password` : `Week password`;
}
const passW = passwordChecker(password);
// console.log(passW);

const age = 10;

const drink = age >= 18 ? "You can take alcohol" : "You can take juice";

// console.log(drink);

//FOR IN LOOP - is used to iterate over the enumerable properties of an object. It is a way to loop through the keys of an object
const isMe = {
  name: "James",
  age: 21,
  gender: "male",
};
// for (me in isMe) {
//   console.log(isMe[me]);
// }

const list = ["one", "two", "three", "four"];
// for (index in list) {
//   console.log(`${index}: ${list[index]}`);
// }

//FOR-OF LOOP -It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which make the code more readable and less error-prone
let people = ["James", "John", "Judy", "Jane"];
// for (peo of people) {
//   console.log(peo);
// }

const textie = "Welcome";
// for (char of textie) {
//   console.log(char);
// }

//FOREACH METHOD - when we call forEach Helper we pass in anonymous callback function
//This function gets called one time for every element in the array

const colours = ["black", "white", "red", "green", "yellow"];

// colours.forEach((colour) => console.log(colour));

//MAP METHOD - creates a new array populated with the results of calling a provided function on every element in the calling array

let numbers = [1, 2, 3, 4, 5, 6];
let double = numbers.map((num) => num * 2);

let triple = numbers.map((tri) => tri ** 3);
// console.log(double);
// console.log(triple);

let cars = [
  { carName: "Mercedes", carType: "E300" },
  { carName: "Subaru", carType: "Outback" },
  { carName: "Toyota", carType: "Hillux" },
];
const brands = cars.map((carr) => {
  return [carr.carName, carr.carType];
});

// console.log(brands);

const numberValues = [2, 3, 4, 5, 6, 7, 8, 9];
function numberCalc(val) {
  return val * 10;
}

const timesTen = numberValues.map(numberCalc);
// console.log(timesTen);

//FILTER METHOD - it allows you to create a new array containing elements that pass a certain condition.
let myCars = [
  { carName: "Mercedes", carType: "E300" },
  { carName: "Subaru", carType: "Outback" },
  { carName: "Toyota", carType: "Hillux" },
];
let filterType = myCars.filter((myCar) => myCar.carType == "Hillux");

// console.log(filterType);

const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 16, hdd: 300 },
  { ram: 32, hdd: 400 },
];

let largeSpace = computers.filter((comp) => comp.ram >= 16);
// console.log(largeSpace);

const agess = [32, 33, 16, 40];
let adult = agess.filter((ag) => ag > 18);
// console.log(adult);

//print only those words which length is greater than 6

const wordss = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

let largeLength = wordss.filter((lale) => lale.length > 6);
// console.log(largeLength);

//FIND METHOD - allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found
let myBest = [
  { carName: "Mercedes", carType: "E300" },
  { carName: "Subaru", carType: "Outback" },
  { carName: "Toyota", carType: "Hillux" },
  { carName: "Porsche", carType: "cayenne" },
];

const brandName = myBest.find((carbrand) => carbrand.carName === "Porsche");
// console.log(brandName);

//EVERY METHOD -tests whether all elements in the array pass the condition specified by the provided callback function. It returns true for every element, and false if any element fails the condition.

const friends = ["Joshua", "Carol", "Alex"];
const everyFriend = friends.every((friend) => friend.length === 4);

// console.log(everyFriend);

//SOME METHOD - tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for at least one element, and false if no element passes the condition
const friendss = ["Joshua", "Carol", "Alex"];
const someFriend = friendss.some((friend) => friend.length === 4);

// console.log(someFriend);

//REDUCE METHOD - It applies the reducer function to each element of an array, accumulating the results into a single value. It is often used to perform calculations or  aggregations on array elements and simplify the array into a single value.

const favNumbers = [1, 2, 3, 4, 5];
const sum = favNumbers.reduce((e, f) => {
  return e + f;
});
// console.log(sum);

//MAP DATA STRUCTURE - Allows you to store key-value pairs where both the keys and values can be  of any data type. Map preserves the order of key-value pairs as they were inserted, map provides built-in methods for easy iteration over its elements

const map = new Map();
const keyOne = "string";
const keyTwo = {};
const keyThree = function () {};
map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");
// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete(keyTwo));
// console.log(map);
// console.log(map.size);

// for (let [key, value] of map) {
//   console.log(`${key} -- ${value}`);
// }

//SETS DATA STRUCTURE -Represents a collection of unique values. unlike arrays, sets allows you to store only unique values, which means duplicate values are automatically removed.

//const mySet = new Set() -- how set is created

const initialValues = [1, 2, 2, 2, 3, 4];
const mySet = new Set(initialValues);
mySet.add(5);
mySet.add(7);
// console.log(mySet.has(2));-- //returns true or false if the set contains the value

// for (let item of mySet) {
//   console.log(item);
// }

mySet.delete(3); //deletes a certain value
mySet.clear(); //clears everything in the set
// console.log(mySet);

//SYMBOLS IN JAVASCRIPT -Is a unique and immutable primitive data type, a symbol is often used as an identifier for object properties to avoid potential naming conflicts

// const mySymbol = Symbol() -- how set is created
const mySymbol = Symbol();

// console.log(mySymbol);

//promise
// fulfilled - then,finally
// rejected - catch,then, finally
//.then() - is used to handle successful outcome of a promise in javascript it takes two arguments:(onFulfilled, onRejected)
//.catch() - returns a promise and deals with regected case only

function checkNumber(letter) {
  return new Promise((resolve, reject) => {
    if (letter % 2 == 0) {
      resolve(`${letter} is an even number`);
    } else {
      reject(`${letter} is an old number`);
    }
  });
}
// const numberType = 7;
// checkNumber(numberType)
//   .then((message) => {
//     console.log(`success: ${message}`);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

//await - is used to wait for a promise, it can be only used inside an async function within regular javascript code

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data retrieved from the server");
    }, 2000);
  });
}

async function checkData() {
  try {
    const theData = await fetchData();
    console.log(theData);
    console.log("Execute remaining task");
  } catch (error) {
    console.log(error);
  }
}
// checkData();

//reading json data
async function fetchJsonData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// fetchJsonData();

//Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)
//https://www.youtube.com/watch?v=ZYb_ZU8LNxs
