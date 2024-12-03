class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    info(){
        return `User email : ${this.email}`;
    }
}

let user1 = new User("johndoe@gmail.com","123456");
let user2 = new User("janedoe@gmail.com","123456");
console.log(user1.info());
console.log(user2.info());

class Stagiaire extends User {
    constructor(email,password,nom,prenom) {
        super(email,password);
        this.nom = nom;
        this.prenom = prenom;
    }
    info(){
        return `${super.info()} User nom : ${this.nom} User prenom : ${this.prenom}`;
    }
}

let sta1 = new Stagiaire("johndoe@gmail.com","123456","john","doe");
let sta2 = new Stagiaire("janedoe@gmail.com","123456","jane","doe");
console.log(sta1.info());
console.log(sta2.info());