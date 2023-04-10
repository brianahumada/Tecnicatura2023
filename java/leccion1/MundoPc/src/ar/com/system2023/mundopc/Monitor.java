
package ar.com.system2023.mundopc;


public class Monitor {
    private final int idMonitor;
    private String marca;
    private double tamanio;
    private static int contadorMonitor;

    private Monitor() { //privado porque este contructor va ser llamando
        // del contructor publico
        this.idMonitor = ++Monitor.contadorMonitor;
    }

    public Monitor(String marca, double tamanio) {
        this(); //Llamado al contructor vacio Monitor()
        this.marca = marca;
        this.tamanio = tamanio;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getTamanio() {
        return this.tamanio;
    }

    public void setTamanio(double tamanio) {
        this.tamanio = tamanio;
    }
    
    //Ingresamos manualmente el getIdMonitor
    public int getIdMonitor(){
        return this.idMonitor;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Monitor{idMonitor=").append(idMonitor);
        sb.append(", marca=").append(marca);
        sb.append(", tamanio=").append(tamanio);
        sb.append('}');
        return sb.toString();
    }
    
}
