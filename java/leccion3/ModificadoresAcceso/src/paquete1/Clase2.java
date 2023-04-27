
package paquete1;


class Clase2{
    String atributoDefault = "valor del atributo default";
    
    /*Clase2(){
        System.out.println("Constructor Default");
    }*/
    
    Clase2(){
       super();
       this.atributoDefault = "Modificación del atributo default";
       System.out.println("atributoDefailt = "+ this.atributoDefault);
    }
    
    void metodoDefault(){
        System.out.println("Metodo default");
    }
}
