// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

const container = document.getElementById("container");

function renderImages() {
  for (let i = 0; i < imgs.length; i++) {
    container.innerHTML = `<img class="team-img" src="${imgs[i]}">`;
  }
}

renderImages();

//part 2
// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const img = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

const wrapper = document.getElementById("container");

function renderImages() {
  let imgsDOM = "";
  for (let i = 0; i < img.length; i++) {
    imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`;
  }
  container.innerHTML = imgsDOM;
}

renderImages();
