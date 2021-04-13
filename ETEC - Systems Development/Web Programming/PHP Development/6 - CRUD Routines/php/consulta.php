<?php

    include("conexao.php");

    try {
        $stmt = $pdo -> prepare("SELECT * FROM tbCliente");

        $stmt -> execute();

        echo "<h1>Tabela Cliente</h1>";

        while ($row = $stmt -> fetch(PDO::FETCH_BOTH)) {
            echo "<tr>";
            echo "<td>" . $row['idCli'] . "</td>";
            echo "<td>" . $row['nomeCli'] . "</td>";
            echo "<td>" . $row['dtNascCli'] . "</td>";
            echo "<td>" . $row['cpfCli'] . "</td>";
            echo "<td>" . $row['emailCli'] . "</td>";
            echo "<td>" . "<a href='php/excluir.php?id=". $row['idCli']. "'>Excluir </a>" . "</td>";
            echo "</tr>";
        }
    } 
    catch (PDOException $e) {
        echo "Erro: ". $e -> getMessage();
    }

?>
