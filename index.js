const express = require("express"); //importando o express
const app = express(); // /iniciando o espress

// Rotas
app.get("/", function(req, res){
    res.send("Bem Vindo!");
});

app.get("/blog/:artigo?", function(req, res){// Parâmentro OPCIONAL 

    let artigo = req.params.artigo;

    // Condição para saber se pssou ou não parâmetro
    if(artigo){
        res.send(`Artigo: ${artigo}.`);
    }else{
        res.send("Bem vindo ao meu blog!");
    };
    
});

app.get("/canal/youtube", function(req, res){// QUERY params

    let canal = req.query["canal"];

    if(canal){
        res.send(canal)
    }else{
        res.send("Nenhum canal fornecido!")
    };

    res.send("Bem vindo ao meu canal!")
});

app.get("/ola/:nome/:empresa", function(req, res){// Parametro obrigatório
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI ER ENVIADA PARA O USUÁRIO
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send(`<h1> Oi, ${nome}! Você trabalha na empresa: ${empresa}...`);
});


// Servidor Express
app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");

    }else{
        console.log("Servidor inicializado...");
    }
});
