miFuncion(8, 2); //esto se le conoce como hosting quere dicir que nuestra funcion puede ser llamada antes de definirla



function miFuncion(a, b){
    //console.log("Sumamos : "+(a+b));
    return a + b;
}

//LLamamos la funcion
miFuncion(5, 5);

let resultado = miFuncion(3, 3);
console.log(resultado);

//funciones de tipo de expresión
let x = function(a,b){return a +b};
resultado = x(4, 4);
console.log(resultado);

//Funciones de tipo self y invoking
(function(a, b){
    console.log('Ejecutando la función: '+ (a+b));
})(9,6);

function miFuncionDos(a, b){
    console.log(arguments);
    //arguments solo se puede utilizar dentro de la funcion 
}
miFuncionDos(5, 7);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto);

//Funciones flecha
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7);
console.log(resultado);

let sumar = function(a = 4, b = 8){
    console.log(arguments[0]);
    console.log(arguments[1]);
    
    //return a + b;
    return a + b + arguments[2];
}
resultado = sumar(3, 2, 9);
console.log(resultado);

let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}
//PASO POR VALOR
//tipos primitivos
let k = 10;
function cambiarValor(a){//Paso por valor 
    a = 20;
}
cambiarValor(k);
console.log(k);

//PASO POR REFERENCIA
const persona = {
    nombre: "Juan",
    apellid: "Lepez" 
}
console.log(persona);
function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellid = 'Perez';
}
cambiarValorObjeto(persona);
console.log(persona);