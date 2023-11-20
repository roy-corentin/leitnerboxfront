<script lang="ts">
  export let data;
  import NewBoxButton from "$lib/box/ButtonNew.svelte";
  console.log(data);
</script>

<body>
  <h1>Welcome to SvelteKit</h1>
  {#if data?.user}
    <p>{data?.user?.email}</p>
  {/if}
  <div class="mt-20 grid md:grid-cols-4 place-items-center md:place-items-strecth gap-8">
    <NewBoxButton />
  </div>
</body>
