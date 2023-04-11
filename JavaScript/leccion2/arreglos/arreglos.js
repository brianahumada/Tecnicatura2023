//Creación de array
const autos = ['Ferrari', 'Renault', 'BMW'];

console.log(autos);

//Recorremos array
autos[2]= 'Ford' 
console.log(autos[0]);
console.log(autos)

for(let i = 0; i < autos.length; i++){
    console.log(i+1+' : '+autos[i]);
}

// Modificamos los elementos.
autos[2]= 'volvo';
console.log(autos);
//Agregamos elementos
//forma 1
autos.push('Audi');
//forma 2
autos[autos.length] = 'Porche'
console.log(autos)
//forma 3
autos[6] = 'Renault'; //en auto[5] Quedo vacio.
console.log(autos);

//Como preguntar si es un array o Arreglo
console.log(Array.isArray(autos)); //devuelve booleano

console.log(autos instanceof Array); //booleano