//PROMISE
let stocks = {
  fruits: ["strawberry", "grapes", "bananas", "mamgo"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

async function order() {
  try {
    await is_shop_open;
  } catch (err) {
    console.log("abc doesn't exist", err);
  } finally {
    console.log("JUST DO IT");
  }
}
order();
