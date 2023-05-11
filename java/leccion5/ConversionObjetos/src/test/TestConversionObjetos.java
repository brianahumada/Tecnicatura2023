
package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("juan", 6000, TipoEscritura.CLASICO); //LLAMOS A LA CLASE HIJA QUE TOMA PRIORIDAD.
        //System.out.println("empleado = " + empleado);
        System.out.println(empleado.obtenerDetalles()); //POLIMORFISMO OBTENEMOS LA INFORMACION DE LA CLASE HIJA DESDE LA CLASE PADRE
        //empleado.getTipoEscritura();//ocaciona un error ya que no puede acceder al metodo de la clase hija debemos hacer un casteo
        //DOWNCASTING
        //((Escritor)empleado).getTipoEscritura(); //Tenemos 2 opciones: esta es una
        Escritor escritor = (Escritor)empleado; //Esta es la segunda opción
        escritor.getTipoEscritura();
        
        //UPCASTING
        Empleado empleado2 = escritor; //conversion explicita 
        System.out.println("empleado2 = " + empleado2.obtenerDetalles());
    }
}
