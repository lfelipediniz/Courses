
/**
 *
 * @author lfdc
 */
public class gente {

    public static void main(String args []) {

        Pessoa gente1 = new Pessoa();

        gente1.nome = "Valdemir";

        gente1.idade = 55;

        gente1.generoMusical = "funk";
        
        gente1.genero = "masculino";


    gente1.etaria();

    gente1.musica();

    gente1.genero();

        Pessoa gente2 = new Pessoa();

        gente2.nome = "Leticia";

        gente2.idade = 6;

        gente2.generoMusical = "rock";
        
        gente2.genero = "feminino";

    gente2.etaria();
 
    gente2.musica();

    gente2.genero();

        Pessoa gente3 = new Pessoa();

        gente3.nome = "Armin";

        gente3.idade = 61;

        gente3.generoMusical = "mpb";
        
        gente3.genero = "não-binario";

    gente3.etaria();

    gente3.musica();

    gente3.genero();
     
    }
    
}
