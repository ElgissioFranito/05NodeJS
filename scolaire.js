// Creation du module "scolaire.js"

// exemple module d'un autre fichier (dans introduction.js)
// tableau d'objet etudiant
const tab = [
    {
        nom: "Rasoa Marguerite",
        age: 23,
        classe: "L3"
    },
    {
        nom: "Jean Pôly",
        age: 25,
        classe: 'M2'
    }
];
// console.log(tab);

const matiere = ["Algo", "Maths", "Web", "Electro"];


// il faut exporter les variables pour pouvoir les utiliser dans un autre fichier
module.exports = { tab, matiere };
