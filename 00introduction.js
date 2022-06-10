// **********************************************************************************
// ****************** INTRODUCTION GENERALE DE NODE.JS *******************************
// **********************************************************************************

// // on peut faire certains syntaxes en javascript

// let salut = (nom) =>
//     console.log("bonjour " + nom);
// salut("odile anita");

// const tab = ["papa", "mama", "enfant"];
// console.log(tab);
// tab.push("autre");
// console.log(tab);

// ********************************************************************************


// // LES OBJET GLOBAUX
// // Ce sont des objets qui sont disponibles (à nodeJS) sans importé une module particulière. ce sont ...
// console.log(global);

// // exemeple de ses methodes: setTimeout et setInterval
// // setTimeout(fonction,tempsDelais) = permet d'executer une fonction après un temps en milliseconde(ms)
// setTimeout(() => {
//     console.log("Coucou");
//     // clearInterval(temps);        //OU
// }, 3000);           // temps en ms (3000 = 3s)

// //setIntervale(fonction,interval) = la fction s'execute a chaque intervale de temps
// var temps = setInterval(() => {
//     console.log("je m'execute a chaque O.5sec...");
// }, 500);            // appuyez sur Ctrl+C pour forcer l'arrêt du processus

// setTimeout(() => {  // met fin  la setInterval "temps" après 5sec
//     clearInterval(temps);
// }, 5000);

// ********************************************************************************

// // LES MODULES ce sont des fonctions dans des fichiers mais qu'on peut utiliser dans d'autre fichiers.
// // Les modules directement intégré dans NodeJS:
// // - OS : qui fourni les information du systeme d'exploitation
// // - FS: permet la gestion de fichier
// // - HTTP: permet a nodeJS de se comporter comme un serveur

// // module OS
// const systeme = require("os");
// console.log(systeme.userInfo(), systeme.version());


// // Module d'un autre fichier : require("emplacement_du_fichier")
// // on crée un module dans scolaire.js
// require("./scolaire.js");

const Variable = require("./scolaire.js");
console.log(Variable);              // on remarque un deuxieme objet qui esy vide a l'affichage, c'est la valeur du variable "Variable"

// on veut juste un variable de scolaire.js (ou deux variables => const {matiere, etudiant} = requ......... )
const { matiere } = require("./scolaire")      // rq: on peut aussi ne pas mettre l'extension du fichier
console.log(matiere);


// a suivre dans server.js...

