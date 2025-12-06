/* 1-Ricardo es profesor, utilice la sentencia 
"if" para validar su profesión
 NO usar el opcional "else". */

var nombre2 = 'Ricardo';
var profesion = 'Profesor';

if (profesion == 'Profesor'){
    console.log(nombre2 + ' es ' + profesion);
}

/* 2-Luis esta soltero, utilice la sentencia ”if” 
y también su opcional “else” para validarlo. */

var nombre3 = 'Luis';
var estadoCasado = false;

if(estadoCasado == true){
    console.log('Luis esta felizmente casado');
}else{
    console.log('Luis esta soltero y a la orden');
}

/* 3-Guardar los siguientes números en variables diferentes 
7, 8, 911, 100, validar con la sentencia “if...else”
y mostrar cuales son pares o impares. */

let num1 = 7;
let num2 = 8;
let num3 = 911;
let num4 = 100;

if(num1 % 2 == 0){
    console.log('El numero ' + num1 + 'es par.');
}else{
    console.log('El numero ' + num1 + 'es impar.')
}

if(num2 % 2 == 0){
    console.log('El numero ' + num2 + 'es par.');
}else{
    console.log('El numero ' + num2 + 'es impar.')
}

if(num3 % 2 == 0){
    console.log('El numero ' + num3 + 'es par.');
}else{
    console.log('El numero ' + num3 + 'es impar.')
}

if(num4 % 2 == 0){
    console.log('El numero ' + num4 + 'es par.');
}else{
    console.log('El numero ' + num4 + 'es impar.')
}

// & = And = y se llama apersaint, es para el and 
// || para el or
// ! (significa diferente de) not es para intercambiar se hace para intercampbiar los resultados

/* Operadores logicos
And = && = y = Conjunción
Or = || = o = Disyunción
Not = ! = No = Negación
*/

/* Ejercicio 1: 
Para poder ir a cine necesitamos de dos cosas, 
primero tener una entrada y la otra llegar al cine 
a tiempo (&& = And = y) */

/*Escenario 1
( Compramos la entrada para la película
pero no encontramos transporte para llegar la cine.).*/

var e1Entrada = true;
var e1Transporte = false;

if((e1Entrada == true) && (e1Transporte == true)){
    console.log('Vamos a cine');
}else{
    console.log('No podemos ir a cine :(');
}

// Escenario 2: No hay dinero ni para la entrada ni para el transporte
var e2Entrada = false; 
var e2Transporte = false; 

if((e2Entrada == true) && (e2Transporte == true)){
    console.log('Vamos a cine');
}else{
    console.log('Ahora si que no podemos ir a cine :(');
}

/* Escenario 3 ( Pudimos llegar al cine,
pero las entradas estaban agotadas).*/

var e3Entrada = false; 
var e3Transporte = true; 

if((e3Entrada == true) && (e3Transporte == true)){
    console.log('Vamos a cine');
}else{
    console.log('es triste, aun no podemos ir a cine :(');
}

/* Escenario 4 ( Compramos la entrada por la página,
y llegamos a tiempo al cine).*/

var e4Entrada = true; 
var e4Transporte = true; 

if((e4Entrada == true) && (e4Transporte == true)){
    console.log('PORFIN Vamos a cine :D');
}else{
    console.log('no que salados :(');
}