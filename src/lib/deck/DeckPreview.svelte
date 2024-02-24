<script lang="ts">
  export let deck: Deck;
  const colors = ["secondary", "accent", "blue-400", "red-400", "green-400"];
</script>

<div class="w-36 card border flex items-center">
  <h3 class="card-title">{deck.level}</h3>
  <div class="card-body">
    <div class="stack">
      <div class="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
        {deck.cardIds.length}
      </div>
      {#each deck.cardIds as _cardId}
        <div class="grid w-32 h-20 rounded bg-{colors[Math.floor(Math.random() * colors.length)]}" />
      {/each}
    </div>
  </div>
  <div class="card-actions form-control my-2">
    <input type="text" class="select select-xs w-full" value={deck.periodType} placeholder="period_type" />
    <input type="number" class="input input-xs w-full" value={deck.periodUnit} placeholder="period_unit" />
  </div>
</div>
