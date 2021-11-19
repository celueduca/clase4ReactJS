export class Person {
    name: string;
    private _doc: string;
    phone: string;
    address: string;
    type: string;

    constructor(name: string, doc: string, phone: string, address: string, type: string) {
        this.name = name;
        this._doc = doc;
        this.phone = phone;
        this.address = address;
        this.type = type;
    }

    get doc() {
        return this._doc;
    }

    calcularEdad() {

    }

}