
package test;

import domain.Persona;


public class testForEach {
    public static void main(String[] args) {
        int edades[] = {5, 6, 8, 9}; //Sintaxis resumida
        for (int edade: edades) { //Sintaxis del ForEach
            System.out.println("edade = " + edade);
        }
        
        Persona personas[] = {new Persona("juan"), new Persona("carla"), new Persona("Beatriz")};
        
        //ForEach
        for(Persona persona: personas){
            System.out.println("persona = " + persona.toString());
        }
    }
    
}
