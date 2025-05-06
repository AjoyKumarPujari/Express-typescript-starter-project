import express from 'express';
import {  serverConfig } from './config';
import { pingHandler } from './controllers/ping.controller';
import pingRouter from './routers/v1/ping.router';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';

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
});