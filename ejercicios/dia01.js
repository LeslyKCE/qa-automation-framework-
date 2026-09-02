console.log ("Inicio de prueba");
console.log ("Modulo: Contactos");
console.log ("Creando Contacto");
console.log ("Contacto creado correctamente");
console.log ("Fin de prueba");

console.warn ("El contacto no tiene correo");
console.log ("Inicio del proceso");
console.warn ("Advertencia: quedan 2 intentos");
console.log ("Fin del proceso");

console.warn ("El contacto no tiene correo");
console.warn ("La empresa no tiene RUC");
console.warn ("El negocio no tiene responsable");

console.error ("Error al iniciar sesión");

console.log ("Inicio de consulta");
console.error ("Error: la Api devolvió un 500");
console.log ("Fin de consulta");

console.error ("Usuario incorrecto");
console.error ("Contraseña incorrecta");
console.error ("Cuenta bloqueada");

console.log ("Iniciando prueba de contacto");
console.log ("Contacto creado correctamente");
console.warn ("Advertencia: El contacto no tiene correo");
console.error ("Error: No se pudo enviar la notificación");
console.log ("Prueba finalizada");

const contacto = {
    nombre: "Lesly",
    apellido: "Chavez",
    correo: "lchavez@mail.com"
};

console.table (contacto)

const negocio = {
    nombre: "Implementación CRM",
    cliente: "Lesly Chavez",
    monto: 500,
    estado: "Nuevo"
};

console.table (negocio)


const nombre = "Lesly";
let edad = "28";

console.log (nombre)
console.log (edad)

edad = "25";
console.log (edad)

const usuario = "Admin";
let intentos = "3";

console.log (usuario)
console.log (intentos)

intentos = "2";
console.log (intentos)

intentos = "1";
console.log (intentos)

const mmodulo = "Contactos";
let registros = "10";

console.log (mmodulo)
console.log (registros)

registros = "11";
console.log (registros)

registros = "12";
console.log (registros)

const producto = "laptop";
const precio = 2500;

console.log (producto + " a " + precio)

console.log (typeof producto)
console.log (typeof precio)

const activo = true;
const eliminado = false;

console.log (activo)
console.log (eliminado)
console.log (typeof activo)

const usuarioActivo = true;
const cuentaBloqueada = false;

console.log (usuarioActivo)
console.log (cuentaBloqueada)
console.log (typeof cuentaBloqueada)

const correo = null;
console.log (correo)

console.log (typeof correo)

let propietario;
propietario = "Lesly";
console.log (propietario)

let responsable;
console.log (responsable)

responsable = "Admin";
console.log (responsable)

const nombrePrueba = "Crear contacto";
const modulo = "Contactos";
const rregistros = 10;
const pruebaExitosa = true;
const error = null;
let responsablePrueba;
responsablePrueba = "Lesly"

console.log (nombrePrueba)
console.log (modulo)
console.log (rregistros)
console.log (pruebaExitosa)
console.log (error)
console.log (responsablePrueba)