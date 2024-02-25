<script lang="ts">
  export let deck: Deck;
  const colors = ["secondary", "accent", "blue-400", "red-400", "green-400"];
</script>

<div class="w-36 card border border-2 flex items-center">
  <h3 class="card-title mt-5">{deck.level}</h3>
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
  <div class="card-actions py-2 mx-1">
    <label class="input input-xs w-full flex items-center justify-center grid grid-cols-2">
      <input class="text-center" type="number" value={deck.periodUnit} placeholder="period_unit" />
      <p>Times</p>
    </label>
    <label class="text-xs input-ghost flex w-full items-center justify-center grid grid-cols-3">
      <p class="text-right">Per</p>
      <select class="select select-xs text-center col-span-2" value={deck.periodType} placeholder="period_type">
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>
    </label>
  </div>
</div>
