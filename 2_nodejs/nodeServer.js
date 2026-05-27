// http: Modulo clave para trabajar con servidores y manejar peticiones HTTP. Es la base de cualquier aplicacion web en Node.js

// Crearemos un servidor basico utilizando node.js con su modulo nativo http
const http = require("http");

// Creamos un servidor
const servidor = http.createServer((req, res) => {

    // Configuramos la respuesta
    res.statusCode = 200; // Codigo 200 significa que la peticion fue exitosa

    res.setHeader("Content-Type", "text/plain"); // Indicamos que responderemos con texto plano

    res.end("Hola mundo desde Node.js"); // Este es el mensaje que le devolvere al cliente que haga una peticion HTTP a esta url
});

// Definimos el puerto y arrancamos el servidor
const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

/*

    1. Importamos el modulo http: Nos da acceso a todas las funcionalidades necesarias para crear un servidor que ESCUCHE PETICIONES (http request) y DEVUELVA RESPUESTA (http response)

    2. Creamos un servidor: Con el metodo http.createServer para definir un servidor que escuche las solicitudes de los clientes y les responda

    3. Repuesta del servidor: El servidor siempre va a respodner con el mensaje "Hola mundo desde Node.js"

    4. Escuchar en un puerto: El srevidor se ejecuta en el puerto 3000 (puede ser cualquier puerto libre) y nos muestra un mensaje de confirmacion cuando esta listo
*/