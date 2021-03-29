<!-- bdLoja -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Rotinas PHP | SQL</title>
</head>
<body class="body">
    
    <section class="left">
        <?php

            include("php/conexao.php");

            echo "<table>";
            echo "<th>ID</th>";
            echo "<th>Nome</th>";
            echo "<th>Data de Nascimento</th>";
            echo "<th>CPF</th>";
            echo "<th>E-Mail</th>";
            include("php/consulta.php");
            echo "</table>";
            
            echo "<br />";

        ?>
    </section>

    <section class="right">
        <?php

            include("php/formulario.php");

        ?>
    </section>

</body>
</html>