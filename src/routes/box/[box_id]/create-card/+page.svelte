<script lang="ts">
  import { afterNavigate, goto } from "$app/navigation";
  import CardForm from "$lib/card/CardForm.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { boxId } = data;

  export let previousPage: string | undefined;

  afterNavigate(({ from }) => {
    previousPage = from?.url.href;
  });

  function cancelHandler() {
    if (previousPage) goto(previousPage);
  }
</script>

<div class="flex flex-col items-center w-full">
  <h1 class="text-5xl font-bold">New Card</h1>
  <CardForm card={undefined} {boxId} {cancelHandler} />
</div>
