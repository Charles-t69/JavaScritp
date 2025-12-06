var nombre = 'Daniel';
var estadoCasado = true;
var profesion = 'Estudiante';
var materia = 'ADSO';
var estadoGradoTecnologo = true;

// un solo igual es para asignar un valor, dos iguales es para preguntar o validar algo

if (estadoCasado == true){ 
    console.log(nombre + ' esta casad@');
}

if (estadoGradoTecnologo == true){
    console.log('El ' + profesion + ' ' + nombre + ' esta graduad@ en la maestria de ' + materia);
} else{
    console.log('La ' + profesion + ' ' + nombre + ' aun esta cursan su tecnologo en ' + materia);
}