var express = require('express');

const ConsultasDB = require('../db/consultas');
const consultasDB = new ConsultasDB();



var router = express.Router();

router.get("/", (req, res) => {
    res.send ("API Clientes...");
});


router.get("/getAll", (req, res) => {
    function aT(d){
        res.json(d);
    }
    consultasDB.obtenerTodosClientes(aT);
});

router.get("/getId/:idd", (req, res) => {
    function aT(d){
        res.json(d);
    }
    let idd = req.params.idd;
    consultasDB.obtenerIdClientes(aT, idd);
});

module.exports = router;