<script>
  import "../app.css";
</script>

<nav class="navbar bg-base-100 border-b-2 border-primary-focus mb-4">
  <a class="navbar-start link-primary text-lg" href="/">LeitnerBox</a>
  <div class="navbar-end gap-3">
    <a class="text-accent" href="/login">Login</a>
    <a class="text-info" href="/sign-up">Sign-up</a>
  </div>
</nav>
<slot />
