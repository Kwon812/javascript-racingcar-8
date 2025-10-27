import {Console} from '@woowacourse/mission-utils'

export default class OutputView {


    printRound(rounds) {
        rounds.forEach(round => {
            round.getCars().forEach(car=>    Console.print(`${car.getName()} : ${'-'.repeat(car.getPosition())}`))
                // round.forEach(car => {

                // })
            Console.print('\n')
            })

    }

    printWinners(winners) {
        const winnerStr = winners.map(winner => winner.getName()).join(',')
        Console.print(`최종 우승자 : ${winnerStr}`)

    }


}