// 1) Solicitar la edad al usuario y que le muestre la edad equivalente en años de perro.
// let edadusuario = prompt("Ingrese su edad:");

// function edadperruna(edad) {
//     return edad * 7;
// }

// alert("Su edad de perro es: " + edadperruna(edadusuario));

// // 2) Crear una función que reciba un nombre y devuelva un saludo.

// let nombreusuario = prompt("Ingrese su nombre:");

// function saludo(nombre) {
//     return ("Hola " + nombre + "!" + " Cómo estás?");
// }

// alert(saludo(nombreusuario));

// // 3) Crear una función que salude.

// function saludo() {
//     return ("Hola!!");
// }

// alert(saludo());

// // 4) Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).

// let temperaturausuario = parseInt(prompt("Ingrese la temperatura"));
// let sistemausuario = prompt("Ingrese el sistema: Farenheit o Celsius");

// function temperaturas(temperatura, sistema) {

//     if (sistema === "Celsius") {
//         return (((temperatura * 9 / 5) + 32) + "º Farenheit"); // --> 33.8 °F
//     } else {
//         return (((temperatura - 32) * 5 / 9) + "º Celsius"); // --> -17.22 °C
//     }
// }
// alert(temperaturas(temperaturausuario, sistemausuario));

// /* 5) Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
// 6 → 6! = 720
// 4 → |4| = 4
// -8 → |-8| = 8
// 50 → 100
// 11 → 22
// */

// let numerousuario = parseInt(prompt("Ingrese un número"));
// let factorial = numerousuario;

// function resultado(numero) {

//     // Si está entre 5 y 10, obtenemos el factorial.
//     if (numero >= 5 && numero <= 10) {

//         while (factorial > 1) { // como el factorial por 1 es lo mismo , lo uso para terminar el ciclo.
//             factorial = factorial - 1; // al numero factorial ingresado le resto 1 para luego multiplicarlo por el acumulado
//             numero = numero * factorial; // obtengo el factorial acumulando por cada vuelta
//         }
//         // Si es menor a 5, obtengo lo mismo    
//     } else if (numero < 5) {
//         // Si se trata de un numero negativo, obtengo su valor absoluto
//         if (numero < 0) {
//             numero = numero * -1;
//         }
//         // Si es mayor a 10, obtengo el doble
//     } else {
//         numero = numero * 2;
//     }
//     return numero;
// }

// alert("El resultado es: " + resultado(numerousuario));

// // 6) Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. 

// let edad = parseInt(prompt("Ingrese su edad"));
// let bebida = prompt("Ingrese su bebida: Puede ser cerveza, jugo o agua");
// let costo = 0;
// let vuelto = 0;
// const cerveza = 150;
// const jugo = 100;
// const agua = 50;

// function validaredad(edad) {
//     return edad < 18;
// }

// function cobrar() {
//     let dineroabonado = parseInt(prompt("¿Con cuánto dinero va a abonar?"));

//     if (dineroabonado < costo) {
//         alert("El dinero abonado $" + dineroabonado + " es menor a: $" + costo + " que es el costo de tu " + bebida);
//     } else {
//         vuelto = dineroabonado - costo;
//         alert("Su vuelto es: $" + vuelto);
//     }
// }

// if (bebida === "cerveza" && validaredad(edad)) {
//     alert("Usted es menor, no puede comprar alcohol");
// } else {
//     if (bebida === "cerveza") {
//         alert("El costo de la cerveza es: $" + cerveza);
//         costo = cerveza;
//     } else if (bebida === "jugo") {
//         alert("El costo del jugo es: $" + jugo);
//         costo = jugo;
//     } else if (bebida === "agua") {
//         alert("El costo del agua es: $" + agua);
//         costo = agua;
//     }

//     // Función para validar el dinero abonado por el usuario
//     cobrar();

// }

// // 7) Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.

// // El total en segundos sería 37810.
// let hora = 10;
// let minuto = 30;
// let segundo = 10;

// function calcularsegundos(hora, minuto, segundo) {
//     return ((hora * 3600) + (minuto * 60) + segundo);
// }

// alert(hora + " Horas, " + minuto + " Minutos y " + segundo + " segundos equivalen a: " + calcularsegundos(hora, minuto, segundo) + " segundos en total");

// // 8) Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva.

// let notas = [];
// let total = 0;

// function cargarnotas(notasacargar) {
//     notas.push(notasacargar);
//     return notas;
// }

// function promedionotas(notasapromediar) {

//     for (let i = 0; i < notasapromediar.length; i++) {
//         total = total + notasapromediar[i];
//     }

//     // Calculo el promedio segun el total de notas ingresadas.
//     return promedio = total / notasapromediar.length;

// }

// // Agrego las notas a cargar al array
// alert("Notas cargadas: " + cargarnotas(8));
// alert("Notas cargadas: " + cargarnotas(9));
// alert("Notas cargadas: " + cargarnotas(6));
// alert("Notas cargadas: " + cargarnotas(10));

// alert("El promedio de las notas cargadas es: " + promedionotas(notas));

// // 9) Escribir una función para cobrar en caja. Agregando funciones que: 
// /* Si no es cliente A, agregue el IVA. 
//  * Se solicite un monto de descuento a aplicar, y lo aplique.
//  * Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.*/

// let iva = 0;
// let descuento = 0;
// let monto = parseFloat(prompt("Ingrese el monto a cobrar"));
// let tipocliente = prompt("Ingrese el tipo de cliente: 'A', 'B' o 'C'");
// let montodescuento = parseInt(prompt("Ingrese el monto de descuento a aplicar en % (De 1 a 100%)"));

// montoiva = 0;
// montodescontado = 0;
// montocobro = 0;


// function validartipocliente(monto, tipocliente) {

//     if (tipocliente !== 'A') {
//         iva = monto * 0.21;
//         monto = monto + iva;
//         //alert("El monto con iva es: " + monto);
//         return monto;
//     } else {
//         return monto;
//     }

// }

// function aplicardescuento(monto, montodescuento) {

//     if (montodescuento !== 0) {
//         descuento = (montodescuento / 100) * monto;
//         monto = monto - descuento;
//         //alert("El monto con descuento es: " + monto);
//         return monto;
//     } else {
//         return monto;
//     }
// }

// function aplicarcobro(monto) {
//     let montoabonado = parseInt(prompt("Con cuánto desea abonar?"));

//     if (montoabonado > monto) {
//         monto = montoabonado - monto;
//         //alert("El monto cobrado es: " + monto);
//         return monto;
//     } else {
//         //alert("El monto abonado " + montoabonado + " es menor al monto aplicado de " + monto);
//         return monto = -1; // pongo -1 para salir con error(como si fuese una bandera).
//     }
// }

// function cobrarencaja(monto, tipocliente, montodescuento) {

//     // Si no es tipo de cliente 'A' agrego el IVA, si es 'A' monto sin iva incluido
//     montoiva = validartipocliente(monto, tipocliente);
//     alert("El monto con IVA es de: $" + montoiva);

//     // Aplicar descuento
//     montodescontado = aplicardescuento(monto, montodescuento);
//     alert("El monto con descuento es de: $" + montodescontado);

//     // Aplicar cobro
//     montocobro = aplicarcobro(monto);
//     if (montocobro > 0) {
//         alert("El monto cobrado es de: $" + montocobro);
//     } else {
//         alert("El monto abonado es menor al monto aplicado de: $" + monto);
//     }
// }

// cobrarencaja(monto, tipocliente, montodescuento);

// // 10) Vamos a realizar (intentando no llorar) un conversor de monedas. Primero vamos a generar una función que reciba dos parámetros, tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, euros y reales). 
// /* Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume ambos valores y devuelva el resultado.
// Ejemplo: us$4, €3. Devuelve el total de: $1180. (Dificil no llorar a este punto).*/

// const tcrealpeso = 19.43;
// const tcdolarpeso = 95.47;
// const tceuropeso = 113.94;

// let montototal = 0;

// function conversordemonedas(tipomoneda, monto) {

//     if (tipomoneda.toUpperCase() === "D") {
//         monto = monto * tcdolarpeso;
//         return monto;
//     } else if (tipomoneda.toUpperCase() === "E") {
//         monto = monto * tceuropeso;
//         return monto;
//     } else if (tipomoneda.toUpperCase() === "R") {
//         monto = monto * tcrealpeso;
//         return monto;
//     } else {
//         //alert("El tipo de moneda " + tipomoneda + " es incorrecta. Solo se aceptan 'D'(Dolares), 'E'(Euros) o 'R'(Reales)");
//         return monto = -1.
//     }

// }

// function sumarcotizaciones() {

//     //return conversordemonedas("D", 50) + conversordemonedas("E", 10);
//     montototal = conversordemonedas("D", 50) + conversordemonedas("E", 10);

//     // Va a ser siempre mayor a 0 porque está hardcodeado el tipo de moneda en D y E.
//     if (montototal > 0) {
//         // Debería dar como resultado = $5.912,9
//         alert("El monto convertido a pesos es de: $" + montototal);
//     } else {
//         alert("El tipo de moneda es incorrecta. Solo se aceptan 'D'(Dolares), 'E'(Euros) o 'R'(Reales)");
//     }

// }

// sumarcotizaciones();

// // 11) Crear una función con 1 parámetro cantidad de números, que pida iterativamente la cantidad de veces ingresada. Ejemplo si por parámetro le paso 5, que pida 5 números. En cada iteración aplicarle a cada número y una función que los triplique. Guardar todos los resultados en un array.
// // Ejemplo: Paso por parámetro “4” a la función.
// // Luego ingreso 4 números: 30,15,11,14. El array final debe ser: 90,45,33,42.

// let numerostriplicados = [];

// function triplicarnumero(numeroatriplicar) {

//     return numerostriplicados.push(numeroatriplicar * 3);

// }

// function numeros(cantnumeros) {

//     for (let i = 0; i < cantnumeros; i++) {

//         let ingresenumero = parseInt(prompt("Ingrese un número"));
//         triplicarnumero(ingresenumero);

//     }

//     alert("Los números triplicados en base a los números que ingresó son: " + numerostriplicados);
// }

// numeros(parseInt(prompt("Ingrese la cantidad de números que desea triplicar:")));

// // 12) Realizar una función que pida la temperatura máxima y mínima del día, indicando magnitud y medida (Farenheit o Celsius), y mostrar la temperatura media (promedio de ambas), en ambos sistemas.

// let tempmin = parseInt(prompt("Ingrese la temperatura mínima"));
// let tempmax = parseInt(prompt("Ingrese la temperatura máxima"));
// let medida = prompt("Ingrese la medida en 'C' (Celsius) o 'F' (Farenheit)");

// function temperaturapromedio(tempmin, tempmax, medida) {
//     return (tempmin + tempmax) / 2 + "º" + medida;
// }

// alert("La temperatura promedio es de:  " + temperaturapromedio(tempmin, tempmax, medida));

// // ******************************* BONUS *******************************

// // 13) Vamos a realizar una cotizadora de seguros! 
// /*  * Como primer paso, vamos a solicitar al cliente los siguientes datos: Año de nacimiento, Nombre, sueldo bruto. 
//     * En base a su año de nacimiento, vamos a calcular su edad. 
//     * Luego, en base a su edad, seleccionar el plan que le corresponda:
//         Hasta 18 años: Plan Niños ($4000)
//         Hasta 30 años: Plan Joven. ($5200)
//         Hasta 60 años: Plan Adulto ($6400)
//         60 en adelante: Plan Adultos Mayores. ($9700)
// * Luego en base al plan, mostrar el monto a pagar . 
// * Por último, en base al bruto calcular si la persona es apta, el monto de la cuota no debe superar el 20% del sueldo bruto!
// * Mostrarle al cliente un mensaje personalizado con su nombre, indicando plan y precio si corresponde, y sino, indicar que no puede acceder al plan de salud.
// * BONUS adicional: Agregar la chance de que pueda incluir a su grupo familiar. En este caso, debería agregar un dato más, cuántas personas hay en su familia. (Más adelante solicitaremos sus edades). El monto total del grupo familiar no debe superar el 30% del sueldo bruto. */

// let anionacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
// let nombre = prompt("Ingrese su nombre");
// let sueldobruto = parseInt(prompt("Ingrese su sueldo bruto"));
// let edad = 0;
// let precioplan = 0;
// let tipoplan = "";
// let validarsueldo = 0;
// let numpersonasfamilia = 0;

// let grupofamiliar = prompt("Desea incluir a su grupo familiar? SI / NO");
// if (grupofamiliar.toUpperCase() === "SI") {
//     numpersonasfamilia = parseInt(prompt("Cuántas personas hay en su familia?"));
// }

// function calcularedad() {

//     edad = 2021 - anionacimiento;

//     //alert("Su edad es: " + edad + " años");
// }

// function seleccionarplan() {

//     if (edad <= 18) {
//         precioplan = 4000; // Niños
//         tipoplan = "Niños";
//     } else if (edad > 18 && edad <= 30) {
//         precioplan = 5200; // Joven
//         tipoplan = "Joven";
//     } else if (edad > 30 && edad <= 60) {
//         precioplan = 6400; // Adultos
//         tipoplan = "Adultos";
//     } else if (edad > 60) {
//         precioplan = 9700; // Adultos Mayores
//         tipoplan = "Adultos Mayores";
//     }

//     //alert("A usted le corresponde el plan " + tipoplan + " con una cuota de: $" + precioplan);
// }

// function validarplan() {

//     if (grupofamiliar.toUpperCase() === "SI") {
//         validarsueldo = sueldobruto * 0.3;
//         tipoplan = "Grupo Familiar";
//         // Si la cuota del plan es > al 30% del sueldo bruto
//         if (precioplan > validarsueldo) {
//             alert(nombre + ", usted no es apto para acceder al plan " + tipoplan + " ya que el precio supera el 30% de su sueldo bruto de: $" + sueldobruto);
//         } else {
//             alert(nombre + ", usted es apto para acceder al plan " + tipoplan);
//         }
//     } else {
//         validarsueldo = sueldobruto * 0.2;
//         // Si la cuota del plan es > al 20% del sueldo bruto
//         if (precioplan > validarsueldo) {
//             alert(nombre + ", usted no es apto para acceder al plan " + tipoplan + " de: $" + precioplan + " ya que el precio supera el 20% de su sueldo bruto de: $" + sueldobruto);
//         } else {
//             alert(nombre + ", usted es apto para acceder al plan " + tipoplan + " de: $" + precioplan);
//         }

//     }

// }

// calcularedad();
// seleccionarplan();
// validarplan();

// // 14) Realizar un conversor de monedas mejorado! Recibir tres parámetros: monto, moneda del monto, y moneda a convertir. (Las monedas disponibles son: peso, euro, dolar, real, yen).

// // Tabla de equivalencias de tipo de cambio
// // Peso
// const tcpesodolar = 0.010;
// const tcpesoeuro = 0.0088;
// const tcpesoreal = 0.052;
// const tcpesoyen = 1.16;
// // Dolar
// const tcdolarpeso = 95.59;
// const tcdolaryen = 110.76;
// const tcdolarreal = 4.94;
// const tcdolareuro = 0.84;
// // Euro
// const tceuropeso = 114.20;
// const tceurodolar = 1.19;
// const tceuroreal = 5.90;
// const tceuroyen = 132.30;
// // Real
// const tcrealdolar = 0.20;
// const tcrealpeso = 19.37
// const tcrealeuro = 0.17
// const tcrealyen = 22.44;
// // Yen
// const tcyendolar = 0.0090;
// const tcyenreal = 0.045;
// const tcyeneuro = 0.0076;
// const tcyenpeso = 0.86;

// let monto = parseFloat(prompt("Ingrese el monto que desea convertir"));
// let monedaorigen = prompt("Ingrese la moneda origen: 'D' (Dólares), 'E' (Euros), 'P' (Pesos), 'R' (Real) o 'Y' (Yen)").toUpperCase();
// let monedadestino = prompt("Ingrese la moneda destino: 'D' (Dólares), 'E' (Euros), 'P' (Pesos), 'R' (Real) o 'Y' (Yen)").toUpperCase();

// function conversordemonedas(monto, monedaorigen, monedadestino) {

//     if (monedaorigen === "P") {

//         switch (monedadestino) {
//             case "D":
//                 return ("Sus $" + monto + " Pesos Argentinos equivalen a $" + (monto * tcpesodolar) + " Dólares");
//             case "E":
//                 return ("Sus $" + monto + " Pesos Argentinos equivalen a $" + (monto * tcpesoeuro) + " Euros");
//             case "R":
//                 return ("Sus $" + monto + " Pesos Argentinos equivalen a $" + (monto * tcpesoreal) + " Reales");
//             case "Y":
//                 return ("Sus $" + monto + " Pesos Argentinos equivalen a $" + (monto * tcpesoyen) + " Yenes");
//             default:
//                 return ("La moneda destino " + monedadestino + " es inexistente, debe ser 'D','E','R','Y'");
//         }

//     }

//     if (monedaorigen === "D") {

//         switch (monedadestino) {
//             case "P":
//                 return ("Sus $" + monto + " Dólares equivalen a $" + (monto * tcdolarpeso) + " Pesos");
//             case "E":
//                 return ("Sus $" + monto + " Dólares equivalen a $" + (monto * tcdolareuro) + " Euros");
//             case "R":
//                 return ("Sus $" + monto + " Dólares equivalen a $" + (monto * tcdolarreal) + " Reales");
//             case "Y":
//                 return ("Sus $" + monto + " Dólares equivalen a $" + (monto * tcdolaryen) + " Yenes");
//             default:
//                 return ("La moneda destino " + monedadestino + " es inexistente, debe ser 'P','E','R','Y'");
//         }

//     }

//     if (monedaorigen === "E") {

//         switch (monedadestino) {
//             case "P":
//                 return ("Sus $" + monto + " Euros equivalen a $" + (monto * tceuropeso) + " Pesos");
//             case "D":
//                 return ("Sus $" + monto + " Euros equivalen a $" + (monto * tceurodolar) + " Dólares");
//             case "R":
//                 return ("Sus $" + monto + " Euros equivalen a $" + (monto * tceuroreal) + " Reales");
//             case "Y":
//                 return ("Sus $" + monto + " Euros equivalen a $" + (monto * tceuroyen) + " Yenes");
//             default:
//                 return ("La moneda destino " + monedadestino + " es inexistente, debe ser 'P','D','R','Y'");
//         }

//     }

//     if (monedaorigen === "R") {

//         switch (monedadestino) {
//             case "P":
//                 return ("Sus $" + monto + " Reales equivalen a $" + (monto * tcrealpeso) + " Pesos");
//             case "D":
//                 return ("Sus $" + monto + " Reales equivalen a $" + (monto * tcrealdolar) + " Dólares");
//             case "E":
//                 return ("Sus $" + monto + " Reales equivalen a $" + (monto * tcrealeuro) + " Euros");
//             case "Y":
//                 return ("Sus $" + monto + " Reales equivalen a $" + (monto * tcrealyen) + " Yenes");
//             default:
//                 return ("La moneda destino " + monedadestino + " es inexistente, debe ser 'P','D','E','Y'");
//         }

//     }


//     if (monedaorigen === "Y") {

//         switch (monedadestino) {
//             case "P":
//                 return ("Sus $" + monto + " Yenes equivalen a $" + (monto * tcyenpeso) + " Pesos");
//             case "D":
//                 return ("Sus $" + monto + " Yenes equivalen a $" + (monto * tcyendolar) + " Dólares");
//             case "E":
//                 return ("Sus $" + monto + " Yenes equivalen a $" + (monto * tcyeneuro) + " Euros");
//             case "R":
//                 return ("Sus $" + monto + " Yenes equivalen a $" + (monto * tcyenreal) + " Reales");
//             default:
//                 return ("La moneda destino " + monedadestino + " es inexistente, debe ser 'P','D','E','R'");
//         }

//     }

// }

// alert(conversordemonedas(monto, monedaorigen, monedadestino));