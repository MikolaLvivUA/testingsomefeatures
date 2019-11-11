import express from 'express';
import mongoose from 'mongoose'


import {testRouter} from './routers'

import {TestValue} from './database/models'

class App {
    public readonly app: express.Application = express();

    constructor(){

        this.mountRoutes();
        this.setupDb();

    }

    private setupDb(): void {
        const mongoDb = "mongodb://localhost/Test";
        mongoose.connect(mongoDb, {useNewUrlParser: true, useUnifiedTopology: true});
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "MongoDB Connection error"));
    }

    private mountRoutes(): void {
        this.app.use('/test', testRouter);
        this.app.post('/test', async (req, res) => {
            let value = req.body;

            const newQuestion = await TestValue.create({
                question: 'Who you are',
                answers: [
                    {
                        value: 'Human',
                        correct: true
                    }
                ],
                level: 'Hard',
                subject: 'Biology',
                group: '6B',
                tags: ['Human']
            });

            res.json(newQuestion)
        })
    }
}

export const app = new App().app;
