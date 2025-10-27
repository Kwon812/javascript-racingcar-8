

export default class Validator {


    static carNamesValidator(cars){
        const set=new Set(cars.map(car=>car.getName()))
        if(cars.length!==set.size) throw new Error( '[ERROR] same name')
        if(cars.length===0) throw new Error( '[ERROR] wrong Input')
        if(cars.length<2) throw new Error('[ERROR] minimum 2 Cars')

    }
    static gameCountValidator(count){
        if(count>10 || count<1) throw new Error( '[ERROR] max 10 min 1')
    }
}