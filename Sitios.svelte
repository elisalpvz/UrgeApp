<script>
  import Mapa from './Mapa.svelte';
  
 

    let currentSlide = 0;
    
    const slides = [
      { src: './public/dentista.png', alt: '' },
      { src: './public/dentista.png', alt: '' },
      { src: './public/vet.png', alt: '' },
      { src: './public/fisio.png', alt: '' }
    ];
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
    }

    function previousSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
</script>
<Mapa/>
<!--HTML-->
<div class="colabs">
  <img src="./Colaboradores.png" alt="Imagen">
</div>

<div class="carousel">
    <div class="slide" style="background-image: url({slides[currentSlide].src})">
      <h2>{slides[currentSlide].alt}</h2>
    </div>
    <div class="controls">
      <button on:click={previousSlide}>Anterior</button>
      <button on:click={nextSlide}>Siguiente</button>
    </div>
  </div>

  
<!--css-->  
<style>

    .carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 200px;
      width: 100%;
      overflow: hidden;
    }
   

    .slide {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-size: cover;
      background-position: center center;
      transition: opacity 0.5s ease;
      opacity: 1;
    }
  
    .slide h2 {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      width: 100%;
      opacity: 0.8;
      text-align: center;
    }
  
    .controls {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .controls button {
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px 20px;
      margin: 10px;
      cursor: pointer;
      opacity: 0.8;
    }
  
    .controls button:hover {
      opacity: 1;
    }


    img {
      height: 500px;
      width: 100%;
    }
</style>
  