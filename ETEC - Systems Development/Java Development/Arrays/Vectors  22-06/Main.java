import java.util.Scanner;
 
public class Main {
 
  public static void main(String[] args) {

    Scanner leia = new Scanner(System.in);


    /*/

    Bom dia meus lindos! Segue atividade:
    Atividade sobre vetores

 

    1- Crie um vetor de tamanho 10 do tipo inteiro
    2- Preencha esse vetor com numeros pares a sua escolha
    3 - Imprima esse vetor
    4- Troque o numero na 5º posição para 87
    5- Troque o numero na 3º posição para 57
    6- Imprima as posiçoes que foram alteradas acima
    /*/

    System.out.println("Digite os 10 valores inteiros que serão armezenados no Vetor: ");

    int a = leia.nextInt();
    int b = leia.nextInt();
    int c = leia.nextInt();
    int d = leia.nextInt();
    int e = leia.nextInt();
    int f = leia.nextInt();
    int g = leia.nextInt();
    int h = leia.nextInt();
    int i = leia.nextInt();
    int j = leia.nextInt();


    int vetor[] = {a,b,c,d,e,f,g,h,i,j};

      for(int contador =0; contador <= 9; contador++){
        System.out.println(" ");
        System.out.println("O vetor [" + contador + "] armazena o valor: " + vetor[contador]);
       
    }

        System.out.println(" ");

        System.out.println("====================================================================================");

        System.out.println(" ");

        System.out.println("Agora o programa irá trocar o valor da 5º e 3º posição para 87 e 57 respectivamente!");

        System.out.println(" ");

        System.out.println("Nova Impressão:");

        vetor[4] = 87;
        vetor[2] = 57;


      for(int contador =0; contador <= 9; contador++){
        System.out.println(" ");
        System.out.println("O vetor [" + contador + "] armazena o valor: " + vetor[contador]);

        System.out.println(" ");
       
    }



    
     

  }

 
}