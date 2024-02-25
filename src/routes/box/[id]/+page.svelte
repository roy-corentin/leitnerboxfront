<script lang="ts">
  import DeckPreview from "$lib/deck/DeckPreview.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  let { box } = data;
  if (box && box.decks) console.log(box);
</script>

<div class="flex flex-col items-center justify-evenly px-20">
  {#if box === undefined}
    <div class="loading loading-dots loading-lg" />
  {:else if box === null}
    <h1 class="text-4xl">Box not found</h1>
  {:else}
    <h1 class="text-4xl mb-10">{box.name}</h1>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-10">
      {#each box.decks as deck}
        <DeckPreview {deck} />
      {/each}
    </div>
    <a href={`/box/{box.id}/create-card`} class="btn w-full bg-accent text-accent-content mt-10">New Card</a>
  {/if}
</div>
