<?php

    $idCli = $_GET["id"];

    include('conexao.php');

    try {
        $stmt = $pdo -> prepare("DELETE FROM tbCliente WHERE idCli = '$idCli'");

        $stmt -> execute();

        $pdo = null;

        header("Location:../index.php");
    }
    catch (PDOException $e) {
        echo "Erro: ". $e -> getMessage();
    }

?>
