import { redirect, type Handle } from "@sveltejs/kit";

const unProtectedRoutes = ["/login", "/sign-up"];
export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");

  if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
    throw redirect(303, "/login");
  }

  const user = await fetch("http://localhost:3000/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${sessionId}` },
  });
  const json: User = await user.json();

  event.locals.user = json;

  const response = resolve(event);

  return response;
};
