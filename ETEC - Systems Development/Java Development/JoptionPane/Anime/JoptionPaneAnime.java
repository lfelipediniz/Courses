/*
voce quer comecar a ver desenhinho japones? sim/nao/ja assisto
    nao - sai daqui, seu sem cultura!
    sim - top 5 animes (lista)
        assim que ela escolher, vai aparecer o link do anime no crunchyroll
*/

import javax.swing.JOptionPane;

public class JoptionPaneAnime {
    public static void main (String  args []) {
        Object [] selecao = {"Sim", "Nao", "Ja assisto"};
        int resposta = JOptionPane.showOptionDialog(null, "Voce quer comecar a ver desenhinho japones?", "Pergunta", JOptionPane.DEFAULT_OPTION, JOptionPane.QUESTION_MESSAGE, null, 
        selecao, selecao[0]);

        switch (resposta) {
            case 0:
                Object [] animes = {"Naruto", "One Piece", "Dragon Ball", "Death Note", "JoJo's Bizarre Adventure"};
                Object selectedValue = JOptionPane.showInputDialog(null, "Escolha um anime:", "Opcoes", JOptionPane.INFORMATION_MESSAGE, null, animes, animes[0]);
                String link = retornarLink(selectedValue);
                JOptionPane.showMessageDialog(null, ("Entre nesse link para assistir " + selectedValue + ": " + link), "Link", JOptionPane.PLAIN_MESSAGE);
                break;

            case 1:
                JOptionPane.showMessageDialog(null, "Sai daqui, seu sem cultura!", "Atencao!", JOptionPane.ERROR_MESSAGE);
                break;

            case 2:
            JOptionPane.showMessageDialog(null, "Voce ja tem cultura, parabens!", "Atencao!", JOptionPane.INFORMATION_MESSAGE);
                break;

            default:
                break;
        }
    }

    static String retornarLink(Object anime) {
        if (anime.equals("Naruto")) {
            return "https://bit.ly/34jT5c3";
        }
        else if (anime.equals("One Piece")) {
            return "https://bit.ly/2HHWObN";
        }
        else if (anime.equals("Dragon Ball")) {
            return "https://bit.ly/36t7uW0";
        }
        else if (anime.equals("Death Note")) {
            return "https://bit.ly/3irseQz";
        }
        else if (anime.equals("JoJo's Bizarre Adventure")) {
            return "https://bit.ly/2Sju4rR";
        }

        return "";
    }
}
