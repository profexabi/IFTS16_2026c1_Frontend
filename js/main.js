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