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
      Assignment 01
        <div class="three-model">
          <a href="https://ca.pinterest.com/pin/950611433849251343" target="_blank">
            <img src="./final/final.png" id="model1" alt="Assignment 1Image" />
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="https://ca.pinterest.com/pin/950611433849610545/" target="_blank">
              <img src="./images/pavilion.png" alt="pavilion" />
            </a>
            <a href="https://ca.pinterest.com/pin/950611433849610608/" target="_blank">
              <img src="./images/heart.png" alt="heart" />
            </a>
            <a href="https://ca.pinterest.com/pin/950611433849093575/" target="_blank">
              <img src="./images/plant.png" alt="plant" />
            </a>
          </div>
          <h4 id="description">
            1. Manifesto: <br>
            Creating this cadavre exquis was a funny experience. It started by analyzing and understanding this new concept. Then I blended personal interests into a cohesive vision. I replaced irrelevant elements of the original idea with ones that resonate with me, like airplanes and trains for travel, a roller coaster and Ferris wheel for fun, a casino for entertainment, towering for architecture style, and a beautiful night with a moon and fireworks. This idea reflects my life since 2021, a period marked by frequent travel - especially back to my home in Mexico- where I have enjoyed immense fun and the opportunity to immerse myself in activities I love. However, it also captures the opposite feeling of leaving behind those utopian moments of happiness and relaxation to return to the reality of everyday life. From this assignment and the result, I learned it is important to enjoy those joyful moments while accepting life's inevitable transition and movement. This cadaver exquis is a reminder to face the future with optimism and hope, knowing that every ending brings the opportunity for a new beginning. <br>
            <br>
          </div>
        </div>
      </div>

      <div id="project-row">
      Assignment 02
        <div class="three-model">
          <a href="https://ca.pinterest.com/pin/950611433849251343" target="_blank">
            <img src="./final/final.png" id="model2" alt="Assignment 1Image" />
          <a>
        </div>
        <div id="images-description">
          <div id="images">
            ${series
              .map(
                (serie, index) => `<img src="${serie}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">
            Image 1. Alisa, A. (n.d.). Jackpot Beefee casino [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849087355/. <br> 
            Image 2. Dreamstime. (2024). Vector Full Moon [Image]. Pinterest. https://ca.pinterest.com/pin/619667230005328777/. <br>
            Image 3. Allana. (2024). [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093575/. <br>
            Image 4. Tetsudo, S. (n.d.). Train [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093736/.
          </div>
      </div>

      ${/* Model 3 comment 
      <div id="project-row">
      3rd Section
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images"
          ${series
              .map(
                (serie, index) => `<img src="${serie}" alt="tree${index + 1}" />`
              )
              .join("")}
          </h4>
          </div>
      </div>
      */""}
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
//createThreeScene("#model1", "/3DModels/project1/final.jpg");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");