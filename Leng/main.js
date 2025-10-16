// Bienvenida y solicitud de nombre y apellido//
alert("¡Bienvenido a mi sitio!");
let nombre = prompt("¿Cuál es tu nombre?");
let apellido = prompt("¿Cuál es tu apellido?");
alert("Tu nombre completo es: " + nombre  +" "+ apellido);


//operaciones matemáticas basicas//
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

alert("Suma: " + suma + "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division);

//Multiplicacion or numero aleatorio//
let numero = parseFloat(prompt("Ingrese un número:"));
let aleatorio = Math.random(); 

let resultado = numero * aleatorio;

alert("El resultado de multiplicar por un número aleatorio es: " + resultado);

//potencia de un numero elevado por otro//
let base = parseFloat(prompt("Ingrese el número base:"));
let exponente = parseFloat(prompt("Ingrese el exponente:"));

let potencia = Math.pow(base, exponente);

alert("El resultado de elevar " + base + " a la potencia " + exponente + " es: " + potencia);

//Texto combinado con mayúsculas y minúscula//
let texto1 = prompt("Ingrese la primera cadena:");
let texto2 = prompt("Ingrese la segunda cadena:");

let resultad = texto1.toUpperCase() + " " + texto2.toLowerCase()
alert("Texto combinado: " + resultad);