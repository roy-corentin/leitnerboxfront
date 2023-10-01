import { redirect, type Handle } from "@sveltejs/kit";

const unProtectedRoutes = ["/login", "/sign-up"];
export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");

  if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
    throw redirect(303, "/login");
  }
  const response = resolve(event);
  return response;
};
