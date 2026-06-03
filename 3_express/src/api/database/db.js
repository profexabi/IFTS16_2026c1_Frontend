// Aca dejo creada la conexion a la Base de Datos!

// Importamos la informacion privada que exporta environments.js
import environments from "../config/environments.js";

// Importamos el modulo mysql2 en modo promesas, qque nos permitira hacer peticiones asincronas a la BBDD
import mysql from "mysql2/promise";

// Extraigo el objeto con info de conexion a mi BBDD
const { database } = environments;

// Creo una conexion con mi BBDD (creo un pool de conexion -> conjunto de conexiones abiertas)
const connection = mysql.createPool({
    host: database.host,
    database: database.name,
    user: database.user,
    password: database.password
});

// Exporto el pool de conexiones para realizar sentencias SQL en otros archivos
export default connection; 