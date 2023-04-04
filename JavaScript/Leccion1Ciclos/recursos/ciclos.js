let contador = 0;
while(contador < 3){
    document.getElementById("while").innerHTML= contador;
    console.log(contador);
    contador++;
};
document.getElementById("while1").innerText ="Fin del ciclo while";
console.log("Ciclo while")

//Ciclo do while
let conteo = 0;
do{
    document.getElementById("doWhile").innerHTML= conteo;
    console.log(conteo);
    conteo++;
}while(conteo < 3);
document.getElementById("doWhile1").innerText ="Fin del ciclo while";
console.log("Ciclo do while")

//ciclo for
for(let contando = 0; contando < 3; contando++){
    document.getElementById("for").innerHTML=contando
    console.log(contando);
};
document.getElementById("for1").innerText= "Final del ciclo for";
console.log("ciclo for")

//Pablabra reservada BREAK
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando);
        break;//Rompe la estructura al encontrar el primer numero par
    }
};
console.log("termina el ciclo for al encontrar los pares")
document.getElementById("break").innerText="Se mostraron los resultados por consola."

//La palabra continue
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){ //numeros que no son pares pero no los muestra porque no se lo hemos pedido
        //console.log(contando); //Mostraria los numero impares
        continue;//Continua a la siguiente iteracion
    }
    console.log(contando)//Solo mostramos los numeros pares
};
console.log("termina el ciclo")
document.getElementById("continue").innerText="Se mostraron los resultados por consola."

//Etiquetas Labels
inicio: //etiquetas labels
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){ //numeros que no son pares pero no los muestra porque no se lo hemos pedido
        //console.log(contando); //Mostraria los numero impares
        continue inicio;//Continua a la siguiente iteracion //etiqueta labels
    }
    console.log(contando)//Solo mostramos los numeros pares
};
console.log("termina el ciclo")
document.getElementById("labels").innerText="Se mostraron las etiquetas en js"