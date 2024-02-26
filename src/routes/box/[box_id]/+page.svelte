<script lang="ts">
  import DeckPreview from "$lib/deck/DeckPreview.svelte";
  import CardPreview from "$lib/card/CardPreview.svelte";
  import type { PageData } from "./$types";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  export let data: PageData;
  let { box, cards, tab } = data;

  $: $page, (tab = $page.url.searchParams.get("tab") ?? "decks");
</script>

<div class="flex flex-col items-center justify-evenly">
  {#if box === undefined}
    <div class="loading loading-dots loading-lg" />
  {:else if box === null}
    <h1 class="text-4xl">Box not found</h1>
  {:else}
    <h1 class="text-4xl">{box.name}</h1>
    <div role="tablist" class="tabs tabs-bordered mb-5">
      <a href="?tab=decks" class="tab {tab === 'decks' && 'tab-active'}"> Decks </a>
      <a href="?tab=cards" class="tab {tab === 'cards' && 'tab-active'}"> Cards </a>
    </div>
    {#if tab === "decks"}
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {#each box.decks as deck}
          <DeckPreview {deck} />
        {/each}
      </div>
    {:else}
      <div class="grid grid-cols-2 md:grid-cols-3 gap-10">
        {#each cards as card}
          <CardPreview {card} boxId={box.id} />
        {/each}
      </div>
    {/if}
    <a href={`/box/${box.id}/create-card`} class="btn w-full bg-accent text-accent-content mt-10">New Card</a>
  {/if}
</div>
