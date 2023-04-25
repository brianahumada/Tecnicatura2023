package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        imprimirNumeros(3, 4, 5);
        imprimirNumeros(1, 2);
        variosParametros("brian","Ahumada", 1, 2 ,3);
    }
    
    private static void variosParametros(String nombre,String apellido, int ...numeros){
        System.out.println("Nombre: "+ nombre);
        System.out.println("Apellido = " + apellido);
        imprimirNumeros(numeros);
    }
    
    private static void imprimirNumeros(int ...numeros){ //esta variable se va a convertir en una veriable de tipo arreglo cantidad indefinida
        for (int i = 0;i < numeros.length; i++) {
            System.out.println("Elecmentos: "+ numeros[i]);
        }
    }
}
