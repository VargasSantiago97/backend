var express = require('express');


var router = express.Router();

router.get("/", (req, res) => {
    res.send ("OTRAS RUTAS Hello worlddddd...");
});


router.get("/2", (req, res) => {
    res.send ("OTRAS RUTAS Hello worlddddd2...");
});

module.exports = router;