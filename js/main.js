/*====================
    JSON
======================

JSON o JavaScript Object Notation es basicamente un formato ligero de texto plano, provee una sintaxis a ese texto plano que nos permite organizar la informacion. Es el estandar para la comunicacion entre aplicaciones en la web.

JSON es un FORMATO de texto que representa datos estructurados basados en dos estructuras fundamentales

    1. Coleccion de pares nombre/valor (equivalente a un objeto en JavaScript)
    2. Lista ordenada de valores (equivalnente a un array en JavaScript)

Caracteristicas principales
    - Es textual y legible por humanos
    - Es ligero (ocupa poco espacio)
    - Es facil de parsear y generar
        JSON.parse(datosUsuarios) -> Convertimos un JSON a objetps JavaScript
        JSON.stringify(datosUsuarios) -> Convertimos un array de objetos a JSON

*/


/*=============================================================
    Que herramientas usamos para manejar asincronia con JS?
===============================================================

1. Callbacks: Funcion que se pasa como argumento para ejecutarse despues de completar una operacion

2. Promises: Objetos que representan un valor que puede estar disponible ahora, en el futuro o nunca. Sus estados son

    - pending (pendiente)
    - fulfilled (completado)
    - rejected (rechazado)

    fetch("https://api.ejemplo.com/datos")
        .then(respuesta => respuesta.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

    1. fetch hace una peticion HTTP que
    2. Devuelve una promesa que
        - Se resuelve con una Response (respuesta del servidor)
        - Se rechaza si hay un error de red
*/