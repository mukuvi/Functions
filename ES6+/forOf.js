let rent = [2000, 3500, 4500, 3700, 5000, 4000];
let total = 0;
for (const payRent of rent) {
  console.log(payRent);
  total += payRent;
}

console.log(total);

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
  {
    name: "James",
    city: "Nairobi",
  },
  {
    name: "John",
    city: "Eldoret",
  },
  {
    name: "Kate",
    city: "Kisumu",
  },
];

for (const student of students) {
  console.log(student.name + " lives in " + student.city);
}
