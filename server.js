const express = require('express')
const proyecto = require('./main.js');
const fs =require('fs');
let contenedor = new proyecto.Contenedor("productos.txt");

const PORT = 8080

const app = express()

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/productos', (req, res) => {
    async function leerAll(){
        let resultado,r2;
        try{
            const contenido =await fs.promises.readFile('./productos.txt', 'utf8');
            resultado =JSON.parse(contenido);
        }
        catch(err){
            resultado= err;
        }
        return res.send(resultado);
    }
    leerAll();
})

app.get('/productoRandom', (req, res) => { 
    async function leerId(){
        let resultado,r2;
        try{
            const contenido =await fs.promises.readFile('./productos.txt', 'utf8');
            resultado =JSON.parse(contenido);
            r2=Math.floor(Math.random() * resultado.length) + 1;
            resultado.forEach(object =>{
                if(object.id === r2){
                    resultado=object;
                }
            });
            if(resultado.length>0){
                resultado="Id especificado no exite en el archivo"
            }
        }
        catch(err){
            resultado= err;
        }
        return res.send(resultado);
    }
    leerId();
})