<script>
    import { fade, fly, } from 'svelte/transition';
	let visible = true;
</script>
  
{#if visible}
	<p in:fly="{{ y: 200, duration: 2000 }}" out:fade>
		Bienvenido a myApp!
	</p>
{/if}
  
<style>
  
  p {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #4cafaf;
    color: white;
    border-radius: 5px;
  }

 
  
</style>

