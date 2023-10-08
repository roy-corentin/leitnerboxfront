<script>
  import Navbar from "$lib/Navbar.svelte";
  import "../app.css";

  export let data;
</script>

<Navbar user={data?.user} />
<div class="max-w-screen-lg mx-auto">
  <slot />
</div>
