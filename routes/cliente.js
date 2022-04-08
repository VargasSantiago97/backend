var express = require('express');

const ConsultasDB = require('../db/consultas');
const consultasDB = new ConsultasDB();

const ConsultasCliente = require('../db/consultasCliente');


var router = express.Router();

router.get("/", (req, res) => {
    res.send ("API Cliente...");
});


router.get("/:idd/getInfo", (req, res) => {
    aT = ( d => {
        res.json(d);
    });

    function dbBuscada(d){
        let db_name = d[0].db;

        const consultasCliente = new ConsultasCliente(db_name);

        consultasCliente.obtenerDatos(aT);
    }
    consultasDB.obtenerBaseDeDatos(dbBuscada, req.params.idd);
});


module.exports = router;