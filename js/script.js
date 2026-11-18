//-----------------------------------------------------------------------------------------------------------

const tabImagesQuestion = [];
const tabImages = [1, 2, 3, 4, 5, 6];

//dupliquer le tableau
tabImages.push(...tabImages);

//----------------------------------------------------------------------------
initMemoryTable(3, 4);

//----------------------------------------------------------------------------

function initMemoryTable(line, column) {
  if (document.getElementById("tableGame")) {
    for (const image of tabImagesQuestion) {
      image.removeEventListener("click", turnImage);
    }
    document.getElementById("tableGame").remove();
    tabImagesQuestion.length = 0;
  }
  //------------------------------------------------------------
  // construction du tableau
  const section = document.createElement("section");
  section.id = "tableGame";
  document.getElementById("section").appendChild(section);

  const table = document.createElement("table");
  section.appendChild(table);

  let id = 0;
  for (let i = 0; i < line; i++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (let j = 0; j < column; j++) {
      const index = id;
      id++;
      setTimeout(() => {
        const td = document.createElement("td");
        const img = document.createElement("img");

        img.className = "question";
        img.src = "../assets/ressources/question.svg";
        img.id = String(index);

        tr.appendChild(td);
        td.appendChild(img);
      }, 50 * index);
    }
  }
  //-------------------------------------------------------------

  //charger les images interrogations dans un tableau
  setTimeout(() => {
    for (let i = 0; i <= 11; i++) {
      tabImagesQuestion.push(document.getElementById(`${i}`));
    }
    //ajouter évènement sur toute les cartes
    for (const image of tabImagesQuestion) {
      image.addEventListener("click", turnImage);
    }
  }, 1000);
}
//----------------------------------------------------------------------------
//mélanger le tableau d'images
shuffle(tabImages);

// Algorithme de Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//----------------------------------------------------------------------------

//creer un tableau des cartes selectionées
const returnTabs = [];

//tableau de toute les cartes trouvées
const tabImagesFound = [];

//-----------------------------------------------------------------------------------------------------------
function initGame() {
  shuffle(tabImages);
  returnTabs.length = 0;
  tabImagesFound.length = 0;
  initMemoryTable(3, 4);
  document.getElementById("victory").style.display = "none";
  document.getElementById("resetButton").style.display = "none";
  document.getElementById("playTitle").style.display = "flex";
  document.getElementById("rick").style.display = "none";
}

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", initGame);

//-----------------------------------------------------------------------------------------------------------

//-----------------------------------
function turnImage() {
  let imgId = this.getAttribute("id");
  if (returnTabs.length === 2) {
    return;
  }
  //-----------------------------------------------------------
  // condition pour continuer de retourner des cartes
  if (returnTabs.length < 2 && this.src.includes("question")) {
    this.setAttribute(
      "src",
      `../assets/ressources/memory-legume/${tabImages[Number(imgId)]}.svg`,
    );
    //ajout de l'émément dans mon tableau d'élément retourné
    returnTabs.push(this.getAttribute("id"));
  }
  //---------------------------------------------------------
  if (returnTabs.length === 2) {
    //condition pour vérifier si les deux images sont les mêmes
    if (
      document.getElementById(`${returnTabs[0]}`).src ===
      document.getElementById(`${returnTabs[1]}`).src
    ) {
      for (let i = 0; i <= 1; i++) {
        tabImagesFound.push(returnTabs[i]);
      }
      returnTabs.length = 0;
    }
    //condition pour retourner les images si elles sont différentes
    if (
      returnTabs.length === 2 &&
      document.getElementById(`${returnTabs[0]}`).src !==
        document.getElementById(`${returnTabs[1]}`).src
    ) {
      //lancer un chrono avant de retourner les cartes selectionées
      setTimeout(() => {
        for (let i = 0; i <= 1; i++) {
          document.getElementById(`${returnTabs[i]}`).src =
            "../assets/ressources/question.svg";
        }
        returnTabs.length = 0;
      }, 1000);
    }
    //--------------------------------------------------

    if (tabImagesFound.length === tabImages.length) {
      document.getElementById("tableGame").style.display = "none";
      document.getElementById("victory").style.display = "flex";
      document.getElementById("resetButton").style.display = "flex";
      document.getElementById("playTitle").style.display = "none";
      document.getElementById("rick").style.display = "flex";
    }
  }
}
