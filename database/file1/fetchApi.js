async function userData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/p1");
    if (response.ok) {
      let data = await response.json();
      console.log(`User data: ${data.title}`);
    } else {
      throw new Error(`Request failed with status ${response.status} `);
    }
  } catch (error) {
    console.log(`An error occured ${error}`);
  }
}
userData();
