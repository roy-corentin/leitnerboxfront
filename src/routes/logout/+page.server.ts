import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, locals }) => {
  locals.user = null;
  locals.sessionId = null;
  cookies.delete("sessionId", { path: "/" });
  throw redirect(302, "/login");
};
