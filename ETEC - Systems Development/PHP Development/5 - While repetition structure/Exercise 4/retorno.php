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

while($i<= $n) {

	if ($i < $n){

	echo "$i + ";}

	$resultado += $i;

	$i++;

} 

echo "$n = $resultado";
?>
</div></center>


</body>

</html>
