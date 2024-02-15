<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  let { box } = data;
  console.log(box);
</script>

<div>
  <h2>{box.name}</h2>
</div>
