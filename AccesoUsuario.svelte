<script>
  import { fly, fade } from "svelte/transition";
  let error = false;
  let correcto = false;
  let enviado = false;

  const errorMensaje = "Todos los campos son obligatorios";

  function manejadorEnviar(e) {
    correcto = true;

    setTimeout(function () {
      correcto = false;
    }, 4000);
  }
</script>
<!--AQUI HTML-->
<h2>Ingresa a tu cuenta</h2>

{#if error == true}
  <p class="error-alert">{errorMensaje}</p>
{:else if correcto}
  <p class="error-alert" transition:fade={{ duration: 150 }}>
    Ya puedes ingresar!
  </p>
{/if}

<div class="container">
  <form
    id="surveyForm"
    class="mt-4"
    class:enviado
    on:submit|preventDefault={manejadorEnviar}
  >
    <div class="form-group">
      <input type="text" class="form-control" placeholder="name" required />
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="email" required />
    </div>
    <br />
    <br /> <!--hacemos un boton redondo-->
    <button class="small-round-button" on:click={() => (enviado = true)}>Entrar</button>
  </form>
</div>
<!--AQUI EL CSS-->
<style>
  h2 {
    color: white;
    margin-top: 0;
  }

  .container {
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
    max-width: 500px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .container form {
    display: flex;
    flex-direction: column;
  }
/*parte css del boton redondo*/
  .small-round-button {
    display: inline-block;
    border: none;
    border-radius: 50%;
    padding: 5px 10px;
    background-color: #43e6f1;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
  }

  .small-round-button:hover {
    background-color: #43e6f1;
  }

  .enviado input:invalid {
    border: 1px solid;
    margin-top: 10px;
    font-size: 14px;
  }

  .enviado input:focus:invalid {
    outline: 1px solid;
    margin-top: 10px;
    font-size: 14px;
  }

  .error-alert {
    border: 1px solid !important;
    padding: 6px;
    text-align: center;
    color: #c00;
    border-radius: 3px;
  }
</style>
