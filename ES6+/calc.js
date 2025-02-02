let rent = [2000, 3500, 4500, 3700, 5000, 4000];

let total = 0;
for (const payRent of rent) {
  //   console.log(payRent);
  total += payRent;
}

console.log(total);

let myPocket = 0;
for (const mySavings of rent) {
  //   console.log(mySavings);
  myPocket += mySavings;
}
console.log(myPocket);
