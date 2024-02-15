import type { PageLoad } from "./$types";

export const load: PageLoad = (): { email?: string; password?: string } => {
  let email: string | undefined = undefined;
  let password: string | undefined = undefined;

  return {
    email,
    password,
  };
};
