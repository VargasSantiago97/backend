const sqlite3 = require("sqlite3").verbose();

class DB {
    constructor(db_name){
        this.db_name = db_name;
        this.dataBase;
        this.connect();
    }

    connect(){
        console.log(`Conectando a Base de Datos '${this.db_name}'`);
        this.dataBase = new sqlite3.Database(this.db_name, err => {
            if (err) {
              return console.error(err.message);
            }
            console.log(`Conectado correctamente a '${this.db_name}'`);
        });
    }

    consulta(aT, sql){
        this.dataBase.all(sql, [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            }
            console.log('consulta ejecutada');
            aT(rows);
        });
    }
}

module.exports = DB;