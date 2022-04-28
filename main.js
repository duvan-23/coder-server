const fs =require('fs');

class Contenedor{
   
    constructor(nombre){
        this.nombre = nombre;
    }
    
    async getAll(){
        let ruta =`./${this.nombre}`;
        return await leerAll(ruta);
    }
    async getById(){
        return await leerId();
    }
}

async function leerAll(ruta){
    let resultado,r2;
    try{
        const contenido =await fs.promises.readFile(ruta, 'utf8');
        resultado =JSON.parse(contenido);
    }
    catch(err){
        resultado= err;
    }
    return resultado;
}

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
    return resultado;
}
exports.Contenedor = Contenedor;
