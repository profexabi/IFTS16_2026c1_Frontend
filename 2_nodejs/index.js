/*========================
    Modulos en Node.js
========================*/

// fs (File System): Modulo que permite interactuar con el sistema de archivos. Podremos leer, escribir, actualizar y borrar archivos de forma sencilla

// Recordemos, para poder usar cualquier modulo (pensemos en un modulo como un objeto global lleno de funciones)
const fs = require("fs"); // Importo el modulo fs

fs.readFile("archivos/texto.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Ocurrio un error: ", err); // Posible error: no such file or directory
        return; // Finalizo la ejecucion de este bloque de codigo
    }

    console.log("Contenido del archivo: ", data); // Contenido del archivo:  Hola! Soy un archivo de texto en la carpeta /archivos
});


/* path: El modulo path nos ayuda a manejar y manipular rutas de archivos y directorios de forma mas segura y comoda

    Windows usa: "C:\carpeta\archivo.txt"

    Linux/macOS (vienen de UNIX) usan: "/carpeta/archivo.txt"

    path resuelve estas diferencias

    join() -> Une rutas
    basename() -> nombre del archivo
    dirname() -> carpeta del archivo
*/

const path = require("path");

const ruta = path.join(__dirname, "archivos", "texto.txt"); // Me devuelve la ruta de mi archivo de texto

console.log(ruta); // /home/xabier/Escritorio/Docencia/2026/IFTS16_2026c1_Frontend/2_nodejs/archivos/texto.txt


// os (Operative System): Es un modulo que nos permite obtener info del sistema opreativo en el que estamos ejecutando node.js
const os = require("os");

const memoriaLibre = os.freemem();
const tipoSistema = os.type();

console.log("Memoria libre: ", memoriaLibre);
console.log("Uso un sistema operativo: ", tipoSistema);
// Memoria libre:  9843675136
// Uso un sistema operativo:  Linux


// http: Modulo clave para trabajar con servidores y manejar peticiones HTTP. Es la base de cualquier aplicacion web en Node.js
// Haremos un servidor web en Node.js en nodeServer.js