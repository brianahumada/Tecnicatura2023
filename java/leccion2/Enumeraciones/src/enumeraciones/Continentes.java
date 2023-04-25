
package enumeraciones;



public enum Continentes {
    AFRICA(53, "1.2 billones"),
    EUROPA(46, "1.1 billines"),
    ASIA(44, "1.8 millines"),
    AMERICA(34, "150.2 millines"),
    OCEANIA(14, "1.2 billines");
    
    private final int paises;
    private final String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    
    //Método Get
    public int getPaises(){
        return this.paises;
    }
    
    public String getHabitantes(){
        return this.habitantes;
    }
}
