import express from 'express';
import {  serverConfig } from './config';
import { pingHandler } from './controllers/ping.controller';
import pingRouter from './routers/v1/ping.router';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { z } from 'zod';

const app = express();

app.use(express.json());
app.use(express.text());


//registering all the routers and therir corrosponding routes without out app server objects
//app.use(pingRouter);//applicable to all the request

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);


app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press ctrl+C to stop the server`);    


    //incoming data from the from value that want to test the zod schemas
    const obj = {
        name: "sanket",
        age: 20,
    }

    //zod is a simple library that can be used to validate the incoming data from the form based on your expectations
    const objSchema = z.object({
        name: z.string(),
        age: z.number().int().positive(),
    });
    const result = objSchema.parse(obj);
    console.log(result);
});