const image0 = document.getElementById("0");
const image1 = document.getElementById("1");
const image2 = document.getElementById("2");
const image3 = document.getElementById("3");
const image4 = document.getElementById("4");
const image5 = document.getElementById("5");
const image6 = document.getElementById("6");
const image7 = document.getElementById("7");
const image8 = document.getElementById("8");
const image9 = document.getElementById("9");
const image10 = document.getElementById("10");
const image11 = document.getElementById("11");

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

/*
for (let i = 0; i <= 11; i++) {
  tabImagesQuestion[i].src =
    `../assets/ressources/memory-legume/${tabImages[i]}.svg`;
}*/

//variable compteur de cartes retournée

//creer un tableau des cartes selectionées
const returnTabs = [];
const tabImagesFound = [];

//ajouter évènement sur toute les cartes
for (const image of tabImagesQuestion) {
  image.addEventListener("click", turnImage);
}

function turnImage() {
  let imgId = this.getAttribute("id");

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
      }, 1500);
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
