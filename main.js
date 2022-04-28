const fs =require('fs');

class Contenedor{
   
    constructor(nombre){
        this.nombre = nombre;
    }
    save(data) {    
        let ruta =`./${this.nombre}`;   
        let id_retorna;
        async function leer(){
            let resultado,r2;
            try{
                const contenido =await fs.promises.readFile(ruta, 'utf8');
                resultado =JSON.parse(contenido);
                r2=resultado;
                resultado=resultado[resultado.length-1].id+1;
            }
            catch(err){
                r2= [];
                resultado= 1;
            }
            return guardar([resultado,r2]);
        }
        leer();
        async function guardar(resultados){
            let id;
            let datos =data;
            datos.id= resultados[0];
            resultados[1].push(datos);
            try{
                await fs.promises.writeFile(ruta, JSON.stringify(resultados[1],null, 2))
                id_retorna=resultados[0];
            }
            catch(err){
                console.log(err);
            }
            return console.log(id_retorna);
        }  
    }
    getById(numero_id){
        let ruta =`./${this.nombre}`; 
        async function leerId(){
            let resultado,r2;
            try{
                const contenido =await fs.promises.readFile(ruta, 'utf8');
                resultado =JSON.parse(contenido);
                resultado.forEach(object =>{
                    if(object.id === numero_id){
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
            return console.log(resultado);
        }
        leerId();
    }
    getAll(){
        let ruta =`./${this.nombre}`; 
        async function leerAll(){
            let resultado,r2;
            try{
                const contenido =await fs.promises.readFile(ruta, 'utf8');
                resultado =JSON.parse(contenido);
            }
            catch(err){
                resultado= err;
            }
            return console.log(resultado);
        }
        leerAll();
    }
    deleteById(numero_id){
        let ruta =`./${this.nombre}`; 
        async function eliminarId(){
            let resultado,r2;
            try{
                const contenido =await fs.promises.readFile(ruta, 'utf8');
                resultado =JSON.parse(contenido);
                resultado.forEach((object,index) =>{
                    if(object.id === numero_id){
                        r2=index;
                    }
                });
                resultado.splice(r2,1);
            }
            catch(err){
                resultado= err;
            }
            return guardar(resultado);
        }
        async function guardar(resultado){
            try{
                await fs.promises.writeFile(ruta, JSON.stringify(resultado,null, 2))
            }
            catch(err){
                console.log(err);
            }
        }
        eliminarId();
    }
    info(){
        return "hola";
    }
    deleteAll(){
        let ruta =`./${this.nombre}`; 
        async function guardar(){
            try{
                await fs.promises.writeFile(ruta, JSON.stringify([],null, 2))
            }
            catch(err){
                console.log(err);
            }
        }
        guardar();
    }

}



exports.Contenedor = Contenedor;
