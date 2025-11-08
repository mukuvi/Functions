const message = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetch the reposnse");
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("Wrong syntax"));

//   async function myData() {
//     const dataId = document.getElementById("dataId").value;
//     const dataObject = document.getElementById("dataObject");

//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users/${dataId}`
//       );
//       if (!response.ok) {
//         throw new Error("Response is not ok!");
//       }
//       const data = await response.json();
//       const dataTitle = data.name;
//       dataObject.textContent = dataTitle;
//     } catch (error) {
//       console.log(`${error}`);
//       dataObject.textContent = "Error fetching data.";
//     }
//   }
