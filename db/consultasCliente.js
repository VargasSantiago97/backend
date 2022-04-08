const Cliente = require('./consultas/cliente');


class Consultas {
    constructor(db_name){
        this.cliente = new Cliente(db_name);
    }

    obtenerDatos(aT){
        this.cliente.obtenerDatos(aT);
    }
}

module.exports = Consultas;