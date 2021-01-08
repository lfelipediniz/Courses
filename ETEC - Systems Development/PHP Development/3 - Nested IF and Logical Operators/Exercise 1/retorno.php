<!DOCTYPE html> <html>

<head>

	<title>Resultado IMC</title>

</head>

<!-- 
A fórmula é IMC = peso / ( altura )2

IMC em adultos Condição:
Abaixo de 18,5 Abaixo do peso
Entre 18,5 e 25 Peso normal
Entre 25 e 30 Acima do peso -->

<body>

<?php
$peso = $_POST["peso"];
$altura = $_POST["altura"];
$imc = $peso / ( $altura * $altura );
 
if ($imc < 18.5){
	
echo "Seu IMC é " . number_format($imc, 2);
echo ", portanto você está Abaixo do peso.";

}

else if (($imc >= 18.5) && ($imc <= 25)) {

echo "Seu IMC é " . number_format($imc, 2);
echo ", portanto você está com o Peso Normal.";

}

else if (($imc > 25) && ($imc <= 30)) {

echo "Seu IMC é " . number_format($imc, 2); 
echo", portanto você está Acima do peso;";

}

else {

echo "Verifique os dados, e tente novamente!";

}


?>

</body>

</html>
