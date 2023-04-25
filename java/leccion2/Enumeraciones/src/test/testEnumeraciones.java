
package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;


public class testEnumeraciones {
    public static void main(String[] args) {
        System.out.println("Dia 1: "+Dias.LUNES);
        indicarDiaSemana(Dias.LUNES);//LAS ENUMERACIONES SE TRATAN COMO CADENAS
        //AHORA NO SE DEBEN UTILIZAR COMILLAS, SE ACCEDE A TRAVEZ DE EL OPERADOR DE PUNTO
        
        System.out.println("Continente no. 4: "+Continentes.AMERICA);
        System.out.println("No. de paises en el 4to. Continente: "+Continentes.AMERICA.getPaises());
        System.out.println("No. de habitantes en el 4to. Continente: "+Continentes.AMERICA.getHabitantes());
        
      
    }
    
    private static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES -> System.out.println("Primer dia de la semana");
            case MARTES -> System.out.println("Segundo dia de la semana");
            case MIERCOLES -> System.out.println("Tercer dia de la semana");
            case JUEVES -> System.out.println("Cuarto dia de la semana");
            case VIERNES -> System.out.println("Quinto dia de la semana");
            case SABADO -> System.out.println("Sexto dia de la semana");
            case DOMINGO -> System.out.println("Septimo dia de la semana");
            default -> System.out.println("No esta dentro de los dias de la semana");
        }
    }
}
