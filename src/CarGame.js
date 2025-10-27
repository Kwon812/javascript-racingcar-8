import OutputView from "./OutputView.js";
import Car from "./Car.js";
import Round from "./Round.js";


export default class CarGame {

    #cars=[]
    #count=0
    #carStateByRound=[]
    #winners=[]
    constructor(cars,count) {
        this.#cars = cars;
        this.#count=count
        this.outputView=new OutputView()
    }
    gameStart(){

        for(let i=0;i<this.#count;i++){
           const round=this.#cars.map(car=> {
               car.move()
               return new Car(car.getName(),car.getPosition())
           })
            this.#carStateByRound.push(new Round(round))

        }

        this.#winners=this.checkWinner(this.#carStateByRound)
    }

    checkWinner(round){
        const sort=[...round[round.length-1].getCars()].sort((a,b)=>b.getPosition()-a.getPosition())
        const winnerPosition=sort[0].getPosition()
        return sort.filter(car => car.getPosition() === winnerPosition)
    }

    getRounds(){
        return this.#carStateByRound
    }
    getWinners(){
        return this.#winners
    }

}