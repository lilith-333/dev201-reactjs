/* Exercice 1 */

class Document{
    constructor(id, dateEdition) {
        this.id = id;
        this.dateEdition = dateEdition;
    }
}

class Livre extends Document {
    constructor(id, dateEdition, titre, auteur) {
        super(id,dateEdition);
        this.titre = titre;
        this.auteur = auteur;
    }

    info(){
        return `Livre : id : ${this.id} - Titre : ${this.titre} - Auteur : ${this.auteur} - Date Edition : ${this.dateEdition}`;
    }
}

const d1 = new Document(1,"05/11/2024");
const d2 = new Document(2,"05/12/2024");

const l1 = new Livre(11,"06/01/2014","Clean Code","ofppt");
const l2 = new Livre(12,"09/07/2024","React","facebook");
const l3 = new Livre(13,"26/05/2018","Php","cfpms");

console.log(l1.info());


/* Exercice 3  */

const input3 = [1, 2, 3, 4, 5]
console.log(input3.map(n=>n*n));

/* Exercice 4 */

const input4 = [1, -2, 3, 4, -5]
console.log(input4.filter(n => n>=0));

console.log(input4.reduce((o,n) => o+=n , 0));
console.log(input4.reduce((o,n) => o+=n , -2));

console.log(input4.filter(n => n>=0).reduce((o,n) => o+=n , 0));

/* Exercice 5 */

let livres=[
    {id :10,titre : "POO",auteur :"RAMI",prix :300},
    {id :11,titre : "JS ES6",auteur :"FAMI",prix :230},
    {id :12,titre : "Algorithme",auteur :"KARIMI",prix :330},
    {id :13,titre : "HTML & CSS",auteur :"RAMI",prix :340}
]

console.log(livres.map( (l,i) => l.titre));

console.log(livres.filter(l=>l.auteur == "RAMI").map(l=>l.titre));

console.log(livres.find(l=>l.id == 12));

console.log(livres.reduce((t,l) => t+=l.prix,0));

const mesLivres = [...livres];
console.log(mesLivres);





