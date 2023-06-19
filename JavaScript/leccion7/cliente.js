class Cliente extends Persona{
    static contadorCientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this.id = ++Cliente.contadorCientes;
        this._fechaRegistro = fechaRegistro;
    }

    get id(){
        return this.id
    }

    get fechaRegistro(){
        return this._fechaRegistro
    }

    set fechaRegistro(fechaRegisto){
        this._fechaRegistro = fechaRegisto;
    }

    toString(){
        return super.toString +' '+ this.id +' '+this._fechaRegistro;
    }
}