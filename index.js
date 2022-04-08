const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');


//INICIANDO SERVIDOR
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado. (http://localhost:${PORT}/) !`);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//index
app.get("/", (req, res) => {
  res.send ("PAGINA PRINCIPAL");
});



// _____  _    _ _______        _____ 
// |  __ \| |  | |__   __|/\    / ____|
// | |__) | |  | |  | |  /  \  | (___  
// |  _  /| |  | |  | | / /\ \  \___ \ 
// | | \ \| |__| |  | |/ ____ \ ____) |
// |_|  \_\\____/   |_/_/    \_\_____/ 
                                    

var clientes = require('./routes/clientes');
app.use('/api/clientes', clientes);

var cliente = require('./routes/cliente');
app.use('/api/cliente', cliente);

var data = require('./routes/data');
app.use('/api', data);
