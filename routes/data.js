var express = require('express');

const ConsultasDB = require('../db/consultas');
const consultasDB = new ConsultasDB();


var router = express.Router();

router.get("/", (req, res) => {
    res.send ("A.P.I. GENERAL DEL SISTEMA.");
});

router.get("/2", (req, res) => {
    function aT(d){
        res.json(d);
      }
      consultasDB.obtenerLibro(aT, 2);
});

router.get("/3", (req, res) => {
    function aT(d){
        res.json(d);
      }
      consultasDB.obtenerLibroOtro(aT, 3);
});

module.exports = router;