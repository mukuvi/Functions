let stocks = {
  fruits: ["mango", "banana", "pineapple", "orange"],
  toppings: ["chocolates", "peanuts"],
  drinks: ["water", "milk"],
};
let isopen = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isopen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Our shop is closed");
    }
  });
};
order(2000, () => console.log(`${stocks.fruits[0]} was selected`)).catch(
  (err) => console.log(err)
);

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
