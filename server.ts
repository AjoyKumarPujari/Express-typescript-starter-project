import express from 'express';
import {  serverConfig } from './config';
import { pingHandler } from './controllers/ping.controller';
import pingRouter from './routers/ping.router';

const app = express();


//registering all the routers and therir corrosponding routes without out app server objects
app.use(pingRouter);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press ctrl+C to stop the server`);    
});