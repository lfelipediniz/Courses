import java.util.Scanner;

public class Main {

	public static void main(String [] args) {

		Scanner leia = new Scanner(System.in);


		System.out.println("Vamos calcular a area do seu triangulo!");


	

		System.out.println("Digite o valor da base do triangulo: ");

			int  b = leia.nextInt();

		System.out.println("Digite o valor da altura do triangulo: ");

			int  c = leia.nextInt();


			
		int a = ((b * c) / 2);

	

				System.out.println( "A area eh igual a " + a);

				
				System.out.println("--------------------------------------");
			


		
		System.out.println("Vamos calcular a area do seu quadrado!");

		System.out.println("Digite o valor do lado do seu quadrado:");

		int j = leia.nextInt();

		int ff = j * j;

		System.out.println("A area do quadrado eh " + ff);

		System.out.println("--------------------------------------");

		System.out.println("Vamos calcular sou IMC!");

		System.out.println("Digite seu peso em Kg: ");
		double tttr = leia.nextDouble();

		System.out.println("Digite sua altura em metros: ");

		double jjtr = leia.nextDouble();





		double tab = jjtr * jjtr;

		double furt = tttr / tab;

		System.out.println("Seu IMC eh de " + furt);

		System.out.println("--------------------------------------");

		System.out.println("Vamos converter Km pra milhas!");

		System.out.println("Digite um valor em Km: ");
		double yuyu = leia.nextDouble();

		double popo = yuyu / 1.60934;


		System.out.println("O valor em milhas eh " + popo);




















			




}
}