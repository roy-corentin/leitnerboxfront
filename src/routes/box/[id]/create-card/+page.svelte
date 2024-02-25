<script lang="ts">
  import { afterNavigate, goto } from "$app/navigation";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { box_id } = data;

  export let previousPage: string | undefined;

  afterNavigate(({ from }) => {
    console.log(from);
    previousPage = from?.url.pathname;
  });

  function cancel() {
    if (previousPage) goto(previousPage);
  }
</script>

<div class="flex flex-col items-center w-full">
  <h1 class="text-5xl font-bold">New Card</h1>
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
          required
        />
        <textarea
          class="textarea textarea-bordered textarea-lg card-body border-2"
          rows="3"
          name="Description"
          placeholder="Description"
        />
      </div>
    </div>
    <input type="hidden" name="box_id" value={box_id} />
    <div class="md:col-span-2 flex flex-col md:flex-row md:justify-around gap-2 md:gap-0">
      <button class="btn btn-secondary md:w-1/3" type="button" on:click={cancel}>Cancel</button>
      <button class="btn btn-primary md:w-1/3" type="submit">Save</button>
    </div>
  </form>
</div>
