// Explicacion basica: El objeto global console me proporciona el metodo log
console.log("Mensaje por consola");

// Mas en detalle, log es una API Web, que es un conjunto de funciones y herramientas que nos da el navegador para interactuar con el navegador, en este caso, con la consola


/*================================================
    Como funciona la manipulacion del DOM?
==================================================    

JavaScript puede acceder y modificar cualquier elemento del DOM utilizando el objeto global document, con el podra

    - Modificar el contenido de texto, atributos, clases, etc
    - Añadir o elminar elementos del DOM
    - Escuchar eventos de usuario (clicks, teclas, etc)


==========================================    
    Seleccion de elementos en el DOM
==========================================    

    getElementById()

        - Este metodo selecciona un unico elemento por su id (si no existe devuelve null)
        - Solo selecciona el primer elemento que coincida con el id
*/        

// Guardo en una variable el elemento HTML
let titulo = document.getElementById("titulo");

console.log(titulo); // <h1 id="titulo">Introduccion a JavaScript</h1>
console.log(titulo.textContent); // Introduccion a JavaScript


/*
    querySelector()
    querySelectorAll()

        - querySelector(): Selecciona el PRIMER elemento que coincida con un selector CSS
        - querySelectorAll(): Selecciona TODOS los elementos que coinciden con el selector CSS
*/

let primerParrafo = document.querySelector(".mensaje");
console.log(primerParrafo.textContent); // Primer parrafo

let listaParrafos = document.querySelectorAll(".mensaje");
console.log(listaParrafos); //  NodeList -> [p.mensaje, p.mensaje]

/* Opcion 1 -> Funcion declarada
listaParrafos.forEach(function(parrafo) {
    console.log(parrafo.textContent);
});
*/

// Opcion 2 -> Funcion flecha
listaParrafos.forEach(parrafo => console.log(parrafo.textContent));
// Primer parrafo
// Segundo parrafo


/*========================================    
    Modificar contenido y atributos
==========================================    

Una vez que seleccionamos un elemento, podemos modificar su contenido, atributos o estilo

    - textContent: Modifica texto dentro de un elemento
    - innerHTML: Modifica el contenido HTML dentro de un elemento con acceso a las etiquetas
    - setAttribute: Modifica los atributos de un elemento
    - style: Permite cambiar el estilo CSS en linea de un elemento
*/

let miParrafo = document.getElementById("miParrafo");

// Cambio el texto del elemento #miParrafo
miParrafo.textContent = "Nuevo texto desde JavaScript"

// Inyectamos HTML
miParrafo.innerHTML = "<strong>Nuevo texto en negrita!</strong>";


let boton = document.getElementById("boton");

// Cambiamos el atributo id
boton.setAttribute("id", "nuevoId");

// Cambiamos el estilo del boton
boton.style.backgroundColor = "#00FF41";
boton.style.padding = "10px";
boton.style.border = "2px solid";
boton.style.borderRadius = "5px";