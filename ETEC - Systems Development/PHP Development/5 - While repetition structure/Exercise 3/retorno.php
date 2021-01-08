<!DOCTYPE html> <html>

<head>

	<title>Resultado da Soma</title>
	<link rel="stylesheet" href="csshome.css">


</head>
<center>
<?php

$n = $_POST['n'];

echo "Números somados até $n";

?></center>



<body>
<center><div>
<?php



$i = 1;

do {

	if ($i < $n){
	echo "$i + ";}

	$i++;


	
} while($i<= $n);

$resultado = ($n + 1) * $n/2;
echo "$n = $resultado";
?>
</div></center>


</body>

</html>
