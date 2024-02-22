<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  let { box } = data;
  console.log(box);
</script>

<div class="flex items-center justify-center mt-20">
  {#if box === undefined}
    <div class="loading loading-dots loading-lg" />
  {:else}
    <h2>{box.name}</h2>
  {/if}
</div>
