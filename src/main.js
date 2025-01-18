import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const collages = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const series = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const sources = [
  "./images/casino.jpg",
  "./images/moon.jpg",
  "./images/wheel.jpg",
  "./images/train.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      1st Section
        <div class="three-model">
          <img src="./final/final.jpg" id="1st" alt="1st Section Image" />
        </div>
        <div id="images-description">
          <div id="images">
            ${collages
              .map(
                (collage, index) => `<img src="${collage}" alt="image${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description"> Creating this cadavre exquisite was a new and funny experience for me. I started with a exploration of the concept and various styles/methods before deciding to base mine on a city I find similar to Las Vegas. I focused on removing irrelevant elements and replacing it for stuff that resonate with me, like ariplanes and trains for travel, a roller coaster and ferris wheel for amusement, towering for amazing skyscrapers, and beautifil moon, etc. This process taught me how to merge diverse personal elements into a cohesive base of images, but more important, it challenged me to use codes for creating a portfolio, this experience was stressful and rewarding. Finally, I discovered that many of my personal interests are interconnected and could really coexist in one space. </h4>
        </div>
      </div>

      <div id="project-row">
      2nd Section
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${series
              .map(
                (serie, index) => `<img src="${serie}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>

      <div id="project-row">
      3rd Section
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="https://ca.pinterest.com/pin/950611433849087355/" target="_blank">
              <img src="./images/casino.jpg" alt="casino" />
            </a>
            <a href="https://ca.pinterest.com/pin/619667230005328777/" target="_blank">
              <img src="./images/moon.jpg" alt="moon" />
            </a>
            <a href="https://ca.pinterest.com/pin/950611433849093575/" target="_blank">
              <img src="./images/wheel.jpg" alt="wheel" />
            </a>
            <a href="https://ca.pinterest.com/pin/950611433849093736/" target="_blank">
              <img src="./images/train.jpg" alt="train" />
            </a>
          </div>
          <h4 id="description">
            Image 1. Alisa, A. (n.d.). Jackpot Beefee casino [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849087355/. <br> 
            Image 2. Dreamstime. (2024). Vector Full Moon [Image]. Pinterest. https://ca.pinterest.com/pin/619667230005328777/. <br>
            Image 3. Allana. (2024). [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093575/. <br>
            Image 4. Tetsudo, S. (n.d.). Train [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093736/.
          </h4>
          </div>
      </div>
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
createThreeScene("#model1", "/3DModels/project1/final.jpg");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");