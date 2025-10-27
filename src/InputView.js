import {Console} from '@woowacourse/mission-utils'
import Parser from "./Parser.js";
import Validator from "./Validator.js";

export default class InputView {


    async askCarsName(){
            const names = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')
            const parsed= Parser.carNamesToCars(names)
            Validator.carNamesValidator(parsed)
            return parsed
    }
    async askGameCount(){
            const countRaw = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
            const parsed=Number(countRaw)
            Validator.gameCountValidator(parsed)
            return parsed
    }
}