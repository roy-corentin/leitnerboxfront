<script lang="ts">
  import { enhance } from "$app/forms";
</script>

<form method="POST" action="/create-box?/default_box" use:enhance>
  <div
    class="group md:first:ml-5 lg:first:ml-0 flex flex-col border-2 border-primary-content hover:border-primary h-80 w-64 items-center justify-center rounded-xl"
  >
    <input
      class="input input-bordered w-[90%] text-xl font-bold font-mono"
      required
      name="box_name"
      placeholder="New Box"
    />
    <button class="mt-12 border-2 border-transparent hover:border-primary rounded-full p-2">
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
  </div>
</form>
