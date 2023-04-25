
package domain;


public class Persona {
    private final int IDPERSONA;
    private static int contadorPersonas;
    
    static{//Bloque de inicializacion estático
        System.out.println("Ejecucion bloque estático ");
        ++Persona.contadorPersonas;
    }
    
    { //Bloque de inicializacion No static (contexto dinamico)
        System.out.println("Ejecucion del bloque No static");
        this.IDPERSONA = Persona.contadorPersonas++; //incrementamos
    }
    // LOS BLOQUES DE INICIALIZACION SE EJECUTAN ANTES DEL CONTRUCTOR
    
    public Persona(){
        System.out.println("Ejecucion del constructor");
    }
    
    public int idPersona(){
        return this.IDPERSONA;
    }

    @Override
    public String toString() {
        return "Persona{" + "IDPERSONA=" + IDPERSONA + '}';
    }
    
    
}
