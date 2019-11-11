import {Document, Schema, model} from 'mongoose'
import {ITestValue} from "../../models/ITestValue";

type TestValueType = ITestValue & Document

export const TestValue = model<TestValueType>('Test', new Schema({
    question: String,
    answers: [
        {
            value: String,
            correct: Boolean
        }
    ],
    level: String,
    subject: String,
    group: String,
    tags: [String]
}));



