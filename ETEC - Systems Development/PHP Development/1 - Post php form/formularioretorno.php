<!DOCTYPE html>


<head>

<meta charset ="UTF-8"/>

 <title>Retorno</title>

</head>

<body>

<?php

$usuario     = $_POST['usuario'];
$email       = $_POST['email'];

echo "Nome do Cliente: $usuario </br>";
echo "E-mail do Cliente: $email </br>";
echo 'Dados enviados com suscesso.';
?>

</body>

</html>

