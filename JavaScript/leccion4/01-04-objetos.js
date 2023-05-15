let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log("tipos primitivos")

//objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 25,
    idioma : "es",
    nombreCompleto: function(){//método o función en javaScript
        return this.nombre+' '+this.apellido;
    },
    //Mostramos
    get nombreEdad(){//Metodo get
        return 'El nombre es: '+this.nombre+', edad: '+ this.edad;        
    },
    //Get MAYUSCULA
    get lang(){
        return this.idioma.toUpperCase();
    },
    //set
    set lang(Lang){
        this.idioma = Lang.toUpperCase();
    }

}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.email);
console.log(persona);
console.log(persona.nombreCompleto());

let persona2 = new Object(); //debe crear un nuevo objeto en memoria
persona2.nombre = 'Brian';
persona2.apellido = 'Ahumada';
persona2.telefono = '2625595941'
console.log(persona2.telefono);
console.log("Creamos un nuevo objeto")

console.log(persona['apellido']); //accedemos como si fuera un arreglo

//for in accedemos a la propiedad y el valor
for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}

console.log("Cambiamos y eliminamos un error")

//cambiar
persona.apellida = 'Perez'; //cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el valor
console.log(persona);


//Distinta formas de imprimir un objeto
//número 1: la más sencilla: concatenar cada valor de cada propiedad
console.log("Distintas formas de imprimir un objeto: forma 1");
console.log(persona.nombre +', '+ persona.apellido);

//número 2: atravez del ciclo for in
console.log("Distintas formas de imprimir un objeto: forma 2");
for (let nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//número 3: la funcion object.values()
console.log("Distintas formas de imprimir un objeto: forma 3");
let personaArray = Object.values(persona);
console.log(personaArray);

//número 4:  Utilizaremos el método JSON.stringify
console.log("Distintas formas de imprimir un objeto: forma 4");
let personaString = JSON.stringify(persona);
console.log(personaString);

//Clase5 mostramos el metodo get
console.log('comenzamos a utilizar el método get')
console.log(persona.nombreEdad);

console.log('Comenzamos con el método gety set para idiomas');
persona.lang = 'en'
console.log(persona.lang);

function Persona3(nombre, apellido, email){ //Function Constructor para persona
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){ //Metodos dentro del constructor 
        return this.nombre + ' ' + this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'Lopez@gmail.com');
padre.nombre = 'Luis'
padre.telefono = '2625594512';
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona3('Laura', 'Contrera', 'Contrera@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//caso número 1
let miObjeto = new Object();
//caso 2
let miObjeto2 = {};

//caso String1
let miCaddena1 = new String('Hola'); //Sintaxis formal
//caso String2
let miCaddena2 = 'hola';//Esta es la sintaxos simplificada y recomendada

//caso con numeros 1
let numero1 = new Number(1);//NO RECOMENDABLE
//caso 2
let numero2 = 1;//RECOMENDADA

//caso booleano 1
let miBoleano1 = new Boolean(true);//NO RECOMENDAB
//caso 2
let miBoleano2 = true;//RECOMENDADA

//caso arreblos 1
let arreglo1 = new Array();//NO RECOMENDABLE
//caso 2
let arreglo2 = [];//RECOMENDADA

//caso function 1
let func1 = new Function();//NO RECOMENDABLE
//caso 2
let func2 = function(){};//RECOMENDADA

//uso de prototype
Persona3.prototype.telefono = '3659485163';/*
Se está agregando una nueva propiedad llamada telefono al prototipo de la función constructora Persona3.
Esto significa que todos los objetos creados a partir de Persona3 heredarán esta propiedad y podrán acceder a ella.. */
console.log(padre);
//madre
console.log(madre);
madre.telefono = '723643782'
console.log(madre.telefono);

//Uso de call
/* 
El método call() nos permite cambiar el contexto de ejecución de una función y especificar el valor de this 
que se utilizará dentro de la función. 
Esto permite reutilizar métodos en diferentes objetos y obtener resultados personalizados según el contexto.
*/
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono) {
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Pedro',
    apellido: 'landa',
}

console.log(persona4.nombreCompleto2('lic.', '345346645'));
console.log(persona4.nombreCompleto2.call(persona5,'Ing.','43534654'));/*
Al usar call(persona5, 'Ing.', '43534654'), establecemos persona5 como el valor de this dentro de la 
función nombreCompleto2. Ahora, this dentro de nombreCompleto2 se refiere a persona5, y los valores de nombre 
y apellido se obtienen de persona5. Por lo tanto, el resultado es diferente y se imprime "Ing.: Pedro landa 43534654".
*/


//Método  apply() acepta un arreglo de argumentos.
let arreglo = ['Ing.', '154646512'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));