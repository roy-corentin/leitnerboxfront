<script lang="ts">
  export let data;
  import BoxNewButton from "$lib/box/BoxNewButton.svelte";
  import BoxPreview from "$lib/box/BoxPreview.svelte";
  console.table(data);
</script>

<body>
  {#if data?.user}
    <div class="mt-10 grid md:grid-cols-3 place-items-center md:place-items-strecth gap-8">
      {#each data?.user.leitnerBoxes as box, i}
        <BoxPreview {box} index={i} />
      {/each}
      <BoxNewButton />
    </div>
  {/if}
</body>
