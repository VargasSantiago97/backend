var express = require('express');

const ConsultasDB = require('../db/consultas');
const consultasDB = new ConsultasDB();


var router = express.Router();

router.get("/", (req, res) => {
    res.send ("BOOKS Hello worlddddd...");
});


router.get("/2", (req, res) => {
    function aT(d){
        res.json(d);
      }
      consultasDB.obtenerLibro(aT, 2);
});

module.exports = router;