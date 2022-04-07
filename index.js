const express = require("express");
const sqlite3 = require("sqlite3").verbose();

let bodyParser = require('body-parser');
const cors = require('cors');


//ROUTES
var books = require('./routes/books');
var otrasRutas = require('./routes/otrasRutas');



const ConsultasDB = require('./db/consultas');
const consultasDB = new ConsultasDB();

//START SERVER
const app = express();

app.listen(3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


//CONSULTAS SERVER
app.get("/", (req, res) => {
  res.send ("PAGINA PRINCIPAL");
});


app.use('/books', books);
app.use('/otrasRutas', otrasRutas);




app.get("/bookNuevaAPI", async (req, res) => {
  function aT(d){
    res.json(d);
  }
  consultasDB.obtenerTodosLosLibros(aT);
});

app.get("/bookNuevaAPI2", async (req, res) => {
  function aT(d){
    res.json(d);
  }
  consultasDB.obtenerLibro(aT, 2);
});






//CONEXION
// const db_name = "data_apptest.db";
// const db = new sqlite3.Database(db_name, err => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log("Successful connection to the database 'apptest.db'");
// });


/* 
//CONSULTA - CREACION DE TABLA
const sql_create = `CREATE TABLE IF NOT EXISTS Books (
    Book_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Title VARCHAR(100) NOT NULL,
    Author VARCHAR(100) NOT NULL,
    Comments TEXT
  );`;
  
db.run(sql_create, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Successful creation of the 'Books' table");
}); 
 */

// app.get("/books", (req, res) => {
//     const sql = "SELECT * FROM Books ORDER BY Title";
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json(rows);
//     });
// });

// app.get("/book", (req, res) => {
//     const sql = "SELECT * FROM Books WHERE Book_ID=2";
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             return console.error(err.message);
//         }
//         res.json(rows);
//     });
// });

// // GET /edit/5
// app.get("/edit/:id", (req, res) => {
//     const id = req.params.id;
//     console.log("Libro buscado: ", id);
//     const sql = "SELECT * FROM Books WHERE Book_ID = ?";
//     db.get(sql, id, (err, row) => {
//       // if (err) ...
//       res.json(row);
//     });
//   });
// 
// // POST /edit/5
// app.post("/edit/:id", (req, res) => {
// 
//     const id = req.params.id;
//     const book = [req.body.Title, req.body.Author, req.body.Comments, id];
// 
//     console.log(book);
// 
//     const sql = "UPDATE Books SET Title = ?, Author = ?, Comments = ? WHERE (Book_ID = ?)";
//     db.run(sql, book, err => {
//         // if (err) ...
//         res.redirect("/books");
//     });
// });