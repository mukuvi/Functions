let a = new Promise((resolve, reject) => {
  let b = 1 + 1;
  if (b === 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
});
a.then((message) => console.log(`The display shows ${message}`)).catch(
  (message) => console.log(`The display shows ${message}`)
);
