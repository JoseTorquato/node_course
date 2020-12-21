const express = require("express"); //importando o express
const app = express(); // /iniciando o espress

// Rotas
app.get("/", function(req, res){
    res.send("Bem Vindo!");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
});

app.get("/canal/youtube", function(req, res){
    res.send("Bem vindo ao meu canal!")
});


// Servidor Express
app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");

    }else{
        console.log("Servidor inicializado...");
    }
});
