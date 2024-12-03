export default class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    info(){
        return `Email : ${this.email}`;
    }
}

export const centre = "CFPMSM";

export function sayHi() {
    console.log("hi");
}

