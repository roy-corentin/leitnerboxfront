<script lang="ts">
  export let data;
  import NewBoxButton from "$lib/box/ButtonNew.svelte";
  console.table(data);
</script>

<body>
  {#if data?.user}
    <div class="mt-10 grid md:grid-cols-4 place-items-center md:place-items-strecth gap-8">
      {#each data?.user.leitnerBoxes as box, i}
        <div
          class="group flex flex-col border-2 border-primary-content hover:border-primary h-72 w-52 items-center justify-center rounded-xl"
        >
          <p class="text-xl font-bold font-mono text-primary-content group-hover:text-primary">
            {`${box.name} ${i + 1}`}
          </p>
        </div>
      {/each}
      <NewBoxButton />
    </div>
  {/if}
</body>
