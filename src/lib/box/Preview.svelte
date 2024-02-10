<script lang="ts">
  export let box: { name: string };
  export let index: number;
</script>

<body>
  <div
    class="group flex flex-col border-2 border-primary-content hover:border-primary h-80 w-64 items-center justify-center rounded-xl"
  >
    <p class="text-xl font-bold font-mono text-primary-content group-hover:text-primary">
      {`${box.name} ${index + 1}`}
    </p>
  </div>
</body>
