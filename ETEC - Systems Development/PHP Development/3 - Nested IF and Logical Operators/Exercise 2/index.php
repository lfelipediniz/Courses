<!DOCTYPE html> <html>

<head>

	<title>Login</title>

</head>

    <link rel="stylesheet" href="csshome.css">

<body>



	<center>

		<h1>Cadastro</h1>

		<div>

	<form method = "post" action = "retorno.php">

<p>Digite seu nome:</br> </p>

	<input type = "text" name = "nome" /></p>

<p>Qual é seu sexo?</br> </p>

<p><i>(OBS: M = Masculino; F = Feminino)</br> </i></p>

<input type="radio" id="macho" name="gender" value="macho">
  <label for="macho">M</label>
  <input type="radio" id="femia" name="gender" value="femia">
  <label for="femia">F</label>
  <input type="radio" id="other" name="gender" value="other">
  <label for="other">Outro</label><br>

<p>Digite seu Estado Civil: <br />

	<p><input type= "text" name = "esciv" /></p>

<p><input type="submit" value="Enviar" />

<input type="reset" value="Resetar" / ></p>


</form>

	</div>

</center>

</body>

</html>
