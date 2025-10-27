import Car from "./Car.js";


export default class Parser {



    static carNamesToCars(raw){
        return raw.split(',').map(x => new Car(x.trim()))
    }
}