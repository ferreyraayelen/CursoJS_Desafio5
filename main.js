//DESAFÍO 5
//Crear objetos mediante clases
class ServicioWeb {
    constructor(nombre, caracteristicas, precio) {
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
    }
    mostrarServicio() {
        console.log("Servicio: " + this.nombre + " Caranterísticas: " + this.caracteristicas + " Precio: " + this.precio);
    }
}


let servicio1 = new ServicioWeb("Landig Page", "Las landing pages son páginas web promocionales que se crean para dar a conocer un producto o servicio en concreto a través de una única página web, sin páginas interiores. Es una manera excelente de fortalecer tu marca.", 10000);
let servicio2 = new ServicioWeb("Sitio web", "El sitio web es el conjunto de varias páginas web que se agrupan para cumplir determinados objetivos, sin embargo, estos tienen un propósito común: ser la carta de presentación de un negocio en el mundo del internet.", 20000);
let servicio3 = new ServicioWeb("Tienda online", "Son aquellos sitios que permiten realizar un comercio electrónico mediante el sitio web, también llamados como carritos de compras o ventas. Estos sitios web permiten realizar transacciones entre comprador y vendedor.", 30000);


servicio1.mostrarServicio();
servicio2.mostrarServicio();
servicio3.mostrarServicio();


//funcion constructura

/* function Servicio(nombre, caracteristicas, precio) {
    this.nombre = nombre;
    this.carcacteristicas = caracteristicas;
    this.precio = precio;
    //metodo personalizado
    this.informarCaracteristicas = function () { console.log("Caracteristicas de los servicios: " + this.carcacteristicas) }
}


const landingPage = new Servicio("Landig Page", "Las landing pages son páginas web promocionales que se crean para dar a conocer un producto o servicio en concreto a través de una única página web, sin páginas interiores. Es una manera excelente de fortalecer tu marca.", 10000);
const sitioWeb = new Servicio("Sitio web", "El sitio web es el conjunto de varias páginas web que se agrupan para cumplir determinados objetivos, sin embargo, estos tienen un propósito común: ser la carta de presentación de un negocio en el mundo del internet.", 20000);
const tiendaOnline = new Servicio("Tienda online", "Son aquellos sitios que permiten realizar un comercio electrónico mediante el sitio web, también llamados como carritos de compras o ventas. Estos sitios web permiten realizar transacciones entre comprador y vendedor.", 30000);

 */
/* console.log("Características de la Landing Page : " + landingPage.carcacteristicas + " Precio $ " + landingPage.precio); */
/* console.log("Características de la Página web : " + sitioWeb.carcacteristicas + " Precio $ " + sitioWeb.precio);
console.log("Características de la Tienda online: " + tiendaOnline.carcacteristicas + " Precio $ " + tiendaOnline.precio); */


//llamar al método
/* landingPage.informarCaracteristicas(); //nombre del objeto + método */

//FOR
/* for (const propiedad in sitioWeb) {
    console.log(sitioWeb[propiedad]);
} */

//TEORÍA Y PRÁCTICA

//OBJETOS
//LLevar una construcción de la realidad a los 0 y 1 de la computadora

//Creción de objetos
//(*)OBJETOS LITERALES (En el momento se crear los objetos, se declaras las propiedas se cargan los valores de esas propiedades. Son objetos únicos,puntuales, una palicera puntual)

/* const lapicera = { //nombre del objeto
    marca: "bic", //nombre de las propiedas van sin comillas
    trazo: "fino",
    color: "rojo",
    precio: 50
}; */

//console.log(lapicera);//muestra todas las propiedades

//forma de acceder a las propiedades de los objetos
/* console.log("El color de esta lapicera es " + lapicera.color); //muestra una propiedad, ejemplo color */

/* //cambiar una propiedad
lapicera.color = "azul";
lapicera.trazo = "grueso"; */

//Creción de objetos
//(*)POR MEDIO DE FUNCIONES CONSTRUCTURAS
//Se utilizan para contruir objetos en serie, son como moldes de objetos de un mismo tipo
//Practica: objeto servicio


//METODOS = funciones
//Se llama función si está fuera de los objetos
//Se llama método si está dentro del objeto
//Le dan a los objetos determinadas habiliades. Ejemplo por ejemplo objeto persona tiene la habilidad hablar
//Si usamos la función dentro de un objeto se llama Método.
//En JS hay objetos que ya están definidos

//Métodos de string
/* let cadena = "Gracias por elegir nuestros servicios";
//propiedad del objeto string: largo de la cadena
console.log(cadena.length); //es una propiedad del string
console.log(cadena.toLocaleUpperCase()); //esto es un metodo de string */


