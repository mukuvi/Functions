async function userData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (response.ok) {
      let data = await response.json();
      console.log("Data received:", data);
    } else {
      console.error("HTTP Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

userData();
