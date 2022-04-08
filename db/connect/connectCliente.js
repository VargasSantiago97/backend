const sqlite3 = require("sqlite3").verbose();

class DBCliente {
    constructor(db_name){
        this.dataBase;
        this.connect(db_name);
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
        this.dataBase.all(sql, [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            }
            aT(rows);
        });
    }
}

module.exports = DBCliente;