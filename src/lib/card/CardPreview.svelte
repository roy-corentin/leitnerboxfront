<script lang="ts">
  export let card: Card;
  export let boxId: string;
  let show = false;
</script>

<div class="w-full card border border-2 items-center p-2">
  <div class="card-title text-center">
    <h2>{card.front}</h2>
  </div>
  <div class="card-body">
    {#if show}
      <p>{card.back}</p>
    {/if}
  </div>
  <div class="flex w-full gap-1">
    <button class="btn btn-secondary btn-sm w-1/2" on:click={() => (show = !show)}>{show ? "Hide" : "Show"}</button>
    <form class="btn btn-error btn-sm w-1/2" method="post" action="/box/[id]?/deleteCard">
      <input type="hidden" name="card_id" value={card.id} />
      <input type="hidden" name="deck_id" value={card.deckId} />
      <input type="hidden" name="box_id" value={boxId} />
      <button type="submit">Delete</button>
    </form>
  </div>
</div>
