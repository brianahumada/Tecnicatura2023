
package paquete1;


public class Clase1 {
    public String atributoPublic = "valor atributo Publico";
    protected String atributoProtected = "valor atributo Protected";
    
    public Clase1(){
        System.out.println("Constructor Publico");
    }
    
    public void metodoPublico(){
        System.out.println("Metodo Publico");
    }
    
    
    //----------------------------------------------
    protected Clase1(String atributoProtected){
        System.out.println("Constructor protected");
    }
    
    protected void metodoProtected(){
        System.out.println("Metodo Protected");
    }
    
    //-----------------------------------------------
    
}
