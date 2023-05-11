
package domain;


public enum TipoEscritura {
    CLASICO("Escritura a mano"),
    MODERNO("Escritura digital");
    
    private final String DESCRIPCION;

    private TipoEscritura(String DESCRIPCION) {
        this.DESCRIPCION = DESCRIPCION;
    }

    public String getDESCRIPCION() {
        return this.DESCRIPCION;
    }
    
    
}
