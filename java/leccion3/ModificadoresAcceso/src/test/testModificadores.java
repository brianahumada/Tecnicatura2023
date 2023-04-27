
package test;

import paquete1.Clase1;
import paquete2.Clase3;


public class testModificadores {
    public static void main(String[] args) {
        Clase1 clase = new Clase1();
        System.out.println("clase = " + clase.atributoPublic);
        clase.metodoPublico();
        
        //Protected modificadores de acceso
        Clase3 claseHija = new Clase3();
        System.out.println("claseHija = " + claseHija);
    }
}
