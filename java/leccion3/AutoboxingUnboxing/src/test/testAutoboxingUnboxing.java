
package test;


public class testAutoboxingUnboxing {
    public static void main(String[] args) {
        //Clases envolventes o Wrapper
        /*
             Clases Tipos primitivos
            int = la clase envolvente es Integer
            long = la clase envolvente es Long
            float = la clase envolvente es Float
            double = la clase envolvente es Double
            boolean = la clase envolvente es Boolean
            byte = la clase envolvente es Character
            short = la clase envolvente es Short
        */
        
        int enteroPrimitivo = 10;
        Integer enteroObject = 10;
        System.out.println("enteroObject = " + enteroObject.toString()); //Mostramos una cadena
        System.out.println("enteroPrimitivo = " + enteroPrimitivo);
        System.out.println("enteroObject = " + enteroObject.byteValue());
        System.out.println("enteroObject = " + enteroObject.shortValue());
        System.out.println("enteroObject = " + enteroObject.doubleValue());
        System.out.println("enteroObject = " + enteroObject.hashCode());
        System.out.println("enteroObject = " + enteroObject.floatValue());
        
        int primitivo = enteroObject;
        System.out.println("primitivo = " + primitivo);
        
        /*
            
        */
    }
}
