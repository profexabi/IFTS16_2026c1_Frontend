# Desarrollo backend y `Node.js`

## 1. Desarrollo Backend
El desarrollo backend se refiere a la parte invisible de una aplicacion o sitio web.
Mientras el frontend es lo que el usuario ve e interactua (botones, formularios o textos)
El backend se encarga de procesar solicitudes, manejar BBDD y ejecutar logica de negocio

### Para que sirve el backend?
El backend gestiona todo lo que sucede detras de la escena

- **Procesar datos**: Cuando el usuario envia un form o realiza una accion en el front, el back recibe esa informacion y la procesa

- **Acceder a BBDD**: Almacena y recupera datos de una BBDD como cuentas de usuario, productos en una tienda, etc

- **Seguridad**: Protege la informacion sensible, como contraseñas o datos personales

- **Autenticacion y autorizacion**: Gestionamos quien puede acceder a ciertas funcionalidades o areas de la aplicacion

### Por que es importante Node.js en el desarrollo moderno?

- **Velocidad**: Al estar basado en un solo hilo y ser no bloqueante, permite manejar muchas solicitudes simultaneas de manera eficiente

- **Ecosistema**: Tiene una amplia biblioteca de paquetes y herramientas disponibles a traves de npm para integrar nuevas funcionalidades

- **Escalabilidad**: Es ideal para aplicaciones que necesitan crecer rapidamente como plataformas de streaming o redes sociales


---


## 2. `Node.js`
#### Recuerden instalar Node.js y NPM
Es un entorno de ejecucion que permite usar JS fuera del navegador. Gracias a esto, ahora podemos usar JS para desarrollar aplicaciones del lado del servidor

Un punto clave en el desarrollo con Node.js es `npm` (Node Package Manager) es un gestor de paquetes que viene integrado con Node.js y su proposito es facilitar la instalacion y gestion de bibliotecas y herramientas desarrolladas por la comunidad o por otros desarrolladores.
El proposito es incorporar codigo externo que nos ayude en el desarrollo de nuestra app y evite que hagamos todo de 0.

La estructura basica al trabajar con npm consiste en inicializar un archivo `package.json`, es como el librito de instrucciones de nuestro proyecto, es el mapa de nuestra aplicacion. Lista dependencias instaladas, scripts utiles, version de la aplicacion, etc.

Para empezar a usar npm lo primero es ejecutar el comando `npm init`, este crea el archivo `package.json` que nos guia en la configuracion inicial y despues podemos instalar paquetes con npm install y listarlos como dependencias de nuestros proyectos

Tanto el navegador Google Chrome cono Node.js usan el motor V8. V8 es el programa que interpreta y ejecuta JavaScript. Node.js consiste entonces en:

- V8
- APIs de servidor
- Sistema de modulos
- Herramientas backend

---


### Modulos en `Node.js`
Los modulos en `Node.js` son como bloques de construccion que nos permiten organizar y reutilizar codigo de forma eficiente.
En lugar de tener todo el codigo en un archivo gigante, podemos dividirlo en diferentes archivos o modulos para luego importalos donde los necesitemos.

Node.js tiene varios modulos integrados que ya vienen listos para usar y nos permiten hacer cosas como trabajar con el sistema de archivos, manejar rutas o realizar tareas en red

Node nos provee APIs para el sistema operativo, es decir, funcionalidades y herramientas DISPONIBLES A TRAVES DE LOS MODULOS para interactuar con el sistema operativo

- `fs`: File System para leer archivos
- `path`: Para trabajar con rutas
- `http`: Para crear servidores web
- `os`: Operative System para interactuar con el sistema operativo

**En resumen, los modulos nos permiten dividir el codigo en archivos reutilizables**

#### Por que Node.js usa modulos?
Porque las aplicaciones backend suelen ser enormes

- rutas
- controladores
- BBDD
- autenticacion
- middlewares
- utilidades

Los modulos nos permiten dividir el codigo y separar responsabilidades

#### Como usamos los modulos?
A diferencia del navegador, donde tenemos objetos globales a disposicion con funcionalidades insertas dentro de estos objetos globales -> APIs Web insertadas dentro de los objetos globales.

Aca en Node.js tenemos que IMPORTAR estos modulos o funcionalidades.
**Tenemos dos tipos de sintaxis para trabajar con modulos**

La forma vieja o clasica, `CommonJS`
```js
// Aca traemos el modulo u "objeto global" que contiene metodos para interactuar con el sistema de archivos
const fs = require("fs");

module.export = funcionalidadX;
```

La forma moderna, `ESM`, `ECMAScript Modules`
```js
// Aca traemos el modulo u "objeto global" que contiene metodos para interactuar con el sistema de archivos
import fs from "fs";

export default funcionalidadY;
```

---

### Codigos estado http

Los códigos de estado HTTP son respuestas de tres dígitos que indican el resultado de una solicitud entre un cliente y un servidor, organizados en cinco categorías principales según su primer dígito.

**1xx Informativo**: El servidor recibió la solicitud y continúa el proceso (ej. **100 Continue**).

**2xx Éxito**: La solicitud fue recibida, comprendida y aceptada correctamente.
*   **200 OK**: Éxito estándar.
*   **201 Created**: Recurso creado exitosamente.
*   **204 No Content**: Éxito sin contenido en la respuesta.

**3xx Redirección**: Se requiere una acción adicional para completar la solicitud, generalmente una redirección.
*   **301 Moved Permanently**: Redirección permanente.
*   **302 Found**: Redirección temporal.
*   **304 Not Modified**: El recurso no ha cambiado, usar caché.

**4xx Error del Cliente**: La solicitud contiene sintaxis incorrecta o no puede cumplirse por error del usuario.
*   **400 Bad Request**: Solicitud incorrecta o malformada.
*   **401 Unauthorized**: Se requiere autenticación.
*   **403 Forbidden**: Acceso denegado por permisos.
*   **404 Not Found**: Recurso no encontrado.

**5xx Error del Servidor**: El servidor falló al procesar una solicitud aparentemente válida.
*   **500 Internal Server Error**: Error genérico del servidor.
*   **502 Bad Gateway**: Puerta de enlace o proxy inválido.
*   **503 Service Unavailable**: Servicio no disponible (sobrecarga/mantenimiento).


---

### Verbos HTTP
verbos http

Los verbos HTTP, también conocidos como métodos HTTP, indican la acción que se desea realizar sobre un recurso en una API o servidor web.

### Principales Verbos RESTful
*   **GET**: Recupera información de un recurso. Es **seguro** (no modifica datos) e **idempotente** (múltiples llamadas tienen el mismo efecto).
*   **POST**: Crea un nuevo recurso. **No es idempotente** (repetirlo crea múltiples recursos) y no es seguro.
*   **PUT**: Actualiza completamente un recurso existente o lo crea si no existe. Es **idempotente**.
*   **PATCH**: Aplica modificaciones **parciales** a un recurso. Generalmente no es idempotente.
*   **DELETE**: Elimina un recurso especificado. Es **idempotente**.

### Otros Verbos Importantes
*   **HEAD**: Similar a GET, pero solo devuelve los encabezados de la respuesta, sin el cuerpo. Es seguro e idempotente.
*   **OPTIONS**: Devuelve los métodos HTTP soportados por el servidor para una URL específica. Es seguro e idempotente.
*   **TRACE**: Devuelve la información recibida en la solicitud para fines de diagnóstico (eco).
*   **CONNECT**: Convierte la solicitud en un túnel TCP/IP, comúnmente usado para HTTPS a través de proxies.

### Conceptos Clave
*   **Seguro**: Un método es seguro si no altera el estado del servidor (ej. GET, HEAD, OPTIONS, TRACE).
*   **Idempotente**: Un método es idempotente si ejecutarlo varias veces produce el mismo resultado que ejecutarlo una vez (ej. GET, PUT, DELETE, HEAD, OPTIONS, TRACE).
*   **Código de Estado**: POST suele retornar **201 Created** al crear recursos; GET retorna **200 OK**; DELETE puede retornar **204 No Content**.