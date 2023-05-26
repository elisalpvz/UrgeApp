<script>

let correcto = false;
let nombre
let email
let contrasena

function manejadorEnviar (evento) {
    evento.preventDefault()
    correcto = true;
    setTimeout(function () {
      correcto = false;
    }, 4000);
    const datos = {
      nombre,
      email,
      contrasena
    }
    console.log(datos);
  }  
</script>
<!--html-->
<h2>Registro de Usuario</h2>
<form on:submit={manejadorEnviar}>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" bind:value={nombre} required>
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" bind:value={email} required>
  <label for="contrasena">Contraseña:</label>
  <input type="password" id="contrasena" name="contrasena" bind:value={contrasena}  required>

  <button>Registrarse</button>
</form>
<!--css-->
<style>
  h2 {
		margin-top: 0;
	}
</style>
		

	
	



