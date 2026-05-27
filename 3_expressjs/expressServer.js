/* Express.js es una libreria que funciona sobre Node.js diseáda para facilitar la creacion de servidores web.

Simplifica el manejo de rutas, peticiones HTTP, respuestas y otras tareas comunes del desarrollo backend

Es basicamente un framework minimalista que nos permite crear srevidores de manera mas rapida y con menos lineas de codigo que usando el modulo nativo de Node.js

Pasos a seguir:
    Iniciamos un proyecto npm
    npm init -y

    Lo instalamos con npm i express
    https://www.npmjs.com/package/express
*/

import express from "express";

const app = express();

// Definimos la ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});

// Escuchamos en el puerto 3000
const puerto = 3000;

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`)
});