import {IAnswers} from "./IAnswers";

export interface ITestValue {
    question: string,
    answers: Array<IAnswers>,
    level: string,
    subject: string,
    group: string,
    tags: Array<string>
}
