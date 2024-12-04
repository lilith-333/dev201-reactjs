
/* console.log("hi");

let isAdmin = true;

if(isAdmin){
    console.log("admin");
}else{
    console.log("not admin");
}

console.log(isAdmin ? "admin" : "not admin"); */


/* let isMember=true;
let remise=isMember==true?0.2:0.1
console.log("remise: ",remise) */

/* let nom = "nadir"
let salutation=nom?"salut "+nom:"inconnu"
console.log(salutation) */

//Object destructing


/* let formateur = {
    nom : "nadir",
    filiere : "dev",
    ville : "mohammedia"
}

function showInfo({nom,filiere,ville}){
    console.log(nom,filiere,ville);
}

showInfo(formateur); */

/* let nom = formateur.nom;
let filiere = formateur.filiere;
let ville = formateur.ville; */

/* let {nom, filiere, ville} = formateur;

console.log(nom);
console.log(filiere);
console.log(ville); */

//Opérations sur Array


const personnes = [
    { nom: "Rami", age: 33, estMember: true },
    { nom: "Fatihi", age: 24, estMember: false },
    { nom: "Chakib", age: 45, estMember: true },
    { nom: "Mounir", age: 37, estMember: false },
];

let member = personnes.find(p=>p.age>33).nom;
console.log(member);


/* const members = personnes.filter(function(elt){
    //return elt.estMember == true;
    return elt.age >50
}); */

let members = personnes.filter(p=>p.age>33).map(p=>p.nom)

console.log(members);


const newTab = personnes.map(
    /* function(personne){
        return personne.nom;
    } */

    /* personne => personne.nom */
    p => p.nom
);

/* function(a,b) {
    return  a+b;
}

(a,b) => a+b */
    
/* console.log(newTab); */


/* let tabNom = [];

for (let i = 0; i < personnes.length; i++) {
     tabNom.push(personnes[i].nom);
}

console.log(tabNom); */

/* const tabNames = personnes.map(p=>p.nom);

console.log(tabNames);

let nums = [1,2,3,4];

let nums2 = nums.map(n=>n*n);
console.log(nums2); */


const clients = [
    { nom: "Rami", montant: 4500 },
    { nom: "Karimi", montant: 2300 },
    { nom: "Chaouki", montant: 5500 },
    { nom: "Ramoun", montant: 7700 },
];
    
t = 4500 + 2300 + 5500 + 7700;

let total = clients.reduce(function(t,element) {
    return t = t + element.montant;
},0)

console.log(total);

const stagiaires = [
    { nom: "Rami", note: 17 },
    { nom: "Karimi", note: 18 },
    { nom: "Chaouki", note: 11 },
    { nom: "Ramoun", note: 15 },
];

/* let totalNote = stagiaires.reduce(function(t,sta){
    return t = t + sta.note;
},0); */

let totalNote = stagiaires.reduce((t,sta) => t+=sta.note,0);

let moy = totalNote/stagiaires.length

console.log(moy);


let numbers=[3,7,2,5,9,4,10]
console.log(numbers.reduce(function(total,n){return total+n},0))




/* let a = numbers2[0];
let b = numbers2[1];
let c = numbers2[2];
let d = numbers2[3];
let e = numbers2[4]; */

/* let [a,b,c,e,d] = numbers2;
console.log(a,b,e); */

let numbers2=[3,7,2,5,9];
let [a,b,...rest] = numbers2;
//a=3
//b=7
//rest = [2,5,9]

console.log(rest);


let tab1 = [1,2,3];
tab2 = [...tab1.filter(e=>e!=2)];

//dev1 tab1
tab1[0]=5
console.log(tab1);


//dev2 tab2


console.log(tab2);

let x = 5;
y=x;
console.log(y);

