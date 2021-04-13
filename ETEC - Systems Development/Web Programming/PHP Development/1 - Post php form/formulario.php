
<!DOCTYPE html>
<head>
	<meta charset ="UTF-8"/>
	<title>Formulário</title>


	<style>

		/*Config dos Texto*/

	 h2 {

		color: #426951;
		font-family: "Times New Roman", Times, serif;


	}

	 h3 {

		color: black;
		
  		font-family: Arial, Helvetica, sans-serif;


		

	}

	</style>


	<style>

/* botão Cadastrar*/

	input[type=submit] {

  width: 25%;
  background-color: #34916b;
  color: white;
  padding: 14px 20px;
  margin: 0px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

	input[type=submit]:hover {
  background-color: #2c7d5c;
}
/*fundo*/

	div {
  border-radius: 5px;
  background-color: #b4edb6;
  padding: 20px;
  width: 28%;
  position: relative;
  left: 35%;
}

</style>

<style>

/*Config do form*/


input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 1px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=email], select {
  width: 100%;
  padding: 12px 20px;
  margin: 1px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>




</head>

	<body>
	
</body>
</br>
<div>
	<?php echo "<h2> CADASTRE-SE </h2> ";

	echo "<h3>Insira seus dados abaixo para receber as </br> novidades gratuitamente em seu e-mail</h3>"
	?>
 

	<form method="post" action="formularioretorno.php">


	<input type="text" placeholder="Seu nome" name="usuario"></p>
	<input type="email" placeholder="Seu e-mail"  name="email"></p>
	<p><input type="submit" value="Cadastrar" />

</div>

</form>


 </html>

