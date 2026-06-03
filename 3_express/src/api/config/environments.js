// Aca en este modulo leeremos y exportaremos de forma privada la informacion sensible de nuestro archivo oculto .env
import dotenv from "dotenv"; // Importamos el modunlo dotenv para acceder a las variables de entorno

dotenv.config(); // Aca cargamos las variables de entorno del .env


// Exportamos toda esta informacion oculta para usarla en los modulos donde la necesitemos
export default {
    port: process.env.PORT || 4000,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }
}