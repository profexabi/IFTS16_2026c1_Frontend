// Explicacion previa de objetos globales!
// Objeto global document: Nos permite interactuar con el DOM 

let titulo = document.getElementById("titulo");
console.log(titulo); // <h1 id="titulo">Introduccion a JavaScript</h1>
console.log(titulo.textContent); // Introduccion a JavaScript


/*========================================
    Almacenamiento persistente en JS
==========================================

El navegador nos ofrece la posibilidad de almacenar datos en el, desde indexedDB hasta BBDD especificas de cada navegador. Pero una de las opciones mas populares son localStorage y sessionStorage

localStorage es una web API que permite almacenar datos de forma persistente
Estos datos no se borrar, no expiran, por lo que estaran disponibles despues de cerrar el navegador o apagar la compu

- Guardar datos que deben persistir incluso al cerrar el navegador -> localStorage
- Los datos en sessionStorage persisten hasta cerrar la pestaña
- Almacenar configuraciones de usuario, temas, carritos de compra, etc

- Tamaño max de 5-10MB por dominio
- Almacena solo texto plano en String -> Necesitaremos hacer una conversion a JSON
- Solo es accesible desde JavaScript (no se envia al servidor)
- Es una operacion sincrona

    1. Guardar datos: localStorage.setItem(clave, valor) 
    2. Leer datos: localStorage.getItem(clave) 
    3. Eliminar un dato: localStorage.removeItem(clave) 
    4. Eliminar todo: localStorage.clear() 

    1. Guardar datos: sessionStorage.setItem(clave, valor) 
    2. Leer datos: sessionStorage.getItem(clave) 
    3. Eliminar un dato: sessionStorage.removeItem(clave) 
    4. Eliminar todo: sessionStorage.clear() 
*/

localStorage.setItem("alumno", "Cheri");

// El array nos proporciona una lista ordenada
// El objeto nos estructura los datos en pares clave-valor
// El array de objetos nos permite combinar ambos, una lista ordenada de elementos complejos clave-valor
/*
let listaAlumnos = [
    { id: 1, nombre: "Derek"},
    { id: 2, nombre: "Melani"},
    { id: 3, nombre: "Leonardo"},
    { id: 4, nombre: "Luciano"},
    { id: 5, nombre: "Marcela"},
    { id: 6, nombre: "Edgar"},
    { id: 7, nombre: "Adam"},
    { id: 8, nombre: "Cheri"},
];

console.log(listaAlumnos);

// JSON es un formato ordenado, ligero y efiente de texto plano que copia la notacion de objetos de JavaScript, de ahi el nombre JavaScript Object Notation
console.log(JSON.stringify(listaAlumnos));

// Necesitamos almacenar datos complejos como arrays de objetos como strings (texto plano)
localStorage.setItem("alumnosIFTS", JSON.stringify(listaAlumnos));
*/

// Machetes con metodos de arrays: https://drive.google.com/drive/u/1/folders/1QJtNkPRSPVN4S2WCuwoeNcxrZbZkPH0y

// Ahora obtendre del almacenamiento del navegador mi lista alumnos como un string JSON que tendre que parsear
let listaAlumnosFormato = JSON.parse(localStorage.getItem("alumnosIFTS"));
console.log(listaAlumnosFormato);

// Ejemplo del reduce y la importancia de declarar un valor inicial en arrays de objetos
const ventas = [
    { producto: 'Camisa', cantidad: 3, precio: 25 },
    { producto: 'Pantalón', cantidad: 2, precio: 40 },
    { producto: 'Zapatos', cantidad: 1, precio: 80 }
];
const totalVentas = ventas.reduce((total, item) => {
    return total + (item.cantidad * item.precio)
}, 0); // El 0 es el valor que ira para el total (nuestra variable que va acumulando y sumando)

console.log(totalVentas); // 235

/*
Comparación de Rendimiento
1. Bucles clásicos ( for , while ) son los más rápidos para iteraciones simples
2. Métodos funcionales ( map , filter ) son más lentos pero más expresivos
3. for...of ofrece buen equilibrio entre rendimiento y legibilidad

    Transformar                 array.map()
    Filtrar                     elementos.filter()
    Reducir a valor             reduce()
    Buscar elemento             find() / findIndex()
    Efectos secundarios         forEach() o for...of
    Necesidad de romper bucle   for o for...of
    Verificar condiciones       some() / every()
*/