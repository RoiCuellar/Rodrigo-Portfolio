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
          <div id="model1"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${collages
              .map(
                (collage, index) => `<img src="${collage}" alt="image${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A cubic 3D model is a geometric representation of a cube, consisting of six equal square faces joined at right angles. Each edge of the cube is of equal length, forming a symmetrical, rigid structure. The model can be textured, colored, or transparent, and it may include variations such as beveled edges or hollow interiors, depending on its intended purpose in design, animation, or engineering.</h4>
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
            ${sources
              .map(
                (source, index) => `<img src="${source}" alt="image${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">
            Image 1. Alisa, A. (n.d.). Jackpot Beefee casino [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849087355/. <br> 
            Image 2. Dreamstime. (2024). Vector Full Moon [Image]. Pinterest. https://ca.pinterest.com/pin/619667230005328777/.
          </h4>
          
          <h4 id="description">Image 2. Dreamstime. (2024). Vector Full Moon [Image]. Pinterest. https://ca.pinterest.com/pin/619667230005328777/.</h4>
          <h4 id="description">Image 3. Allana. (2024). [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093575/.</h4>
          <h4 id="description">Image 4. Tetsudo, S. (n.d.). Train [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093736/.</h4>
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
createThreeScene("#model1", "/3DModels/project1/cube.obj");
createThreeScene("#model2", "/3DModels/project2/tree.obj");
createThreeScene("#model3", "/3DModels/project3/cottage.obj");
