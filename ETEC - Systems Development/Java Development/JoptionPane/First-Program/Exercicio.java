import javax.swing.JOptionPane;

public class Exercicio {

    public static void main (String [] args) {

        String nome = JOptionPane.showInputDialog("Qual o seu nome?");

        String idade = JOptionPane.showInputDialog("Qual a sua idade?");

        String endereco = JOptionPane.showInputDialog("Qual o seu endereco?");

        int resposta = JOptionPane.showConfirmDialog(null, "Seu nome: "+nome+";\nSua idade: "+idade+";\nSeu endereco: "+endereco+".\nOs dados estao corretos?");

        if (resposta == JOptionPane.YES_OPTION) {
            JOptionPane.showMessageDialog(null, "Bem-vindo " + nome);
        } else {
            JOptionPane.showMessageDialog(null, "Dados nao confirmados");
        }
    }
}
