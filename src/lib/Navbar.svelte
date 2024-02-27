<script lang="ts">
  export let user: User | null | undefined;
</script>

<nav class="navbar bg-base-100 border-b-2 border-primary-focus mb-4 lg:px-12">
  <div class="navbar-start">
    <a class="link-primary text-lg" href="/">LeitnerBox</a>
  </div>
  <div class="navbar-end gap-3">
    {#if user}
      <p>{user.email}</p>
      <a
        class="border p-2 border-secondary rounded-md hover:bg-secondary text-secondary hover:text-secondary-content"
        href="/logout">Logout</a
      >
    {:else}
      <a class="border p-2 border-accent rounded-md hover:bg-accent text-accent hover:text-accent-content" href="/login"
        >Login</a
      >
      <a
        class="border p-2 border-secondary rounded-md hover:bg-secondary text-secondary hover:text-secondary-content"
        href="/sign-up">Sign-up</a
      >
    {/if}
  </div>
</nav>
