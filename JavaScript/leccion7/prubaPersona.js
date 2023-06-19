class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get id(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo = sueldo
    }

    toString(){
        return super.toString()+'{'+this._idEmpleado+' '+this._sueldo+'}'
    }
}

class Cliente extends Persona{
    static contadorCientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCientes;
        this._fechaRegistro = fechaRegistro;
    }

    get id(){
        return this._idCliente
    }

    get fechaRegistro(){
        return this._fechaRegistro
    }

    set fechaRegistro(fechaRegisto){
        this._fechaRegistro = fechaRegisto;
    }

    toString(){
        return super.toString() +' {'+ this._idCliente +' '+this._fechaRegistro+'}';
    }
}

//Pruebas de clase Persona
let persona1 = new Persona("brian","ahumada",28);
console.log(persona1.toString());

let persona2 = new Persona("Carla", "Ortega", 22);
console.log(persona2.toString());

//Prueba clase empleado
let empleado1 = new Empleado("Pedro","roman", 18, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado("jonas","torres", 30, 7000);
console.log(empleado2.toString());

// Clase cliente
let cliente1 = new Cliente("romina","lopez",30,new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("abri","anzorena",30,new Date());
console.log(cliente2.toString()); 