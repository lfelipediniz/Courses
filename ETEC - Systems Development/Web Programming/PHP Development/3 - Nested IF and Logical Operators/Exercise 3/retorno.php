<!DOCTYPE html> <html>

<head>

	<title></title>

</head>

<!-- 
- Infantil A – de 5 à 7 anos;
- Infantil B – de 8 à 10 anos;
- Juvenil A – de 11 à 13 anos;
- Juvenil B - de 14 à 17 anos;
- Senior – a partir de 18 anos.
-->

<body>

<?php
$idade = $_POST["idade"];
 

if ($idade < 5){

echo "Sinto muito, você não tem idade suficiente para se classificar em alguma categoria.";

}

else if (($idade >= 5) && ($idade <= 7)){
	
echo "Parabéns! Você é classificado à participar da categoria: Infantil A";

}

else if (($idade >= 8) && ($idade <= 10)){

echo "Parabéns! Você é classificado à participar da categoria: Infantil B";

}

else if (($idade >= 11) && ($idade <= 13)){

echo "Parabéns! Você é classificado à participar da categoria: Juvenil A";

}

else if (($idade >= 14) && ($idade <= 17)){

echo "Parabéns! Você é classificado à participar da categoria: Juvenil B";

}


else {

echo "Parabéns! Você é classificado à participar da categoria: Senior";

}


?>

</body>

</html>
