<!DOCTYPE html> <html>

<head>

	<title>Resultado</title>

</head>

<body>

<?php
$nome = $_POST["nome"];
$esciv= $_POST["esciv"];
$gender= $_POST["gender"];



if (($gender == "femia") && ($esciv == "CASADA")){
	
echo "Você, $nome, foi cadastrada com suscesso!";

}

else{

echo "Você, $nome, não é apto para ser cadastrado.";

}


?>

</body>

</html>
