<script>
  import Navbar from "$lib/Navbar.svelte";
  import "../app.css";

  export let data;
  const { user } = data;
</script>

<div class="flex flex-col h-screen">
  <Navbar {user} />
  <div class="flex flex-grow max-w-screen-lg mx-auto">
    <slot />
  </div>
</div>
