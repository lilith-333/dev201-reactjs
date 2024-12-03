import User from "./User.js";
import Stagiaire from "./Stagiaire.js";
import {centre as cr, sayHi} from "./User.js";
//import {sayHi} from "./User.js";

let user1 = new User("johndoe@gmail.com","123456");
console.log(user1.info());

let sta1 = new Stagiaire("johndoe@gmail.com","123456","john","doe");
console.log(sta1.info());

console.log(cr);
sayHi();

