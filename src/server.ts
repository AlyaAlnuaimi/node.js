// we install express (npm i express)
import express from 'express';
import {join} from 'path'

const app = express();

app.get("/", function(req:Request, res:Response){
   // res.sendFile(join(__dirname,'..','html','index.html'));
   
});

app.listen(6000)