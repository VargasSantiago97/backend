const DBCliente = require('../connectCliente')


class Cliente {
    constructor(db_name){
        this.db = new DBCliente(db_name);
    }

    obtenerDatos(aT){
        let sql = "SELECT * FROM data";
        this.db.consulta(aT, sql);
    }
}


module.exports = Cliente;