import {Random} from '@woowacourse/mission-utils'

export default class Car{

    #name
    #position

    constructor(name,position=0){
        this.#validator(name)
        this.#name=name
        this.#position=position
    }
    #validator(name){
        if(name.length>5 || name.length<=0)  throw new Error('[ERROR] 자동차이름은 5자 이하 1자 이상 이여야합니다')
    }

    move(){
        const rand=Random.pickNumberInRange(0, 9);
        if(rand>=4) this.#position++
    }

    getName(){
        return this.#name
    }
    getPosition(){
        return this.#position
    }
}