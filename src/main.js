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
      Assignment 1
        <div class="three-model">
          <a href="https://ca.pinterest.com/pin/950611433849251343" target="_blank">
            <img src="./final/final.png" id="model1" alt="Assignment 1Image" />
          </a>
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
            <a href="https://ca.pinterest.com/pin/950611433849093781/" target="_blank">
              <img src="./images/rusa.jpg" alt="rusa" />
            </a>
            <a href="https://ca.pinterest.com/pin/883620389396784307/" target="_blank">
              <img src="./images/firework.jpg" alt="fireworks" />
            </a>
            <a href="https://travelmexicosolo.com/meanings-of-the-mexican-flag/" target="_blank">
              <img src="./images/mex.jpg" alt="mex" />
            </a>
          </div>
          <h4 id="description">
            1. Manifesto: <br>
            Creating this cadavre exquis was a funny experience. It started by analyzing and understanding this new concept. Then I blended personal interests into a cohesive vision. I replaced irrelevant elements of the original idea with ones that resonate with me, like airplanes and trains for travel, a roller coaster and Ferris wheel for fun, a casino for entertainment, towering for architecture style, and a beautiful night with a moon and fireworks. This idea reflects my life since 2021, a period marked by frequent travel - especially back to my home in Mexico- where I have enjoyed immense fun and the opportunity to immerse myself in activities I love. However, it also captures the opposite feeling of leaving behind those utopian moments of happiness and relaxation to return to the reality of everyday life. From this assignment and the result, I learned it is important to enjoy those joyful moments while accepting life's inevitable transition and movement. This cadaver exquis is a reminder to face the future with optimism and hope, knowing that every ending brings the opportunity for a new beginning. <br>
            <br>
            2. Critical Evaluation: <br>
            - Casino and mechanical games (e.g., ferris wheels and roller coasters) symbolize excitement and fun, capturing the moments of adrenaline I love and that, in my opinion, mirror the thrill of travel and exploration. <br>
            - The beauty of a night illuminated by city lights, and a big moon evokes a sense of magic and relaxation. <br>
            - Mexican Flag and some Mexican decorations over the buildings and traditional fireworks represent my country. A place where I have so many good memories. <br>
            - Big skyscrapers are icons of urban modernity and capitalism, a symbol that my town in Mexico is currently using to represent both the joy and the excitement of adventure. <br>
            - Finally, Airplanes and Trains stand as icons of hope and excitement but also as the way back of those incredible adventures to our daily life where we need to change our interests and goals like living two lives at every moment and place, in my case one in Mexico and one back in Canada. <br>
            <br>
            3. Sources: <br>
            - Image 1. Alisa, A. (n.d.). Jackpot Beefee casino [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849087355/. <br> 
            - Image 2. Dreamstime. (2024). Vector Full Moon [Image]. Pinterest. https://ca.pinterest.com/pin/619667230005328777/. <br>
            - Image 3. Allana. (2024). [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093575/. <br>
            - Image 4. Tetsudo, S. (n.d.). Train [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093736/. <br>
            - Image 5. Ultimaterollercoaster (n.d.) Rocket Coaster [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093781/. <br>
            - Image 6. rawpixel. (n.d.). Png of Fireworks [Image]. Pinterest. https://ca.pinterest.com/pin/883620389396784307/. <br>
            - Image 7. Shelley. (2024). Meanings of Mexican Flag. Travel Mexico-Solo. https://travelmexicosolo.com/meanings-of-the-mexican-flag/. <br>
          </div>
        </div>
      </div>

      ${/* Model 2 comment 
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
          <h4 id="description">
            Image 1. Alisa, A. (n.d.). Jackpot Beefee casino [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849087355/. <br> 
            Image 2. Dreamstime. (2024). Vector Full Moon [Image]. Pinterest. https://ca.pinterest.com/pin/619667230005328777/. <br>
            Image 3. Allana. (2024). [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093575/. <br>
            Image 4. Tetsudo, S. (n.d.). Train [Image]. Pinterest. https://ca.pinterest.com/pin/950611433849093736/.
          </div>
      </div>
      */""}

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