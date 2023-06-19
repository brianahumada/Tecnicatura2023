class Persona{
    static contadorPersona = 0;
    constructor(nombre, apellido, edad){
        this.id = ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this.id;
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
        return this._edad 
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return this.id + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }
}