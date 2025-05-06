import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';

const pingRouter = express.Router();

function checkBody(req: express.Request, res: express.Response, next: express.NextFunction) : void {
    if(typeof req.body.name !== "string") {
      res.status(400).send('Bad Request');
    } 
    next();
}


pingRouter.get('/', checkBody, pingHandler); 

pingRouter.get('/health', (req, res)=>{
     res.status(200).send('OK');
});
export default pingRouter;

