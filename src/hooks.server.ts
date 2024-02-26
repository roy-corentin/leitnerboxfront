import { redirect, type Handle } from "@sveltejs/kit";
import { parseUser } from "./parser/user";

const unProtectedRoutes = ["/login", "/sign-up"];

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");
  const currentPath = event.url.pathname;

  if (shouldBeRedirected(currentPath, sessionId)) {
    throw redirect(303, "/login");
  }

  const meResponse = await fetch("http://localhost:3000/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${sessionId}` },
  });

  if (sessionId && meResponse.ok) {
    const userApi = await meResponse.json();
    event.locals.user = parseUser(userApi);
    event.locals.sessionId = sessionId;
  } else if (!unProtectedRoutes.includes(currentPath)) {
    throw redirect(303, "/login");
  }

  const response = await resolve(event);

  return response;
};

function shouldBeRedirected(path: string, sessionId: string | undefined) {
  return !unProtectedRoutes.includes(path) && !sessionId;
}
