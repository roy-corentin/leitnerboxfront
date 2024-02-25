<script lang="ts">
  export let card: Card;
</script>

<div class="w-36 card border border-2 flex items-center p-2">
  <div class="card-title">
    <h2>{card.front}</h2>
  </div>
  <div class="card-body">
    <p>{card.back}</p>
  </div>
</div>
