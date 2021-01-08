import java.util.Scanner;

public class Main {

    public static void main(String args []) {

        Scanner leia = new Scanner(System.in);

        String vetor [] = new String[5];

        
         System.out.println("Digite 5 nomes ");

         for(int i =0; i < 5; i++){

            vetor [i] = leia.nextLine();
         }
    

      	for(int contador =0; contador <= 4; contador++){

        System.out.println(" ");
        System.out.println("O vetor [" + contador + "] armazena o nome: " + vetor[contador]);
}

System.out.println("====================================================================================");

System.out.println(" ");

System.out.println("Insira as informacoes pedidas abaixo: ");


System.out.println("Digite seu nome completo: "); String nome = leia.nextLine(); System.out.println(" ");


System.out.println("Digite seu CPF: "); int aa = leia.nextInt(); System.out.println(" ");

System.out.println("Digite seu RG: "); int bb = leia.nextInt(); System.out.println(" ");

System.out.println("Digite seu CNPJ: ");   int cc = leia.nextInt(); System.out.println(" ");

System.out.println("Digite seu CEP: ");   int dd = leia.nextInt(); System.out.println(" ");

System.out.println("Digite seu Numero de Celular: ");    int ee = leia.nextInt(); System.out.println(" ");

System.out.println("Digite seu Numero de telefone fixo: ");  int f = leia.nextInt(); System.out.println(" ");

System.out.println("Digite sua Idade: "); int g = leia.nextInt(); System.out.println(" ");

System.out.println("Digite o Numero do seu cartao de credito: "); int h = leia.nextInt(); System.out.println(" ");

System.out.println("Digite seu CVV: "); int i = leia.nextInt(); System.out.println(" ");
 
System.out.println("Digite seu numero de IP: "); int j = leia.nextInt(); System.out.println(" ");


System.out.println("Suas informacoes foram armazenadas, confira " + nome);

System.out.println(" ");



int  info[] = {aa,bb,cc,dd,ee,f,g,h,i,j};


      	for(int contador =0; contador <= 9; contador++){
        System.out.println(" ");
        System.out.println(info[contador]);
}


System.out.println("====================================================================================");


System.out.println("Agora seus dados vao ser impressos de traz para frente, observe:");

System.out.println(" ");


for (int reverse = 9; reverse > -1; reverse--){

	  System.out.println(info[reverse]);
	  System.out.println(" ");

}






    }



}