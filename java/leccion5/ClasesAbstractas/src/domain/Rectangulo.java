
package domain;


public class Rectangulo extends FiguraGeometrica{

    public Rectangulo(String tipoFigura) {
        super(tipoFigura);
    }

    @Override
    public void dibujar() { //Implementamos el método
        System.out.println("Se imprime un: "+this.getClass().getName());
    }
    
}