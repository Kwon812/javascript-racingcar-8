import App from "../src/App.js";
import {MissionUtils} from "@woowacourse/mission-utils";
import Validator from "../src/Validator.js";
import Car from "../src/Car.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();
        return Promise.resolve(input);
    });
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();

    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

describe("자동차 경주", () => {
    test("기능 테스트", async () => {
        // given
        const MOVING_FORWARD = 4;
        const STOP = 3;
        const inputs = ["pobi,woni", "1"];
        const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
        const logSpy = getLogSpy();

        mockQuestions(inputs);
        mockRandoms([MOVING_FORWARD, STOP]);

        // when
        const app = new App();
        await app.run();

        // then
        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });


    describe("자동차이름 예외테스트", () => {
        test("자동차이름이 6자 이상일경우", async () => {
            // given
            const inputs = ["pobi,javaji"];
            mockQuestions(inputs);

            // when
            const app = new App();

            // then
            await expect(app.run()).rejects.toThrow("[ERROR]");
        });
        test("자동차이름이 중복일경우", async () => {
            // given
            const inputs = ["pobi","pobi"];

            // when
            // const app = new App();
            const cars=inputs.map(input=>new Car(input))
            // then
             expect(()=>Validator.carNamesValidator(cars)).toThrow("[ERROR]");
        });

        test("자동차이름이 0자 이하인경우 ", async () => {
            // given
            const inputs = ["pobi",""];

            // when
            // then
            expect(()=>inputs.map(input=>new Car(input))).toThrow("[ERROR]");
        });


    });

    describe('실행횟수 예외테스트',()=>{
        test("실행 횟수가 10보다 큰경우 ", async () => {
            // given
            const input =12;


            // when

            // then
            expect(()=>Validator.gameCountValidator(input)).toThrow("[ERROR]");
        });
        test("실행 횟수가 0보다 작은경우 ", async () => {
            // given
            const input =-3;
            mockQuestions(input);

            // when
            const app = new App();

            // then
            expect(()=>Validator.gameCountValidator(input)).toThrow("[ERROR]");
        });
    })

});
