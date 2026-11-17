const tabImagesQuestion = [];
const tabImages = [1, 2, 3, 4, 5, 6];

//dupliquer le tableau
tabImages.push(...tabImages);

//charger les images interrogations dans un tableau
for (let i = 0; i <= 11; i++) {
  tabImagesQuestion.push(document.getElementById(`${i}`));
}

//mélanger le tableau d'images
shuffle(tabImages);

//creer un tableau des cartes selectionées
const returnTabs = [];

//tableau de toute les cartes trouvées
const tabImagesFound = [];

//ajouter évènement sur toute les cartes
for (const image of tabImagesQuestion) {
  image.addEventListener("click", turnImage);
}

function turnImage() {
  let imgId = this.getAttribute("id");
  if (returnTabs.length === 2) {
    return;
  }
  // condition pour continuer de retourner des cartes
  if (returnTabs.length < 2 && this.src.includes("question")) {
    this.setAttribute(
      "src",
      `../assets/ressources/memory-legume/${tabImages[Number(imgId)]}.svg`,
    );
    //ajout de l'émément dans mon tableau d'élément retourné
    returnTabs.push(this.getAttribute("id"));
  }

  //condition pour vérifier si les deux images sont les mêmes
  if (returnTabs.length === 2) {
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
    if (tabImagesFound.length === tabImages.length) {
      document.getElementById("tableGame").style.display = "none";
      document.getElementById("victory").style.display = "flex";
      document.getElementById("startButton").style.display = "flex";
      document.getElementById("playTitle").style.display = "none";
      document.getElementById("rick").style.display = "flex";
    }
  }
}

// Algorithme de Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
