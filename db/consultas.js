const Books = require('./consultas/books');
const books = new Books();

class Consultas {
    constructor(){}

    obtenerTodosLosLibros(aT){
        return books.obtenerTodosLosLibros(aT);
    }

    obtenerLibro(aT, idd){
        return books.obtenerLibro(aT, idd)
    }
}

module.exports = Consultas;