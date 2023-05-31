
package accesodatos;


public interface IAccesoDatos {
    //NO TIENE CONSTRUCTORES, TODOS LOS METODOS SON ABSTRACTOS Y PUBLICOS
    int MAX_REGISTRO = 10; //TODAS LAS VARIABLES SON CONSTANTES FINAL Y PUBLICO
    
    //METODO INSERTAR ES ABSTRACTO Y SIN CUERPO
    void insertar();
    void listar();
    void actualizar();
    void eliminar();
}
