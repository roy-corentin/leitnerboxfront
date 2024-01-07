<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form method="POST" action="/create-box?/default_box" use:enhance>
  <button
    class="group md:first:ml-5 lg:first:ml-0 flex flex-col border-2 border-primary-content hover:border-primary h-72 w-52 items-center justify-center rounded-xl"
  >
    <p class="text-xl font-bold font-mono text-primary-content group-hover:text-primary">New Box</p>
    <svg
      class="fill-primary-content group-hover:fill-primary"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
      />
    </svg>
  </button>
</form>
