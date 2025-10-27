

export default class Round{

    #cars=[]
    constructor(cars) {
        this.#cars = cars;
    }
    getCars(){
        return this.#cars;
    }
}