
package domain;


public class Escritor extends Empleado{
    private final TipoEscritura tipoEscritura;

    public Escritor(String nombre, double sueldo, TipoEscritura tipoEscritura) {
        super(nombre, sueldo);
        this.tipoEscritura = tipoEscritura;
    }
    
    //Método para sobreescribir
    @Override
    public String obtenerDetalles(){
        return super.obtenerDetalles()+", Tipo Escritura: "+tipoEscritura.getDESCRIPCION();
    }
    
    public TipoEscritura getTipoEscritura() {
        return tipoEscritura;
    }

    @Override
    public String toString() {
        return "Escritor{" + "tipoEscritura=" + tipoEscritura + '}'+" "+super.toString();
    }
    
    
    
    
}
