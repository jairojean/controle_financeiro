const express = require('express');

const app = express();

app.listen(3000, console.log("Rodando..."));


app.get('/', function(req , res){
    res.send("ola mundo");
} )

app.post('/income', function(req , res){
    console.log(req);
    res.json({"statuscode": 200});
    
     
} )