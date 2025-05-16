import {openDb} from './configDB.js';
import { createTableIncome } from './controller/incomeController.js';
import express from 'express';

const app = express();
app.use(express.json());

createTableIncome();
openDb();

app.listen(3000, console.log("Rodando..."));


app.get('/', function(req , res){
    res.send("ola mundo");
} )

app.post('/income', function(req , res){
    console.log(req.body);
    res.json({"statuscode": 200});
    
     
} )