class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre,apellido,edad);
        this.id = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get id(){
        return this.id;
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo = sueldo
    }

    toString(){
        return super.toString()+' '+this.id+' '+this._sueldo
    }
}