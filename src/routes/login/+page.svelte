<script lang="ts">
  import type { PageData, ActionData } from "./$types.js";

  export let form ActionData;
  export let data: PageData;

  let { email, password } = data;
  let isEmailValid = false;
  $: email, (isEmailValid = email?.includes("@") ?? false);
</script>

<div class="flex w-full items-center justify-center h-screen">
  <form class="bg-white form-control p-8 rounded" method="post" action="/login">
    {#if form?.emailMissing}<p class="text-error">The Email field is required*</p>{/if}
    {#if form?.passwordMissing}<p class="text-error">The Password field is required*</p>{/if}
    {#if form?.error}<p class="text-error">{form.message}</p>{/if}
    <label for="email" class="label">
      <span class="label-text {isEmailValid ? 'text-success' : form?.emailMissing ? 'text-error' : ''}">Email</span>
    </label>
    <input
      class="input input-bordered input-sm {isEmailValid ? 'input-success' : form?.emailMissing ? 'input-error' : ''}"
      name="email"
      type="text"
      autocomplete="email"
      formnovalidate={isEmailValid}
      bind:value={email}
    />
    <label for="password" class="label">
      <span class="label-text {password ? 'text-success' : form?.passwordMissing ? 'text-error' : ''}">Password</span>
    </label>
    <input
      class="input input-bordered input-sm {password ? 'input-success' : form?.passwordMissing ? 'input-error' : ''}"
      name="password"
      type="password"
      autocomplete="current-password"
      bind:value={password}
    />
    <button class="btn btn-primary mt-8">Login</button>
  </form>
</div>
