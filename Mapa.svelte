<script>
  import { onMount } from 'svelte';
  import L from 'leaflet';

  let map;
 
  onMount(() => {
    map = L.map('map',{
    center: [42.8805200, -8.5456900],
    zoom: 10
})//.setView([42.8805200, -8.5456900], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18,
    }).addTo(map);
  });
</script>



<div id="map"></div>




<style>
  #map {
    height: 500px;
    width: 100%;
    margin-bottom: 1rem;
  }
</style>