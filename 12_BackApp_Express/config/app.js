require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.API_PORT;

app.use(express.json());

app.post('/movies', (req, res) => {
    const { title, type } = req.body;

    res.send(`Filme: ${title} - Gênero: ${type}, recebido...`)
});

const log = (req, res, next) => {
    console.log(`....................Acessado em ${new Date()}`);
    next();
}

app.get('/transfer', log, (req, res) => {
    res.send('Ok! Valor transferido com sucesso...');
});

app.get('/', (req, res) => {
    res.send('Hello...');
});

app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});