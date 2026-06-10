/*==============================
    Callbacks en JavaScript
================================

Los callbacks son funciones que se pasan como argumentos a otras funciones y se ejecutan despues de que ocurra algun evento o se complete alguna operacion
*/

function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);

    // Al terminar de consologuear, se ejecuta la funcion que pase por parametro
    callback();
}

function despedirse() {
    console.log("Chau! nos vemos");
}

// Forma 1: Declaramos la funcion adentro, como segundo parametro
saludar("Edgar", () => {
    console.log("Chauchis!")
})
/*
    Hola Edgar
    Chauchis!
*/

// Forma 2: Invocamos la funcion como segundo parametro
saludar("Marcela", despedirse);
/*
    Hola Marcela
    Chau! nos vemos
*/


/*============================
    Caracteristicas de JS
==============================

//////////////////////////////////
// 1. Funciones de Primera Clase

En JS las funciones son "ciudadanos de primer clase", esto significa que pueden ser:

    - Asignadas a variables
    - Pasadas como argumentos
    - Retornadas desde otras funciones


//////////////////////////////////
// 2. Sincronia y Asincronia

Ejemplo de Callback Sincrono
function procesoPesado(callback) {
    console.log("Iniciando proceso pesado...");
    
    // Simulamos un procesamiento que tarde unos segundos
    for(let i = 0; i < 5000; i++) {
        console.log("<- Numero de iteraciones");
    }
    
    callback();
}

procesoPesado(() => {
    console.log("Proceso completado");
});

console.log("Esto se ejecuta despues del callback");
*/

// Ejemplo de Callback Asincrono
function procesoAsincrono(callback) {
    console.log("Iniciando proceso asincrono...");

    setTimeout(() => {
        callback();
    }, 5000);
}

procesoAsincrono(() => {
    console.log("Proceso asincrono completado");
});

console.log("Este mensaje se ejecutara inmediatamente");


/*==============================
    Casos de uso de callbacks
================================

// 1. Temporizadores 

// setTimeout
setTimeout(function() {
    console.log("Esto se ejecuta después de 3 segundos");
}, 3000);


// 2. Eventos del DOM

boton.addEventListener("click", () => {
    console.log("Hiciste click en el boton");
});


// 3. Operaciones con Arrays

const numeros = [1, 2, 3, 4, 5];

// forEach
numeros.forEach(function(numero, indice) {
    console.log(`Índice: ${indice}, Valor: ${numero}`);
});

// map
const duplicados = numeros.map((numero) => numero * 2);



// 4. Peticiones HTTP


// 5. Lectura de Archivos (Node.js)


==============================================
    Ventajas y Desventajas de los callbacks
==============================================

Ventajas
    - Simplicidad: Facil de entender para operaciones simples
    - Universalidad: Compatibles con todos los navegadores
    - Flexibilidad: Permiten crear codigo reutilizable

Desventajas
    - Callback hell: Anidamiento excesivo de callbacks que dificultan la lectura
    - Manejo de errores: Complicado con callbacks anidados
    - Flujo de control: Dificil de seguir con operaciones complejas


Ejemplo de callback hell:
    https://dev.to/jerrycode06/callback-hell-and-how-to-rescue-it-ggj

La solucion a los problemas de los callbacks son :

    - Promesas
    - Async/Await
*/
