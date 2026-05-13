# IFTS16_2026c1_Frontend

## JavaScript

## Cronograma posible Frontend
- Ir alternando 30 min de codear una interfaz front -> **practica y live coding**
- *06/05 / JavaScript III*

- *13/05 / JavaScript V*

- 20/05 / JavaScript y VI y VII 1a parte

- 27/05 / JavaScript VII 2a parte

- 03/06 / JavaScript VIII 1a parte

- 10/06 / JavaScript VIII 2a parte

- A definir 17, 24

- A definir 01/07 presentacion proyectos front?

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

