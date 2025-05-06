import { Request, Response } from 'express';

export const pingHandler = (req: Request, res: Response) => { 
    console.log("Request body", req.body);
    console.log("Query params", req.query);
    console.log("Url params", req.params);
    
    
    res.send('Pong'); 
}