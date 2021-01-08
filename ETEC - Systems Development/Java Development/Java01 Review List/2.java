import java.util.Scanner;

public class Main {

	public static void main(String [] args) {

		Scanner leia = new Scanner(System.in);


		System.out.println("Digite um numero: ");

			int  numero = leia.nextInt();

			for(int i = 1; i < 10; i ++){

				

				System.out.println( numero + " x " + i  + " = ") ;
				System.out.print( numero * i ) ;

			}




}
}