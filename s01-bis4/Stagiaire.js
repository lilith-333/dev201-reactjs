import User from "./User.js";

class Stagiaire extends User{
    constructor(email,password,nom,prenom){
        super(email,password);
        this.nom = nom;
        this.prenom = prenom;
    }

    info(){
        return `${super.info()} Nom : ${this.nom} Prenom : ${this.prenom}`;
    }
}

export default Stagiaire;