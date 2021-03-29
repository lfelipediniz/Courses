<?php

    // Acesso ao BD
    $servidor = "localhost";
    $banco = "bdLoja";
    $usuario = "root";
    $senha = "";

    $pdo = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);

?>
