const DB = require('../connect')
const db = new DB('data_apptest.db');

class Books {
    constructor(){}

    obtenerTodosLosLibros(aT){
        let sql = "SELECT * FROM Books";
        return db.consulta(aT, sql);
    }
    obtenerLibro(aT, idd){
        let sql = `SELECT * FROM Books WHERE Book_ID = ${idd}`;
        return db.consulta(aT, sql);
    }
}


module.exports = Books;