const express = require('express')
const proyecto = require('./main.js');
const fs =require('fs');

let contenedor = new proyecto.Contenedor("productos.txt");

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/productos',async (req, res) => {
    
    res.send(await contenedor.getAll());
})

app.get('/productoRandom', async (req, res) => { 
    res.send(await contenedor.getById());
})
