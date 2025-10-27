import InputView from "./InputView.js";
import CarGame from "./CarGame.js";
import OutputView from "./OutputView.js";

class App {

    constructor() {
        this.inputView = new InputView();
        this.outputView = new OutputView();
    }

    async run() {
        const cars = await this.inputView.askCarsName()
        const count = await this.inputView.askGameCount()
        const carGame = new CarGame(cars, count)
        carGame.gameStart()
        const rounds=carGame.getRounds()
        const winners=carGame.getWinners()
        this.outputView.printRound(rounds)
        this.outputView.printWinners(winners)
    }
}

export default App;
