///////////////////
// Importaciones
import express from "express";
import connection from "./src/api/database/db.js";
import cors from "cors";

///////////
// Config
const app = express();


///////////////
// Middlewares

app.use(cors()); // Middleware que permite que otras paginas (con otros domiunios) consuman los recursos de mi API Rest

// Middleware logger para analizar por consola todas las solicitudes a mi API Rest
app.use((req, res, next) => {
    const fecha = new Date;
    console.log(`[${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}] ${req.method} ${req.url}`);
    next();
});





/////////////
// Endpoints
app.get("/", (req, res) =>  {
    res.send("hola mundo");
});

// GET all products
app.get("/api/products", async (req, res) => {

    const sql = "SELECT * FROM products";
    const [rows] = await connection.query(sql);
    // console.log(rows); // rows esta devolviendo todos los productos como objetos JS

    res.status(200).json({
        payload: rows
    });
});


// GET product by id
app.get("/api/products/:id", async (req, res) => {

    // Extraemos el valor del id de la url
    const id = req.params.id;
    
    const [rows] = await connection.query("SELECT * FROM products where products.id = ?", [id]);

    // console.log(rows);

    res.status(200).json({
        payload: rows
    });
})


app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
});