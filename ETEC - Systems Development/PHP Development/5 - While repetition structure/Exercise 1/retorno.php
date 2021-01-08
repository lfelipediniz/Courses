<!DOCTYPE html> <html>

<head>

	<title>Resultado Fatorial</title>
	<link rel="stylesheet" href="csshome.css">


</head>


<body>
<center><div>
<?php
$fatorial = $_POST['fatorial'];

$resultado = 1;

echo "$fatorial! = ";

$i = 1;

while ($i <= $fatorial) {
$resultado *= $i;

if ($i < $fatorial){
echo "$i * "; }

$i++;

}

echo "$fatorial = $resultado";


?>
</div></center>


</body>

</html>
