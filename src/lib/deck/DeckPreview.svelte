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
  <div class="card-actions form-control my-2">
    <label class="input input-xs w-full">
      <input type="number" class="w-1/2" value={deck.periodUnit} placeholder="period_unit" />
      Times
    </label>
    <label class="input input-xs w-full">
      Per
      <select class="select select-xs w-3/4" value={deck.periodType} placeholder="period_type">
        <option value="day">Day</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>
    </label>
  </div>
</div>
