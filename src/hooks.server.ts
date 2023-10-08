import { redirect, type Handle } from "@sveltejs/kit";

const unProtectedRoutes = ["/login", "/sign-up"];
export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");

  if (!sessionId && !unProtectedRoutes.includes(event.url.pathname)) {
    throw redirect(303, "/login");
  }

  const meResponse = await fetch("http://localhost:3000/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${sessionId}` },
  });

  if (meResponse.ok) {
    const user: User = await meResponse.json();
    event.locals.user = user;
  }

  const response = resolve(event);

  return response;
};
