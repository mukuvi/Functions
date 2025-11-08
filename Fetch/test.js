async function fetchUser() {
  const userId = document.getElementById("userId").value;
  const userName = document.getElementById("userName");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Wrong response");
    }
    const user = await response.json();
    userName.innerHTML = `
    <h2> NAME: ${user.name}</h2> 
    <p> <b>USERNAME:</b> ${user.username}</p>
    <p> <b>Email:</b> ${user.email}</p>
    <p><b>Company:</b> ${user.company.name}</p>
    
    `;
  } catch (error) {
    console.log(`${error}`);
  }
}
