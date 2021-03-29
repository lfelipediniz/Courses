<?php

    $nome = $_POST['nome'];
    $dtNasc = $_POST['dtNasc'];
    $cpf = $_POST['cpf'];
    $email = $_POST['email'];

    include('conexao.php');

    try {
        $stmt = $pdo -> prepare("INSERT INTO tbCLiente VALUES(null, '$nome', '$dtNasc', '$cpf', '$email')");

        $stmt -> execute();

        $pdo = null;

        header("Location:../index.php");
    }
    catch (PDOException $e) {
        echo "Erro: ". $e -> getMessage();
    }

?>
