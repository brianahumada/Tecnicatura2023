
package test;

import domain.*;

public class TestClaseObject {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 5000);
        Empleado empleado2 = new Empleado("juan", 5000);
        
        if (empleado1 == empleado2){
            System.out.println("TIENEN LA MISMA REFERENCIA");
        }
        else{
            System.out.println("TIENEN DIFERENTE REFERENCIA");
        }
        
        
        if (empleado1.equals(empleado2)){
            System.out.println("LOS OBJETOS SON IGUALES EN CONTENIDO");
        }
        else{
            System.out.println("LOS OBJETOS SON DISTINTOS EN CONTENIDO");
        }
    }
}
