<script lang="ts">
  import DeckPreview from "$lib/deck/DeckPreview.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { box } = data;
  console.log(box);
  if (box && box.decks && box.decks[0]) box.decks[0].cardIds = ["1", "2", "3", "4"];
</script>

<div class="flex flex-col items-center justify-center mt-20 border">
  {#if box === undefined}
    <div class="loading loading-dots loading-lg" />
  {:else}
    <h1 class="text-4xl mb-10">{box.name}</h1>
    <div class="flex gap-2">
      {#each box.decks as deck}
        <DeckPreview {deck} />
      {/each}
    </div>
  {/if}
</div>
