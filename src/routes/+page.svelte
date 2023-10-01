<script lang="ts">
  export let data;
  console.log(data);
</script>

<body>
  <h1>Welcome to SvelteKit</h1>
  {#if data?.user}
    <p>{data?.user?.email}</p>
  {/if}
</body>
