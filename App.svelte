<script>
  import AccesoUsuario from './AccesoUsuario.svelte';
  import ResgistroUsu from './ResgistroUsu.svelte';
  import ResContasena from './ResContasena.svelte';  
  import Sitios from './Sitios.svelte';
  import Bienvenida from './Bienvenida.svelte';
  import Router from 'svelte-spa-router';


const routes = {
    '/': Bienvenida,
    '/AccesoUsuario': AccesoUsuario,
    '/RegistroUsu': ResgistroUsu,
    '/Sitios': Sitios,
    '/ResContasena': ResContasena
};
</script>
<!--llamamos a las rutas-->
<Router {routes}/>
<!-- Aqui la parte de html-->
<nav>
  <ul>
    <li><a href="#/">Inicio</a></li>
    <li><a href="#/AccesoUsuario">Acceso</a></li>
    <li><a href="#/RegistroUsu">Registro</a></li>
    <li><a href="#/Sitios">Lugares</a></li>
  </ul>
</nav>
<body>
<!-- App.svelte -->
<template>
  <img src="./Presentacion.png" alt="Imagen">
</template>

<!--aqui para que reestablezcan la contraseña-->
<footer>
  <a href="#/ResContasena">Has olvidado tu contraseña?</a>
  
    <p> © Designed by Elisa López ❤</p>
</footer>
</body>

<style>
  /* el color
  .nueva-cuenta {
    color: white;
    background: linear-gradient(#43e6f1, #2d76ff)
  }

  .restablecer-contraseña {
     color: white;
     background: linear-gradient(#43e6f1, #2d76ff)
  }
*/
  *{
  font-family: sans-serif;
  ;

  }

  nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 1rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }


  footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-style: italic
  

}

footer p {
  font-style: italic;
  color: #a0f3ed;
}

</style>
