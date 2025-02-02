/*
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"];
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(capitalized);
