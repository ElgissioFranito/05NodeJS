// ************************************************************************
// *******************Creation d'un server NodeJS**************************
// ************************************************************************

// 1 - recuperation du module HTTP****************************************************************
const http = require("http");


// 2 - Creation de server avec createServer*******************************************************
const serveur = http.createServer((req, res) => {

    // definition de l'entete
    res.setHeader("content-type", "text/html");

    // definition de la response selon la request
    res.write("<head> <meta charset='utf-8'> </head>")

    if (req.url === "/acceuil") {
        res.write("<h1> ACCEUIL </h1> <p>Bienvenue à vous!!! <br> Vous avez entré localhost" + req.url + " </p>");
    }
    else {
        res.write("<h1> 404 </h1> <p>Une erreur s'est produit! <br> Vous avez entré localhost" + req.url + " </p>");
    }

    // Finalisation 
    res.end();
});


// 3 - Ecoute des requetes d'user : serveur.listen(port,"nomDuDomaine",()=>{msg})    // (03 parametres number,string,function)
serveur.listen(1100, "localhost", () => {
    console.log("Serveur prèt à écouter au port 1100!");
});



// console.log("serveur créé!!!")
    // console.log(req);                // affiche tous les information de la requete envoyer par user
    // console.log(req.method);         // affiche "GET" quand on charge la page localhost:1100
    // console.log(req.url);               // affiche le ressource (ex:"/acceuil/photo")  quand on charge la page localhost:1100


// ******************************************************************************
// URL : Uniform Resource Locator
// Protocole + Domaine + Port + Ressource
// Ex : http:// 198.162.48.3 : 3000 /dowload/nodeJS.exe

// Domaine + Port sont généralemnet masqué part un NomDuDomaine.(ex: www.google.com)


