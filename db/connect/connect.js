const sqlite3 = require("sqlite3").verbose();


const DATABASE = 'data_apptest.db';

console.log(`Conectando a Base de Datos INICIAL '${DATABASE}'`);
const dataBase = new sqlite3.Database(DATABASE, err => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Conectado correctamente a Base de Datos INICIAL '${DATABASE}'`);
});

class DB {
    constructor(){
    }

    connect(db_name){
        console.log(`Conectando a Base de Datos '${db_name}'`);
        this.dataBase = new sqlite3.Database(db_name, err => {
            if (err) {
              return console.error(err.message);
            }
            console.log(`Conectado correctamente a '${db_name}'`);
        });
    }

    consulta(aT, sql){
        dataBase.all(sql, [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            }
            aT(rows);
        });
    }
}

module.exports = DB;