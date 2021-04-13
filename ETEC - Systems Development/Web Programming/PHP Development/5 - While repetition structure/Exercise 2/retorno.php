<!DOCTYPE html> <html>

<head>

	<title>Resultado Tabuada</title>
	<link rel="stylesheet" href="csshome.css">


</head>
<center>
<?php

$number = $_POST['number'];

echo "TABUADA DO $number";

?></center>



<body>
<center><div>
<?php



$i = 1;

do {

	$resultado = $i * $number;

	echo "$number x $i = $resultado";
	echo "</br>";
	
	$i++;
	
} while($i<=10);


?>
</div></center>


</body>

</html>
