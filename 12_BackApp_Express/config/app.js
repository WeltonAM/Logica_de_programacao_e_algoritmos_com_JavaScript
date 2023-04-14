require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.API_PORT;

app.use(express.json());

const livros = require('../livros');
app.use('/livros', livros);

app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});