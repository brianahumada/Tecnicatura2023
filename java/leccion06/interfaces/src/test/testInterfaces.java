
package test;
import accesodatos.IAccesoDatos;
import accesodatos.ImplementacionMySql;
import accesodatos.ImplementacionOracle;

public class testInterfaces {
    public static void main(String[] args) {
        //No se puede crear objetos desde un interface, por eso llamamos a la clase que implementa la interface
        IAccesoDatos datos = new ImplementacionMySql();
        /*datos.listar();
        datos.actualizar();
        datos.eliminar();
        datos.insertar();*/
        
        IAccesoDatos datos1 = new ImplementacionOracle();
        /*datos1.actualizar();
        datos1.insertar();
        datos1.eliminar();
        datos1.listar();*/
        
        imprimir(datos);
        imprimir(datos1);
        
    }
    
    public static void imprimir(IAccesoDatos datos){
        datos.listar();
        datos.actualizar();
        datos.eliminar();
        datos.insertar();
    }
}
