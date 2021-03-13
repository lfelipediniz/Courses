import javax.swing.JOptionPane;
/**
 *
 * @author lfdc
 */

public class Pessoa {

    public String nome;

    public int idade;

    public String generoMusical;

    public String genero;

public void etaria(){

    if (idade < 18 && idade > 0){

JOptionPane.showMessageDialog(null, (nome + " é uma criança de " + idade + " anos"), nome, JOptionPane.PLAIN_MESSAGE); }


    else if (idade >= 18 && idade <= 60 ) {

JOptionPane.showMessageDialog(null, (nome + " é um adulto de " + idade + " anos"), nome, JOptionPane.PLAIN_MESSAGE); }

    else {

JOptionPane.showMessageDialog(null, (nome + " é um idoso de " + idade + " anos"), nome, JOptionPane.PLAIN_MESSAGE);}

	}

public void musica(){

    if (generoMusical.equals("rock")) {

JOptionPane.showMessageDialog(null, ("Musica do Momento: Welcome to Hotel California..."), nome, JOptionPane.PLAIN_MESSAGE);}

    else if (generoMusical.equals("funk")) {

JOptionPane.showMessageDialog(null, ("Musica do Momento: Tchu Tch Tchu Tch Tchu Tch..."), nome, JOptionPane.PLAIN_MESSAGE);}

    else if (generoMusical.equals("pop")) {

JOptionPane.showMessageDialog(null, ("Musica do Momento: The Billie Jean is not my lover..."), nome, JOptionPane.PLAIN_MESSAGE);}

    else if (generoMusical.equals("mpb")) {

JOptionPane.showMessageDialog(null, ("Musica do Momento: Ah! bruta flor do querer..."), nome, JOptionPane.PLAIN_MESSAGE);}

    else {

JOptionPane.showMessageDialog(null, ("O genero musical escolhido é invalido"), nome, JOptionPane.PLAIN_MESSAGE);}

    }
        

public void genero(){

    if (genero.equals("masculino")){

JOptionPane.showMessageDialog(null, ("Genero: Homem"), nome, JOptionPane.PLAIN_MESSAGE); }

    else if (genero.equals("feminino")){

JOptionPane.showMessageDialog(null, ("Genero: Mulher"), nome, JOptionPane.PLAIN_MESSAGE); }

    else {

JOptionPane.showMessageDialog(null, ("Genero: Outro"), nome, JOptionPane.PLAIN_MESSAGE);}

}}

