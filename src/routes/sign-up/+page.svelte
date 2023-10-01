<script lang="ts">
  export let form;
  export let data;
  let { email, password, passwordConfirmation } = data;
</script>

<body>
  <div class="flex items-center justify-center h-screen">
    <form class="bg-white form-control p-8 rounded w-1/3" method="post" action="/sign-up">
      {#if form?.missing}<p class="text-error">The email field id required*</p>{/if}
      {#if form?.error}<p class="text-error">{form.message}</p>{/if}
      <label for="email" class="label">
        <span class="label-text {email ? 'text-success' : form?.missing ? 'text-error' : ''}">Email</span>
      </label>
      <input
        class="input input-bordered input-sm {email ? 'input-success' : form?.missing ? 'input-error' : ''}"
        name="email"
        type="text"
        bind:value={email}
      />
      <label for="password" class="label">
        <span class="label-text {password ? 'text-success' : ''}">Password</span>
      </label>
      <input
        class="input input-bordered input-sm {password ? 'input-success' : ''}"
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
