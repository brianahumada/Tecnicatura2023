
package mundopc;

import ar.com.system2023.mundopc.*;


public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP",13); 
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        
        //creamos otra Pc
        Monitor gammerMonitor = new Monitor("Gammer",13); 
        Teclado gammerTeclado = new Teclado("Bluetooth", "Gammer");
        Raton gammerRaton = new Raton("Bluetooth", "Gammer");
        Computadora gammerComputadora = new Computadora("Computadora gamer", gammerMonitor, gammerTeclado, gammerRaton);
        
        Computadora computadora2 = new Computadora("Computadora2", monitorHP, gammerTeclado, gammerRaton);
        Computadora computadora3 = new Computadora("computadora3", gammerMonitor, gammerTeclado, ratonHP);
        Computadora computadora4 = new Computadora("computadora4", monitorHP, gammerTeclado, gammerRaton);
        Computadora computadora5 = new Computadora("computadora5", monitorHP, gammerTeclado, gammerRaton);
        Computadora computadora6 = new Computadora("computadora6", monitorHP, gammerTeclado, gammerRaton);
        Computadora computadora7 = new Computadora("computadora7", monitorHP, gammerTeclado, gammerRaton);
        Computadora computadora8 = new Computadora("computadora8", monitorHP, gammerTeclado, gammerRaton);
        Computadora computadora9 = new Computadora("computadora9", monitorHP, gammerTeclado, gammerRaton);
        Computadora computadora10 = new Computadora("computadora10", gammerMonitor, gammerTeclado, gammerRaton);
        Computadora computadora11 = new Computadora("computadora11", gammerMonitor, gammerTeclado, gammerRaton);
        
        //Creo objeto de la clase orden
        Orden orden1 = new Orden();//Inicializamos el arreglo vacio
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(gammerComputadora);
        orden1.agregarComputadora(computadora2);
        orden1.agregarComputadora(computadora3);
        orden1.agregarComputadora(computadora4);
        orden1.agregarComputadora(computadora5);
        orden1.agregarComputadora(computadora6);
        orden1.agregarComputadora(computadora7);
        orden1.agregarComputadora(computadora8);
        orden1.agregarComputadora(computadora9);
        
        
        
        
        orden1.mostrarOrden();
        
        Computadora computadorasVarias = new Computadora("computadora de diferentes marcas", monitorHP, gammerTeclado, ratonHP);
        Orden orden2=new Orden();
        orden2.agregarComputadora(computadorasVarias);
        orden2.mostrarOrden();
    }
}
