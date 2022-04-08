const DB = require('../connect')
const db = new DB();

class Clientes {
    constructor(){}

    obtenerTodos(aT){
        let sql = "SELECT * FROM Clientes";
        db.consulta(aT, sql);
    }
    obtenerId(aT, idd){
        let sql = `SELECT * FROM Clientes WHERE id = ${idd}`;
        db.consulta(aT, sql);
    }
    obtenerDireccionDB(aT, idd){
        let sql = `SELECT db FROM Clientes WHERE id = ${idd}`;
        db.consulta(aT, sql);
    }
}


module.exports = Clientes;