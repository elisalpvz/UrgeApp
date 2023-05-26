
<script>
    export let nombreSitio = "Nombre del sitio";
    export let direccion = "Dirección del sitio";
    export let telefono = "Telefono del sitio";
</script>



<template>
    <div class="info-sitio">
      <h2>{nombreSitio}</h2>
      <p>{direccion}</p>
      <p>{telefono}</p>
      
    </div>
  </template>


<style>
  .info-sitio {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
  }

  h2 {
    font-size: 24px;
    margin-top: 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 10px;
  }

</style>