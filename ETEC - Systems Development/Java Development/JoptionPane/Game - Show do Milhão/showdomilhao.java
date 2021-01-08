import javax.swing.JOptionPane;

import javax.swing.ImageIcon;

public class showdomilhao {

    public static void main (String args []){

    ImageIcon logo = new ImageIcon ("imagensdoprograma/logo.png");

    		String [] selecao = {"Comecar"};

    			int welcome = JOptionPane.showOptionDialog(null, "Voce esta preparadoª para ser desafiado por Silvio, com perguntas de conhecimentos gerais, e ter a chance de ganhar 1 milhão?", "Show do Milhao", JOptionPane.DEFAULT_OPTION, 

    			JOptionPane.QUESTION_MESSAGE, logo, selecao, selecao[0]);

                    if (welcome != 0){ sair();}


    ImageIcon silvio1 = new ImageIcon("imagensdoprograma/silvio1.png");


    		

            Object leitura = JOptionPane.showInputDialog(null,"Maoeee! Bem vindo ao Show do Milhao, antes de iniciar as perguntas me conte, qualeh seu nome queridoª?","Conhecendo Silvio", JOptionPane.INFORMATION_MESSAGE,silvio1, null,"");

                    if (leitura == null) { leitura = "fulano";  }




    ImageIcon silvio2 = new ImageIcon("imagensdoprograma/silvio2.png");

        Object [] pergunta1 = {"Lenin", "Gorbatchov", "Karl Marx", "Allan Kardec"};

        Object questao1 = JOptionPane.showInputDialog(null, "HiHiHiHi, certo " + leitura + " vamos começar! Primeira Pergunta... Quem é o autor do manisfesto comunista?", "Primeira Pergunta - Valendo 250 mil", JOptionPane.QUESTION_MESSAGE, silvio2, pergunta1, pergunta1[0] );

        if (questao1 != "Karl Marx"){
            
            sair();
        }

    ImageIcon silvio3 = new ImageIcon("imagensdoprograma/silvio3.png");

        Object [] pergunta2 = {"Astigmatismo", "Pedofilia", "Vitiligo", "Bruxismo"};

        Object questao2 = JOptionPane.showInputDialog(null, "Muito bem " + leitura + " vamos para próxima... Como se chama a doença que causou o clariamento da pele de Michael Jackson?", "Segunda Pergunta - Valendo 500 mil", JOptionPane.QUESTION_MESSAGE, silvio3, pergunta2, pergunta2[0] );

        if (questao2 != "Vitiligo"){
            
           sair();
        }


     ImageIcon silvio5 = new ImageIcon("imagensdoprograma/silvio5.png");

        Object [] pergunta3 = {"Jabuti", "Onça", "Arara", "Tucano"};

        Object questao3 = JOptionPane.showInputDialog(null, "Maoeeeeee as coisas entao esquentando " + leitura + " mais uma pergunta... Que animal da fauna brasileira esta retratado na nota de dez reais?", "Terceira Pergunta - Valendo 750 mil", JOptionPane.QUESTION_MESSAGE, silvio5, pergunta3, pergunta3[0] );

        if (questao3 != "Arara"){
            
           sair();
        }


     ImageIcon maisa1 = new ImageIcon("imagensdoprograma/maisa1.png");

    		String [] pergunta4 = {"Continuar"};

    			int questao4 = JOptionPane.showOptionDialog(null, "Silvioo eu tenho uma perguntaa!!", "Quee, Maisa?", JOptionPane.DEFAULT_OPTION, 

    			JOptionPane.QUESTION_MESSAGE, maisa1, pergunta4, pergunta4[0]);

                    if (questao4 != 0){ sair();}

      ImageIcon silvio6 = new ImageIcon("imagensdoprograma/silvio6.png");

    		String [] pergunta5 = {"Continuar"};

    			int questao5 = JOptionPane.showOptionDialog(null, "HiHiHiHi pode fala Maisa!", "Quee, Maisa?", JOptionPane.DEFAULT_OPTION, 

    			JOptionPane.QUESTION_MESSAGE, silvio6, pergunta5, pergunta5[0]);

                    if (questao5 != 0){ sair();}


     ImageIcon maisa2 = new ImageIcon("imagensdoprograma/maisa2.png");

        Object [] pergunta6 = {"Touca", "Peruca", "Everson Zoio", "Torradeira"};

        Object questao6 = JOptionPane.showInputDialog(null, "Então " + leitura + ", minha pergunta de ouro é... O que o Silvio usa na cabeça?", "Quarta Pergunta - Pergunta Bônus", JOptionPane.QUESTION_MESSAGE, maisa2, pergunta6, pergunta6[0] );

        if (questao6 != "Peruca"){
            
           sairMaisa();}


    ImageIcon silvio7 = new ImageIcon("imagensdoprograma/silvio7.png");

        Object [] pergunta7 = {"Diana", "Lois Lane", "Jane", "Chita"};

        Object questao7 = JOptionPane.showInputDialog(null, "Ok maisa, flw... Qual é nome da mulher do Tarzan?" , "Quinta Pergunta - Valendo 800 mil", JOptionPane.QUESTION_MESSAGE, silvio7, pergunta7, pergunta7[0] );

        if (questao7 != "Jane"){
            
           sair();
        }

    ImageIcon silvio8 = new ImageIcon("imagensdoprograma/silvio8.png");

        Object [] pergunta8 = {"Chiquita Bacana", "Chiquinha Gonzaga", "Chica da Silva", "Chiquititas"};

        Object questao8 = JOptionPane.showInputDialog(null, "Voce esta conseguindo hein, vamos ver se consegue passar dessa... Que compositora brasileira fez sucesso com a sua marchinha 'Abre Alas'? " , "Sexta Pergunta - Valendo 900 mil", JOptionPane.QUESTION_MESSAGE, silvio8, pergunta8, pergunta8[0] );

        if (questao8 != "Chiquinha Gonzaga"){
            
           sair();
        }

    ImageIcon silvio9 = new ImageIcon("imagensdoprograma/silvio9.png");

        Object [] pergunta9 = {"13", "15", "14", "16"};

        Object questao9 = JOptionPane.showInputDialog(null, "Carambolas voce nao erra uma! Quantas letras contem a escrita da bandeira nacional brasileira?" , "Setima Pergunta - Valendo 950 mil", JOptionPane.QUESTION_MESSAGE, silvio9, pergunta9, pergunta9[0] );

        if (questao9 != "15"){
            
           sair();
        }

    ImageIcon silvio4 = new ImageIcon("imagensdoprograma/silvio4.png");

        Object [] pergunta10 = {"Corra", "Ande", "Pense", "Fale"};

        Object questao10 = JOptionPane.showInputDialog(null, "Que  rufem os tambores... Pergunta valhendo 1 milhao! Segundo a lenda, ao terminar de esculpir Moises Michelangelo fez qual pedido a estatua?", "Terceira Pergunta - Valendo 1 milhão", JOptionPane.QUESTION_MESSAGE, silvio4, pergunta10, pergunta10[0] );

        if (questao10 != "Fale")
        {
            sair();
        }

        //jogo concluido

    ImageIcon silviograna = new ImageIcon("imagensdoprograma/silviograna.png");

    	JOptionPane.showMessageDialog(null, "*Silvao lhe entrega o pacote enquanto admira sua inteligencia", "Voce ganhou 1 milhao!", JOptionPane.PLAIN_MESSAGE, silviograna);
    }

    
    static void sair ()
    {
        ImageIcon silviotristo = new ImageIcon("imagensdoprograma/silviotristo.png");
		JOptionPane.showMessageDialog(null, "Voce decepcionou tanto Silvão, que ele foi obrigado a expulsa-loª do programa sem nada!", "perdeu", JOptionPane.WARNING_MESSAGE, silviotristo);
		System.exit(0);
    }

        static void sairMaisa ()
    {
        ImageIcon maisa3 = new ImageIcon("imagensdoprograma/maisa3.png");
		JOptionPane.showMessageDialog(null, "Oh la, eh muito burro Silvio!", "perdeu", JOptionPane.WARNING_MESSAGE, maisa3);
		System.exit(0);
    }
}
