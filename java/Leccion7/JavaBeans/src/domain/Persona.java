
package domain;

//Esta clase es de java beans
/*
Un JavaBean es una clase de Java que sigue ciertas convenciones de nomenclatura, 
estructura y comportamiento, lo que permite que sea utilizado de manera sencilla 
y consistente en entornos de desarrollo y herramientas.

Un JavaBean debe cumplir con las siguientes características:

-Debe tener una clase pública que siga las convenciones de nomenclatura de Java.
-Debe tener un constructor público sin argumentos.
-Los atributos deben ser privados y accedidos mediante métodos getter y setter.
-Los métodos getter y setter deben seguir las convenciones de nomenclatura de Java.
-Puede tener otros métodos para proporcionar funcionalidad adicional.
Los JavaBeans son utilizados principalmente en entornos de desarrollo visual 
y en tecnologías como JavaFX y Java Servlets. Proporcionan una forma estándar 
de encapsular datos y funcionalidad en un componente que puede ser utilizado 
y manipulado fácilmente por herramientas de desarrollo y bibliotecas de terceros.
*/

import java.io.Serializable;

public class Persona implements Serializable{
    private String nombre;
    private String apellido;
    
    //Es obligatorio que tenga un constructor vacio para que sea java beans

    public Persona() {
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    @Override
    public String toString() {
        return "Persona{" + "nombre=" + nombre + ", apellido=" + apellido + '}';
    }
}
