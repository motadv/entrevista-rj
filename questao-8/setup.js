const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())

const hasBody = (req, res, next) => {
    if (!req.body) {
        return res.status(400).json({ error: "Não foi possível encontrar o corpo da requisição" });
    }
    next();
}

const anagramHandler = (req, res) => {
    
    // Desestruturação do corpo da requisição
    const { str1, str2 } = req.body;

    // Verificação de existência de campos
    if (str1 === undefined || str2 === undefined) {
        return res.status(400).json({ error: "Os campos str1 e str2 são obrigatórios" });
    }

    // Verificação de tipo de input
    if (typeof req.body.str1 !== "string" || typeof req.body.str2 !== "string") {
        return res.status(400).json({ error: "Os campos str1 e str2 devem ser strings" });
    }
    
    // Caso de uso da rota
    const areAnagrams = require("./modules/Anagramas");    
    const anagramResult = areAnagrams(req.body.str1, req.body.str2);

    // Retorno da resposta
    res.json(
        {
            areAnagrams: anagramResult
        }
    );
    };

app.post('/anagrams', hasBody, anagramHandler);

module.exports = app;