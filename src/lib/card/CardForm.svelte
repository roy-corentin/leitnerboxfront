<script lang="ts">
  export let card: Card | undefined;
  export let boxId: string;
  export let cancelHandler: () => void;
</script>

<form class="grid md:grid-cols-2 w-screen h-full px-2 mt-10 gap-6" method="post">
  <div class="flex flex-col items-center gap-4 w-full md:h-3/4">
    <p class="text-xl">Recto</p>
    <div class="card border w-full h-full gap-2 p-2">
      <div class="flex items-center w-full h-full">
        <textarea
          class="textarea textarea-bordered textarea-lg w-full card-title border-2 text-center"
          rows="1"
          name="question"
          placeholder="Question"
          value={card?.front ?? null}
          required
        />
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center gap-4 w-full md:h-3/4">
    <p class="text-xl">Verso</p>
    <div class="card border w-full h-full gap-2 p-2">
      <textarea
        class="textarea textarea-bordered textarea-lg card-body border-2"
        rows="1"
        name="answer"
        placeholder="Answer"
        value={card?.back ?? null}
        required
      />
      <textarea
        class="textarea textarea-bordered textarea-lg card-body border-2"
        rows="3"
        name="Description"
        placeholder="Description"
        value={card?.description ?? null}
      />
    </div>
  </div>
  <input type="hidden" name="box_id" value={boxId} />
  <div class="md:col-span-2 flex flex-col md:flex-row md:justify-around gap-2 md:gap-0">
    <button class="btn btn-secondary md:w-1/3" type="button" on:click={cancelHandler}>Cancel</button>
    <button class="btn btn-primary md:w-1/3" type="submit">Save</button>
  </div>
</form>
