const Books = require('./consultas/books');
const books = new Books();

const OtroBooks = require('./consultas/otroBooks');
const otroBooks = new OtroBooks();


const Clientes = require('./consultas/clientes');
const clientes = new Clientes();

class Consultas {
    constructor(){}

    obtenerTodosLosLibros(aT){
        books.obtenerTodosLosLibros(aT);
    }

    obtenerLibro(aT, idd){
        books.obtenerLibro(aT, idd);
    }

    obtenerLibroOtro(aT, idd){
        otroBooks.obtenerLibro(aT, idd);
    }

    //CLIENTES
    obtenerTodosClientes(aT){
        clientes.obtenerTodos(aT);
    }
    obtenerIdClientes(aT, idd){
        clientes.obtenerId(aT, idd);
    }
    obtenerBaseDeDatos(aT, idd){
        clientes.obtenerDireccionDB(aT, idd);
    }
}

module.exports = Consultas;