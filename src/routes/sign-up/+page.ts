export async function load() {
  let email: string | undefined = undefined;
  let password: string | undefined = undefined;
  let passwordConfirmation: string | undefined = undefined;

  return {
    email,
    password,
    passwordConfirmation,
  };
}
