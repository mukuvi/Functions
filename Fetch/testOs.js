async function testOs() {
  const userId = document.getElementById("userId").value;
  const albumName = document.getElementById("userName");
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${userId}`
    );
    if (!response.ok) {
      throw new Error("Response is not ok");
    }
    const album = await response.json();
    albumName.innerHTML = `${album.title}`;
  } catch (error) {
    console.log(`${error}`);
  }
}
