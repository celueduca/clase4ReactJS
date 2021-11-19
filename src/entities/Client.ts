import { Person } from "./Person";

export class Client extends Person {
    getMessage() {
        console.log("Hola soy cliente");
    }
}