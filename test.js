const proyecto = require('./main.js');

let contenedor = new proyecto.Contenedor("productos.txt");
const info1 ={
    titulo : "Carro",
    precio: 10000000,
    thumbail:"https://cdn-icons-png.flaticon.com/512/2554/2554969.png"
}
const info2 ={
    titulo : "Moto",
    precio: 2000000,
    thumbail:"https://cdn-icons-png.flaticon.com/512/27/27176.png"
}
const info3 ={
    titulo : "Barco",
    precio: 78000000,
    thumbail:"https://cdn-icons-png.flaticon.com/512/840/840081.png"
}

// ------Metodo Guardar----------
// contenedor.save(info1);

// ------Metodo Obtener por ID----------
// contenedor.getById(2);

// ------Metodo Obtener todo----------
// contenedor.getAll();

// ------Metodo Borrar por id----------
// contenedor.deleteById(1);

// ------Metodo Borrar todo----------
// contenedor.deleteAll();