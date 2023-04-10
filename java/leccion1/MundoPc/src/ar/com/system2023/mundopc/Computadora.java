
package ar.com.system2023.mundopc;


public class Computadora {
    private final int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Raton raton;
    private Teclado teclado;
    private static int contadorComputadoras;
    
    private Computadora() {
        this.idComputadora=++Computadora.contadorComputadoras;
    }

    public Computadora(String nombre, Monitor monitor,Teclado teclado, Raton raton) {
        this();//Llamada computadora()
        this.nombre = nombre;
        this.monitor = monitor;
        this.raton = raton;
        this.teclado = teclado;
    }
    
    public int getComputadora(){
        return this.idComputadora;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return this.monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Raton getRaton() {
        return this.raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }

    public Teclado getTeclado() {
        return this.teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }
    

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Computadora{idComputadora=").append(idComputadora);
        sb.append(", nombre=").append(nombre);
        sb.append(",teclado=").append(teclado);
        sb.append(", monitor=").append(monitor);
        sb.append(", raton=").append(raton);
        sb.append('}');
        return sb.toString();
    }
    
    
    
    
}
