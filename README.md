# IFTS16_2026c1_Frontend

## Recursos
- [Clase de Protocolo HTTP](https://www.youtube.com/watch?v=l6oF_RpBf64)

- [Playlist conceptual de Desarrollo fullstack](https://www.youtube.com/watch?v=lC6JOQLIgp0&list=PLQxX2eiEaqbxx6Ds5bd1F6LZJo7_OnZhV)

---

## JavaScript

## Cronograma posible Frontend
- Ir alternando 30 min de codear una interfaz front -> **practica y live coding**
- *06/05 / JavaScript III*

- *13/05 / JavaScript V*

- *20/05 / JavaScript y VI y Objetos globales + APIs Web*

- *27/05 / Introduccion a Node.js, Protocolo HTTP y servidor con Node.js*

- *03/06 / Servidor con Express API REST*
    - Explicar importacion y exportacion
    - Chusmear `package.json`

- 10/06 / Eventos JS VI y JavaScript VII 

- 17/06 / JavaScript VIII 

- Presentacion TPO1 / 24 junio

- Presentacion TPO2 1 julio

---

## JavaScript VI / Manipulacion del DOM en JavaScript y eventos

### Que es el [DOM](https://www.w3schools.com/js/js_htmldom.asp)?
El DOM (Document Object Model) o  Modelo de Objetos del documento es una interfaz de programacion que representa un documento HTML como una estructura jerarquica de objetos, conocida como arbol DOM.
Esta estructura permite a los programas acceder, modificar, añadir o eliminar elementos, contenido, estilos y atributos del documento de forma dinamica.

Cada elemento HTML se convieret en un nodo dentro de ese arbol y todos los elementos estan relacionados entre si mediante padres, hijos y hermanos creando uan representacion en memoria de=l documento que el navegador puede manipular.
Este modelo fue estandarizado por W3C para resolver la incompatibilidad de navegadores a finales de los 90 y hoy es parte fundamental del estandar HTML5. Hoy es una API independiente de=l lenguaje que se usa en multiples lenguajes de programacion.

**Em resumen, el DOM es la base que permite a JavaScript interactuar con el contenido de una pagina web, transformando el codigo HTML en una estructura de objetos manipulable.**

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Mi página</title>
    </head>
    <body>
        <h1>Bienvenidos</h1>
        <p>Este es un párrafo</p>
    </body>
</html>
```

Este HTML seria representado en el DOM como una estructura en forma de arbol. Donde `document` es el objeto que representa toda la pagina web.

#### Diagrama de arbol del DOM
- document
    - html
        - head
            - title
        - body
            - h1
            - p

---

### Objetos globales y APIs Web
- JavaScript es un lenguaje
- Web APIs son las herramientas del navegador
- Objetos globales son el lugar donde el entorno de ejecucion expone estas herramientas

```js
// La ventanita flotante del alert
alert()
```

- Es una Web API en el navegador
- Expuesta como una funcion global
- Accesible desde el objeto global `window`
- Utilizada por JavaSCript
- Pero NO es parte de ECMAScript! No forma parte del lenguaje

**Las Web APIs no forman parte del lenguaje JavaScript, son funcionalidades que provee el navegador**. El navegador hace algo importante: expone las Web APIs dentro del objeto global

```js
// El navegador inyecta esta funcion a traves de objeto global window
window.alert();     // API de ventanas flotantes

// En la practica, podemos omitir 'window'

window.setTimeout;      // API de temporizadores
window.fetch;           // API de peticiones HTTP
window.localStorage;    // API de almacenamiento
window.navigator;       // API del navegador
window.document;        // API del DOM
```

### Que es una API?
API significa **Application Programming Interface** o Interfaz de Programacion de Aplicaciones

> Una API es un conjunto de funciones y herramientas que podemos usar para interactuar con algo, como el navegador, el servidor o una libreria

En el contexto de ejecion del navegador, una Web API es una funcion o conjunto de funciones que el navegador nos proporciona para que las usemos con JavaScript.

---

### Tipos de Web APIs mas comunes
#### 1. APIs del DOM
Nos permiten acceder y modificar el HTML y CSS de la pagina
- `document.getElementById()`
- `element.addEventListener()`

Uso: Manipulacion de elementos, eventos, clases, estilos, etc

---

#### 2. APIs de Red
Nos permiten comunicarnos con servidores o cargar recursos
- `fetch()` -> nueva
- `XMLHttpRequest()` -> vieja
- `WebSocket` -> comunicacion en tiempo real

Uso: Peticiones HTTP, chats, notificaciones en tiempo real

---

#### 3. APIs de Almacenamiento
Guardar informacion en el navegador

- `localStorage()`
- `SessionStorage`
- `IndexedDB`
- `Cookies` -> `document.cookie`

Uso: Guardar preferencias, datos de sesion, apps sin conexion, etc

---

#### 4. Timers
Permiten ejecutar funciones luego de un cierto tiempo

- `setTimeout()`
- `setInterval()`

Uso: Retrasos, animaciones, etc

---

#### 5. APIs de Dispositivos y Multimedia
Interaccion con hardware o medios

- `navigator.geolocation` -> GPS
- `MediaDevices.getUserMedia()` -> Microfono y camara
- `Notificacion` -> Notificaciones de sistema
- `Battery API`, `Clipboard API`

Uso: Apps moviles, camara, permisos, grabaciones, notificaciones

---

#### 6. APIs de interfaz grafica
Controlan animaciones, graficos y visualizacion

- `Canvas API`
- `WebGL`
- `Fullscreen API`
- `Screen Orientation API`

Uso: Juegos, visualizaciones, graficos dinamicos, etc



---



### JavaScript V
```js
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
```


---

### JavaScript III
- Repasar global, function/local, block
- Repasar tipos de funciones
- Variaciones de funciones flecha
```js
/*===============================
    Tipos de datos primitivos
=================================

Numeros: Valores numericos
Strings: Texto encerrado entre '' o ""
Booleanos: true / false
null: Valor intencionalmente vacio
undefined: Variable declarada pero sin valor
*/

// Estos tipos de datos son los unicos datos en JavaScript que NO son objetos
// Aun asi, JavaScript envuelve como objetos a Number y String
let numero = 42;
let texto = "hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(undefined);


// Gracias a los envolvedores de objetos o "Object Wrappers", JS les proporciona metodos
console.log(texto.length); // 4

for(let i=0; i < texto.length; i++) {
    console.log(texto[i]);
}


/*========================
    Scope (Ambito)
==========================

El Scope o ambito en JavaScript se refiere al contexto en el cual las variables y las funciones son accesibles y pueden ser referenciadas.

/////////////////////
// 1. Global Scope -> Ambito global

    - Las variables declaradas FUERA de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo. Esto incluye a var, let y const

    - En un navegador, las variables globales se adjuntan al objeto window -> Hablaremos de objetos globales en JavaScript V. Esto SOLAMENTE AFECTA a var (esto es un problema de seguridad)



/////////////////////
// 2. Local Scope / Function Scope -> Ambito local o Ambito de fnucion

    - Las variables declaradas DENTRO DE UNA FUNCION solo son accesibles dentro de esa funcion. Decimos que estas variables tienen un ambito local
*/

function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal(); // Soy local
mostrarLocal(); // Soy local

// Error! Queremos acceder a una variable definida dentro de una funcion, afuera de esa funcion
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

/*////////////////////
// 3. Block scope -> Ambito de bloque

    - A partir de ES6 (EcmaScript 2015) las variables declaradas con let y const tienen alcance de bloque, lo que significa que SOLO SON ACCESIBLES DENTRO DEL BLOQUE -> { }
    - El bloque se refiere a cualquier llave, sea de un if, for, etc { }
*/

if (true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined


/*============================
    Function vs Block Scope
==============================

Function scope: Las variables var tienen ambito de funcion (no limitadas por  bloques)

Block scope: Las variables let y const estan limitadas por el bloque en que se declaran { }
*/

// Ejemplo de alcance local o de funcion
function scopeFunction() {
    if (true) {
        var funcionVar = "Soy de funcion";
    }

    console.log(funcionVar);
}

scopeFunction(); // Soy de funcion


// Ejemplo de alcance de bloque
function scopeBloque() {
    if (true) {
        let bloqueLet = "Soy de bloque";
        const bloqueConst = "Soy de bloque tambien!";

        // Aca si podran ser consologueadas nuetras variables, porque seguimos dentro del bloque -> if { }
        console.log(bloqueLet);
        console.log(bloqueConst);
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBloque(); 


/*=====================================
    Scope chain o Cadena de ambito
=======================================

Cuando intentamos acceder a una variable, JavaScript busca en la cadena de ambito, comenzando por el ambito mas interno y moviendose hacia los ambitos mas externo hasta encontrar la variable o llegar al ambito global
*/

var globalVar = "Soy global";

function externa() {
    var externaVar = "Soy de externa";

    function interna() {
        var internaVar = "Soy de interna";

        console.log(globalVar);
        console.log(externaVar);
        console.log(internaVar);
    }

    interna();

    // console.log(internaVar); // Uncaught ReferenceError: internaVar is not defined
}

externa();


/*==========================
    Hoisting (elevacion)
============================

Las declaraciones de variables y funciones en JavaScript se "mueven hacia arriba" de su contexto de ejecucion (scope).
Solo las declaraciones son elevadas, no las inicializaciones

- Variables con var: Se elevan y se inicializan con undefined

- Variables con let y const: Se elevan pero NO se inicializan, lo que lleva a un error si se accede antes de la declaracion
*/

// Hoisting con var
console.log(elevadaVar); // undefined
var elevadaVar = "Soy una var elevada";
console.log(elevadaVar); //Soy una var elevada

// Hoisting con let y const
// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);


/*=======================================
    Diferencias entre var, let y const
=========================================

//////////
// var
    - Tiene ambito de funcion -> function() { }
    - Permite la redeclaracion y la reasignacion

//////////
// let
    - Tiene ambito de bloque (solo esta disponible dentro de ese bloque) -> { }
    - No permite la redeclaracion pero si la reasignacion

//////////
// const
    - Tiene ambito de bloque (solo esta disponible dentro de ese bloque) -> { }
    - A diferencia de let, NO permite ni la reasignacion ni la redeclaracion


Diferencias clave:
    - let y const se introdujeron en ES6 para mejorar el ambito de las variables y reducir la probabilidad de anulaciones accidentales de variables

    - Tanto let como const no permiten la elevacion mientras que var si
    (RECONTRA EXTRA / tecnicamente let y const si tienen hoisting, pero estan en la Temporal Dead Zone o TDZ hasta su inicializacion)

    - const asegura que el valor de la variable permanece constnate, mientras que let permite la reasignacion. AUNQUE objetos y arrays si pueden modificarse
*/

// Ejemplo reasignacion con var
var a = 10;
var a = 30;
console.log(a);

// Ejemplo de reasignacion con let (ERROR)
let x = 10;
x = 20;
console.log(x);
// let x = 30; // Uncaught SyntaxError: Identifier 'x' has already been declared


// Ejemplo de reasignacion en arrays y objetos con const
const obj = { nombre: "Derek" }; // Aca fijamos una posicion del objeto en memoria, que no se alterara con nuevas propiedades

obj.nombre = "Edgar"; // Modificamos el valor de la propiedad, esto no afecta a su posicion en memoria

// obj = {}; // Error, esto si altera su posicion en memoria


/*==============================
    Tipos de funciones en JS
================================

1. Funcion declarada / Named function o Basic function

    Es la declaracion basica de JS, usa la keyword function

    Se recomienda para funciones con nombre o cuando necesitemos hoisting.
    Las funciones declaradas con la keyword function, se pueden elevar a la parte superior de su ambito. Es decir, podemos llamar a la funcion antes de ser declarada
*/
saludar(); // Hola clase de frontend!


function saludar() {
    console.log("Hola clase de frontend!");
}



/* 2. Funcion expresada / Function expression

    Es la funcion que esta dentro de una variable

    Son utiles para cuando queremos controlar donde va a estar disponible la funcion o cuando va a ser usada como argumento para otra funcion
*/

const saludarDos = function() {
    console.log("Hola mundo!");
}

saludarDos(); // Hola mundo!



/* 3. Funcion anonima / Anonymous function

    Son las funciones sin nombre y suelen usarse como callbacks
*/

// Ejemplo de asincronia que veremos en JS VII
setTimeout(function() {
    console.log("Hola mundo desde un temporizador");
}, 1000);

console.log("La linea de ejecucion principal sigue corriendo");



/* 4. Funcion de flecha / Arrow function

    Son especialmente utiles para escribir funciones de una linea
*/

const sumar = (a, b) => a + b; // No abrimos {} ni ponemos return (esta implicito)
console.log(sumar(2, 3)); // 5



/* 5. Funcion de metodos / Method function

    Son las funciones definidas dentro de un objeto o clase
*/

const alumno = {
    nombre: "Derek",
    saludar() {
        console.log(`Hi! I'm ${this.nombre}`);
    }
}

alumno.saludar(); // Hi! I'm Derek



/* 6. Funcion de constructor / Constructor function

    Se usan para crear objetos, se invocan usando el keyword new
*/

function Usuario(nombre, id) {
    this.nombre = nombre;
    this.id = id;
}

const luciano = new Usuario("Luciano", 12345);
console.log(luciano.id); // 12345



/* 7. Expresion de funcion ejecutada inmediatamente / IIFE - Immediately Invoked Function Expressions

    Las IIFE son funciones que se ejecutan innmediatamente despues de haberse definido
*/
(function() {
    console.log("Hola, soy una IIFE y me ejecuto al momento");
})(); 
// Hola, soy una IIFE y me ejecuto al momento



/* 8. Funcion de orden superior / High Order Functions

    Las High Order Functions nos permiten usar otras funciones como parametros o devolver funciones como resultado o ambas
*/

// Ejemplo 1
let lista = [1, 2, 3, 4, 5];
const duplicados = lista.map(function(num) {
    return num * 2
});
console.log(duplicados); // [2, 4, 6, 8, 10]


/* 9. Funcion asincronica / Async function

    Las funciones asincronicas se declaran con la keyword asnync y devuelven un objeto Promise que representa la terminacion o fracaso de una operacion asincrona

    Se usa el operador await para esperar la operacion asincronica

    async function traerInfo() {
        let response = await fetch("url"); // Peticion HTTP a una API Rest, recibo los datos en JSON
        let data = await response.json; // Transformamos este JSON en objetos iterables de JavaScript
    }
*/



/*=============================================
    Tipos de funciones flecha en JavaScript
===============================================

1. Sin parametros: si la funcion no lleva parametros, podemos usar parentesis vacias */
const saludarFlecha = () => console.log("Hola desde una funcion flecha de una linea");


// 2. Un solo parametro: Aca las parentesis son opcionales
// Las funciones flecha single line, si detectan que una funcion devuelve un valor, le ponen automaticamente return!
const cuadrado = num => num * num; 
console.log(cuadrado(5)); // 25

// 3. Mas de un parametro: Aca las parentesis son obligatorias
const restar = (a, b) => a - b;
console.log(restar(5, 3)); // 2


// 4. Mas de una instruccion en la funcion: Necesitamos usar {} y return si queremos devolver un valor en la funcion
const saludarAlumno = nombre => {
    const saludo = `Hola ${nombre}`;
    return saludo;
}

console.log(saludarAlumno("Leonardo")); // Hola Leonardo


// 5. Funciones de orden superior y callbacks: Muy populares cuando se usan como callbacks (una funcion como parametro de otra funcion) -> Lo vemos en JavaScript VII
/* let lista = [1, 2, 3, 4, 5];

// Opcion sin arrow function
const duplicados = lista.map(function(num) {
    return num * 2
});
*/

const triplicados = lista.map(num => num * 3);
console.log(triplicados); // [3, 6, 9, 12, 15]
```

### JavaScript V
- Repasar objetos globales

### JavaScript VI
- Manipulacion del DOM

### JavaScript VII
- High order functions, destructuring, spread operator, closures, funciones anidadas, callbacks, web apis

### JavaScript VIII
- JSON, asincronia, promesas, fetch, async/await y try/catch


---

## JavaScript III / Scope y ambito, funciones y tipos de funciones
```js
/*===============================
    Tipos de datos primitivos
=================================

Numeros: Valores numericos
Strings: Texto encerrado entre '' o ""
Booleanos: true / false
null: Valor intencionalmente vacio
undefined: Variable declarada pero sin valor
*/

// Estos tipos de datos son los unicos datos en JavaScript que NO son objetos
// Aun asi, JavaScript envuelve como objetos a Number y String
let numero = 42;
let texto = "hola";
let verdadero = true;
let vacio = null;
let indefinido;

console.log(numero);
console.log(texto);
console.log(verdadero);
console.log(vacio);
console.log(undefined);


// Gracias a los envolvedores de objetos o "Object Wrappers", JS les proporciona metodos
console.log(texto.length); // 4

for(let i=0; i < texto.length; i++) {
    console.log(texto[i]);
}


/*========================
    Scope (Ambito)
==========================

El Scope o ambito en JavaScript se refiere al contexto en el cual las variables y las funciones son accesibles y pueden ser referenciadas.

/////////////////////
// 1. Global Scope -> Ambito global

    - Las variables declaradas FUERA de cualquier funcion o bloque tienen alcance global y son accesibles desde cualquier parte del codigo. Esto incluye a var, let y const

    - En un navegador, las variables globales se adjuntan al objeto window -> Hablaremos de objetos globales en JavaScript V. Esto SOLAMENTE AFECTA a var (esto es un problema de seguridad)



/////////////////////
// 2. Local Scope / Function Scope -> Ambito local o Ambito de fnucion

    - Las variables declaradas DENTRO DE UNA FUNCION solo son accesibles dentro de esa funcion. Decimos que estas variables tienen un ambito local
*/

function mostrarLocal() {
    var localVar = "Soy local";
    console.log(localVar);
}

mostrarLocal(); // Soy local
mostrarLocal(); // Soy local

// Error! Queremos acceder a una variable definida dentro de una funcion, afuera de esa funcion
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

/*////////////////////
// 3. Block scope -> Ambito de bloque

    - A partir de ES6 (EcmaScript 2015) las variables declaradas con let y const tienen alcance de bloque, lo que significa que SOLO SON ACCESIBLES DENTRO DEL BLOQUE -> { }
    - El bloque se refiere a cualquier llave, sea de un if, for, etc { }
*/

if (true) {
    let bloqueLet = "Soy de bloque";
    console.log(bloqueLet);
}

// console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined


/*============================
    Function vs Block Scope
==============================

Function scope: Las variables var tienen ambito de funcion (no limitadas por  bloques)

Block scope: Las variables let y const estan limitadas por el bloque en que se declaran { }
*/

// Ejemplo de alcance local o de funcion
function scopeFunction() {
    if (true) {
        var funcionVar = "Soy de funcion";
    }

    console.log(funcionVar);
}

scopeFunction(); // Soy de funcion


// Ejemplo de alcance de bloque
function scopeBloque() {
    if (true) {
        let bloqueLet = "Soy de bloque";
        const bloqueConst = "Soy de bloque tambien!";

        // Aca si podran ser consologueadas nuetras variables, porque seguimos dentro del bloque -> if { }
        console.log(bloqueLet);
        console.log(bloqueConst);
    }

    // console.log(bloqueLet); // Uncaught ReferenceError: bloqueLet is not defined
    // console.log(bloqueConst); // Uncaught ReferenceError: bloqueConst is not defined
}

scopeBloque(); 


/*=====================================
    Scope chain o Cadena de ambito
=======================================

Cuando intentamos acceder a una variable, JavaScript busca en la cadena de ambito, comenzando por el ambito mas interno y moviendose hacia los ambitos mas externo hasta encontrar la variable o llegar al ambito global
*/

var globalVar = "Soy global";

function externa() {
    var externaVar = "Soy de externa";

    function interna() {
        var internaVar = "Soy de interna";

        console.log(globalVar);
        console.log(externaVar);
        console.log(internaVar);
    }

    interna();

    // console.log(internaVar); // Uncaught ReferenceError: internaVar is not defined
}

externa();


/*==========================
    Hoisting (elevacion)
============================

Las declaraciones de variables y funciones en JavaScript se "mueven hacia arriba" de su contexto de ejecucion (scope).
Solo las declaraciones son elevadas, no las inicializaciones

- Variables con var: Se elevan y se inicializan con undefined

- Variables con let y const: Se elevan pero NO se inicializan, lo que lleva a un error si se accede antes de la declaracion
*/

// Hoisting con var
console.log(elevadaVar); // undefined
var elevadaVar = "Soy una var elevada";
console.log(elevadaVar); //Soy una var elevada

// Hoisting con let y const
// console.log(elevadaLet); // Uncaught ReferenceError: Cannot access 'elevadaLet' before initialization
let elevadaLet = "Soy una let elevada";
console.log(elevadaLet);


/*=======================================
    Diferencias entre var, let y const
=========================================

//////////
// var
    - Tiene ambito de funcion -> function() { }
    - Permite la redeclaracion y la reasignacion

//////////
// let
    - Tiene ambito de bloque (solo esta disponible dentro de ese bloque) -> { }
    - No permite la redeclaracion pero si la reasignacion

//////////
// const
    - Tiene ambito de bloque (solo esta disponible dentro de ese bloque) -> { }
    - A diferencia de let, NO permite ni la reasignacion ni la redeclaracion


Diferencias clave:
    - let y const se introdujeron en ES6 para mejorar el ambito de las variables y reducir la probabilidad de anulaciones accidentales de variables

    - Tanto let como const no permiten la elevacion mientras que var si
    (RECONTRA EXTRA / tecnicamente let y const si tienen hoisting, pero estan en la Temporal Dead Zone o TDZ hasta su inicializacion)

    - const asegura que el valor de la variable permanece constnate, mientras que let permite la reasignacion. AUNQUE objetos y arrays si pueden modificarse
*/

// Ejemplo reasignacion con var
var a = 10;
var a = 30;
console.log(a);

// Ejemplo de reasignacion con let (ERROR)
let x = 10;
x = 20;
console.log(x);
// let x = 30; // Uncaught SyntaxError: Identifier 'x' has already been declared


// Ejemplo de reasignacion en arrays y objetos con const
const obj = { nombre: "Derek" }; // Aca fijamos una posicion del objeto en memoria, que no se alterara con nuevas propiedades

obj.nombre = "Edgar"; // Modificamos el valor de la propiedad, esto no afecta a su posicion en memoria

// obj = {}; // Error, esto si altera su posicion en memoria


// TO DO, falta introduccion a las funciones, tipos de funciones y funciones flecha
```

---


## Videos recomendados
### [Clase 2hs / Protocolo HTTP y lenguaje HTML](https://www.youtube.com/watch?v=l6oF_RpBf64)

### [Boom de la IA y tendencias de recontrataciones para 2027](https://www.youtube.com/watch?v=OFmxKgaLN80)


---


#### Ejercicio sugerido 1, armen una pagina de recetas con HTML

#### Ejercicio sugerido 2, armen su CV con HTML

---

## Recursos Frontend
- [W3Schools HTML](https://www.w3schools.com/html/default.asp)
- [W3Schools CSS](https://www.w3schools.com/css/default.asp)

- [Guia Flexbox CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Guia Grid CSS Tricks](https://css-tricks.com/complete-guide-css-grid-layout/)

- [Jueguito rana flexbox](https://flexboxfroggy.com/#es)
- [Jueguito grid garden](https://cssgridgarden.com/#es)

### Herramientas utiles
- [Iconos](https://heroicons.com/)
- [Ejemplos de boxshadow](https://getcssscan.com/css-box-shadow-examples)
- [CSS Gradient para crear degradados personalizados](https://cssgradient.io/)

---

## Backend
### [Clase 2hs Protocolo HTTP y lenguaje HTML](https://www.youtube.com/watch?v=l6oF_RpBf64)

