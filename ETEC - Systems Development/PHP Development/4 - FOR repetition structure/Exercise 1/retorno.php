<!DOCTYPE html> <html>

<head>

	<title>Resultado Fatorial</title>
	<link rel="stylesheet" href="csshome.css">


</head>


<body>
<center><div>
<?php

	$fatorial = $_POST['fatorial'];

	
$multiplicador = 1;

echo "$fatorial! = ";
 for ($i = 1; $i <= $fatorial; $i++){
 	
 	$multiplicador = $multiplicador * $i;

 

 if ($i < $fatorial){

 	echo "$i x ";
 }

}

echo "$fatorial = $multiplicador";

?>
</div></center>


</body>

</html>
