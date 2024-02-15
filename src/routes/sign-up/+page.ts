import type { PageLoad } from "./$types";

export const load: PageLoad = (): { email?: string; password?: string; passwordConfirmation?: string } => {
  let email: string | undefined = undefined;
  let password: string | undefined = undefined;
  let passwordConfirmation: string | undefined = undefined;

  return {
    email,
    password,
    passwordConfirmation,
  };
};
