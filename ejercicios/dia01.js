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