<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <section class="container">
        <h1>Inserir Dados</h1>

        <form method="POST" action="php/insercao.php">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" id="" /><br />
            <br />

            <label for="dtNasc">Data de Nascimento:</label>
            <input type="date" name="dtNasc" id=""><br />
            <br />

            <label for="cpf">CPF:</label>
            <input type="number" name="cpf" id="" /><br />
            <br />
            
            <label for="email">E-Mail:</label>
            <input type="text" name="email" id="" /><br />
            <br />

            <button type="submit"><strong>Enviar</strong></button>
        </form>
    </section>
</body>
</html>