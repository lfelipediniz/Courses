function confirmar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var anonascimento = window.document.querySelector('input#input-1')
    // var imagem = window.document.querySelector('img#imagem')
    var res = window.document.querySelector('div#resultado')

    var pessoa = ''

    var imagem = document.getElementById('imagem')

    if (anonascimento.value.legth == 0 || anonascimento.value > ano) {
        window.alert('{Algo de errado não está certo} Verifique os dados e tente novamente')
    } else {
        var sexo = window.document.getElementsByName('radio-sexo')
        var idade = ano - Number(anonascimento.value)
        var genero = ''
        if (sexo[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade <= 14) {
                var pessoa = 'criança'
                imagem.src = "Imagens/near.gif"
                
            } else if (idade <=30) {
                var pessoa = 'jovem'
                imagem.src = "Imagens/light.gif"

            } else if (idade <= 50) {
                var pessoa = 'adulto'
                imagem.src = "Imagens/pai.gif"

            } else {
                var pessoa = 'idoso'
                imagem.src = "Imagens/watari.gif"
            }

        } else if (sexo[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade <= 14) {
                var pessoa = 'criança'
                imagem.src = "Imagens/sayu.gif"

            } else if (idade <=21) {
                var pessoa = 'jovem'
                imagem.src = "Imagens/misa.gif"

            } else if (idade <= 50) {
                var pessoa = 'adulta'
                imagem.src = "Imagens/naomi.gif"

            } else {
                var pessoa = 'idosa'
                imagem.src = "Imagens/randomvelha.gif"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero}, ${pessoa}, com ${idade} anos de idade`
    }
}