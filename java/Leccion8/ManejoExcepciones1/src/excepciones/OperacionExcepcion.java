
package excepciones;


public class OperacionExcepcion extends RuntimeException{
    //Contructor para mansar el mensaje a la clase exception
    public OperacionExcepcion(String mensaje) {
        super(mensaje);
    }
    
    
    
}
