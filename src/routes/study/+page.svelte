<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  const { status, card, boxId } = data;
  let showBack = true;
</script>

<div class="w-screen flex flex-col items-center gap-12">
  <div class="flex flex-col items-center gap-4">
    <h1 class="text-4xl font-bold">Card to Study</h1>
    <h2 class="badge badge-lg {status === 'in-progress' ? 'badge-primary' : 'badge-secondary'} badge-outline py-4">
      {status}
    </h2>
  </div>
  {#if card}
    <div class="card border w-4/5 h-1/3 gap-2 p-2 items-center">
      <h2 class="card-title">{card.front}</h2>
      {#if showBack}
        <p class="card-body">{card.back}</p>
      {/if}
    </div>
    {#if showBack === false}
      <button class="btn btn-accent w-1/3" on:click={() => (showBack = true)}>Show</button>
    {/if}
    {#if showBack === true}
      <form method="POST" class="w-4/5 flex justify-between">
        <input type="hidden" name="cardId" value={card.id} />
        <input type="hidden" name="deckId" value={card.deckId} />
        <input type="hidden" name="boxId" value={boxId} />
        <button class="btn btn-error w-1/3" formaction="?/wrongAnswer">Wrong</button>
        <button class="btn btn-success w-1/3" formaction="?/rightAnswer">Right</button>
      </form>
    {/if}
  {/if}
</div>
