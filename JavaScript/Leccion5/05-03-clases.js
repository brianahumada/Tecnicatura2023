//let persona3 = new Persona('carla','ponce');
//no se puede instanciar una clase antes de la creacion
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    //Metodo set y get
    //No deben llamarse igual el atributo por eso le pusimos _nombre 
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
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona("Lore", "Pereira");
persona1.nombre = "Juan Carlos";
persona1.apellido = "Gomez";
console.log(persona1.apellido);
console.log(persona1.nombre);
console.log(persona1);

let persona2 = new Persona("Mario", "Machuca");
persona2.nombre = "Maria Laura";
persona2.apellido = "Montaner";
console.log(persona2.apellido);
console.log(persona2);

//clase empleado
let empleado1 = new Empleado("Maria", "Gimenez", "Sistemas");
console.log(empleado1.nombre);