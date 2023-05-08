let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log("tipos primitivos")

//objeto
let persona = {
    nombre: 'Juan',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 25,
    nombreCompleto: function(){//método o función en javaScript
        return this.nombre+' '+this.apellido;
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