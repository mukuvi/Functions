//call back functions

let myname = (name, school) => {
  console.log(`my name is ${name}`);
  school();
};
let theschool = () => {
  console.log(`i am a student at eldoret university`);
};
// myname("james", theschool);

//promises

let locateRental = (money) => {
  return new Promise((resolve, reject) => {
    if (money <= 5000) {
      setTimeout(() => {
        resolve(`I have a place to live `);
      }, 1000);
    } else reject("The rental is too expensive for me");
  });
};
locateRental(3000);
// .then((message) => {
//   console.log(message);
// })
// .catch((error) => {
//   console.log(error);
// })
// .finally(() => {
//   console.log(`The day was spend finding a better place to live in`);
// });

//async / await

// async function callMe(time) {
//   try {
//     await abc;
//   } catch (error) {
//     console.log("something happened");
//   } finally {
//     console.log("repeat again");
//   }
// }
// callMe();

//fetch data
//jsopaceholder apis
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//pokeapi

// fetch("https://pokeapi.co/api/v2/pokemon/pikachuu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not fetch the resource");
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.log(error));

async function fetchData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!response.ok) {
      throw new Error("response not found");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// fetchData();
