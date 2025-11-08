const names = ["james", "mary", "david", "julia", "john"];

const namesWithJ = names.filter((nam) => {
  return nam.startsWith("j");
});
console.log(namesWithJ);
