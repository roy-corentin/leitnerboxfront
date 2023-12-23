<script lang="ts">
  export let data;
  import NewBoxButton from "$lib/box/ButtonNew.svelte";
  console.log(data);
</script>

<body>
  {#if data?.user}
    <p>{data?.user?.email}</p>
    <div class="mt-20 grid md:grid-cols-4 place-items-center md:place-items-strecth gap-8">
      {#each data?.user.leitnerBoxes as box, i}
        <div class="w-64 h-64 bg-gray-200 rounded-lg shadow-lg">
          <div class="flex flex-col justify-between h-full">
            <p class="text-center text-2xl font-bold">{i + 1}</p>
            <p>{box.name}</p>
          </div>
        </div>
      {/each}
      <NewBoxButton />
    </div>
  {/if}
</body>
