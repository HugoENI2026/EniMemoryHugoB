# ENI Memory

**ENI Memory** est un jeu de mémoire développé en HTML, CSS et JavaScript. Le joueur doit retrouver toutes les paires de cartes parmi une grille mélangée.

## Démonstration

Le projet est accessible en ligne sur GitHub Pages :

- [Ouvrir ENI Memory](https://hugoeni2026.github.io/EniMemoryHugoB/html/index.html)

## Fonctionnalités

- Présentation du jeu et de ses règles.
- Grille de jeu composée de 12 cartes représentant 6 paires de légumes.
- Mélange aléatoire des cartes à chaque partie.
- Animation lors du retournement des cartes.
- Détection automatique des paires identiques.
- Retour automatique des cartes différentes face cachée.
- Écran de victoire avec possibilité de recommencer.
- Recommencement possible avec le bouton **Recommencer** ou la barre **Espace**.
- Inscription avec validation du pseudo, de l'adresse e-mail et du mot de passe.
- Indicateur de qualité du mot de passe.
- Connexion et déconnexion de l'utilisateur.
- Affichage des informations du compte connecté.
- Interface responsive inspirée de Bootstrap.

## Pages

| Page | Description |
| --- | --- |
| `html/index.html` | Accueil et règles du jeu |
| `html/jeux.html` | Plateau de jeu |
| `html/inscription.html` | Création d'un compte |
| `html/connexion.html` | Connexion à un compte |
| `html/compte.html` | Informations du compte connecté |

## Technologies

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3
- Police personnalisée Orange Juice
- Stockage `localStorage` et `sessionStorage`

## Lancer le projet localement

Le projet ne nécessite aucune installation ni aucun serveur d'application.

1. Cloner le dépôt :

   ```bash
   git clone https://github.com/HugoENI2026/EniMemoryHugoB.git
   ```

2. Entrer dans le dossier du projet :

   ```bash
   cd EniMemoryHugoB
   ```

3. Ouvrir `html/index.html` dans un navigateur.

Pour une meilleure expérience, il est recommandé d'utiliser l'extension **Live Server** de Visual Studio Code :

1. Ouvrir le dossier du projet dans VS Code.
2. Démarrer Live Server.
3. Ouvrir `html/index.html`.

Le projet contient déjà une configuration VS Code utilisant le port Live Server `5501`.

## Structure du projet

```text
EniMemoryHugoB/
├── assets/
│   ├── fonts/
│   ├── ressources/
│   └── style/
│       └── style.css
├── html/
│   ├── index.html
│   ├── jeux.html
│   ├── compte.html
│   ├── connexion.html
│   └── inscription.html
├── js/
│   ├── script.js
│   ├── connect.js
│   ├── subscribe.js
│   └── compte.js
└── README.md
```

## Règles du jeu

1. Retournez deux cartes.
2. Si les deux cartes représentent la même image, elles restent visibles.
3. Sinon, elles se retournent face cachée après un court délai.
4. Retrouvez les six paires pour remporter la partie.

## Stockage des données

Ce projet est une démonstration front-end :

- les comptes sont enregistrés dans le `localStorage` du navigateur ;
- l'utilisateur connecté est conservé dans le `sessionStorage` ;
- les données restent spécifiques au navigateur et au domaine utilisés.

Les mots de passe ne sont pas chiffrés et sont stockés directement dans le navigateur. Cette méthode convient uniquement à un exercice pédagogique : elle ne doit pas être utilisée pour gérer de vrais comptes ou données sensibles.

## Auteur

- Hugo — projet réalisé dans le cadre de la formation ENI.
