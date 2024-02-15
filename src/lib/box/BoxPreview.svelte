<script lang="ts">
  export let box: LeitnerBox;
  export let index: number;
</script>

<body>
  <a href={`/box/${box.id}`}>
    <div
      class="group flex flex-col border-2 border-primary hover:border-secondary h-80 w-64 items-center justify-center rounded-xl"
    >
      <p class="text-xl font-bold font-mono text-primary group-hover:text-secondary">
        {`${box.name} ${index + 1}`}
      </p>
    </div>
  </a>
</body>
