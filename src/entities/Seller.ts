import { Person } from "./Person";

export class Seller extends Person {
    getSalary() {
        console.log("Mi salario es de $100000");
    }
}