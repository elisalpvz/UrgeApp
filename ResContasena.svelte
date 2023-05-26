<script>
	let email = '';
	let nuevaContrasena = '';
	let confirmarContrasena = '';

  
	const reestablecerContrasena = () => {
	  console.log(`Email: ${email}, Nueva Contraseña: ${nuevaContrasena}, Confirmar Contraseña: ${confirmarContrasena}`);
	}
</script>
<!--PARTE DE HTML-->
<h2>Reestablecer Contraseña</h2>
<form>
	<label for="email">Correo electrónico:</label>
	<input type="email" id="email" name="email" bind:value={email} required>
	<label for="nueva-contrasena">Nueva Contraseña:</label>
	<input type="password" id="nueva-contrasena" name="nueva-contrasena" bind:value={nuevaContrasena} required>
	<label for="confirmar-contrasena">Confirmar Contraseña:</label>
	<input type="password" id="confirmar-contrasena" name="confirmar-contrasena" bind:value={confirmarContrasena} required>
<!--boton-->
	<button type="button" on:click={reestablecerContrasena}>Reestablecer</button>
</form>

<style>

  h2 {
	font-size: 24px;
	margin-bottom: 20px;
  }
  
  form {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
  }
  
  label {
	display: block;
	margin-bottom: 10px;
  }
  
  input[type="email"],
  input[type="password"] {
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 20px;
	width: 100%;
	max-width: 400px;
  }
  
  button {
	background-color: #3ee9ff;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
  }
  
  button:hover {
	background-color: #3ee9ff;
  }
  
  button:disabled {
	background-color: #aaa;
	cursor: default;
  }
  

  
</style>










