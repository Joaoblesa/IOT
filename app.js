const express = require("require");
const app = express();

let dados = [];

app.get("/sensor", (req, res) => {
    const { temp, hum } = req.query;

    if (!temp || ! hum) {
        return res.status(400).send
        ("Dados invalidos");
    }

    const leitura = {
        temperatura: temp,
        umidade: hum,
        data: new Date()
    };

    dados.push(leitura);

    console.log(leitura);

    res.send("OK");

    app.get("/dados", (req, res) => {

    });

    app.get("/dados", (req, res )=> {
        res.json(dados);
    });

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Servidor rodandando na
            porta ${PORT})`);
    });

})