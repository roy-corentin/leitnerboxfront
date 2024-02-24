<script lang="ts">
  import type { PageData } from "./$types.js";

  export let form;
  export let data: PageData;

  let { email, password, passwordConfirmation } = data;
  let isEmailValid = false;
  $: email, (isEmailValid = email?.includes("@") ?? false);
</script>

<body>
  <div class="flex items-center justify-center h-screen">
    <form class="bg-white form-control p-8 rounded w-1/3" method="post" action="/sign-up">
      {#if form?.emailMissing}<p class="text-error">The Email field id required*</p>{/if}
      {#if form?.passwordMissing}<p class="text-error">The Password field id required*</p>{/if}
      {#if form?.error}<p class="text-error">{form.message}</p>{/if}
      <label for="email" class="label">
        <span class="label-text {isEmailValid ? 'text-success' : form?.emailMissing ? 'text-error' : ''}">Email</span>
      </label>
      <input
        class="input input-bordered input-sm {isEmailValid ? 'input-success' : form?.emailMissing ? 'input-error' : ''}"
        name="email"
        type="text"
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
        bind:value={password}
      />
      <label
        for="password-confirmation"
        class="label gap-2 {password ? (passwordConfirmation === password ? 'text-success' : 'text-error') : ''}"
      >
        <span>Password Confirmation</span>
      </label>
      <input
        class="input input-bordered input-sm {password
          ? passwordConfirmation === password
            ? 'input-success'
            : 'input-error'
          : ''}"
        name="password-confirmation"
        type="password"
        bind:value={passwordConfirmation}
      />
      <button class="btn btn-primary mt-8">SignUp</button>
    </form>
  </div>
</body>
