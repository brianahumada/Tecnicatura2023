//let persona3 = new Persona('carla','ponce');
//no se puede instanciar una clase antes de la creacion
class Persona{
    static contadorPersona = 0;
    //email = 'valor de default email';

    static get MAX_OBJ(){ // este metodo simula una constante
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }else{
            console.log('Se ha superado el máximo de objetos permitidos');
        }
        //Persona.contadorObjetosPersona++;
        
        //console.log('Se incrementa el contador: '+Persona.contadorObjetosPersona);
        
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

    nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    //Sobreescribiendo el método de la clase padre(Object)
    toString(){
        //Se aplica el polimorfismo 
        //El méto que se ejecuta depende del objeto si es de la clase padre o hijo
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludo desde el metodo static');
    }
    static saludar2(Persona){
        console.log(Persona.nombre + " " + Persona.apellido)
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

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+ ", " + this._departamento;
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
console.log(empleado1.nombreCompleto());

//Object.prototype.toString //Esta es la manera de acceder a atributos y métodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());


//Accedemos al metodo static de persona
Persona.saludar();
Persona.saludar2(persona1);
Persona.saludar2(persona2);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

//Atributo no static, se asocia al objeto no a la clase
console.log(persona1.email);
console.log(empleado1.email);
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(Persona.contadorPersona);

//Creamos mas objeto de tipo persona
let persona3 = new Persona('Carla', 'Pertosi');
console.log(persona3.toString());
console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);
console.MAX_OBJ = 10; //No se puede modificar
console.log(Persona.MAX_OBJ); 


//creamos el objeto 5 para probar el max_obj
let persona4 = new Persona('Franco', 'Diaz');
console.log(persona4.toString());

let persona5 = new Persona('Ricardo', 'Perez');
console.log(persona5.toString()); //Undefined Ricardo Perez // se crea el objeto pero no se le agrega identificador (contador persona)