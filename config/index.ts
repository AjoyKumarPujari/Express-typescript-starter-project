//this file contains all the basic configuration logic for the app server to work
 

import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number;
}

dotenv.config();// it load all env file env

function loadEnv(){
    dotenv.config(); 
    console.log("Environment variables loaded");
}

loadEnv();

export const serverConfig : ServerConfig ={//implecit type
    PORT: Number(process.env.PORT)|| 3001
} ;