import { redirect, type Handle } from "@sveltejs/kit";
import { parseUser } from "./parser/user";

const unProtectedRoutes = ["/login", "/sign-up"];

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");

  if (shouldBeRedirected(event.url.pathname, sessionId)) {
    throw redirect(303, "/login");
  }

  const meResponse = await fetch("http://localhost:3000/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${sessionId}` },
  });

  if (sessionId && meResponse.ok) {
    console.log("from hook server sessionId: ", sessionId);
    const userApi = await meResponse.json();
    event.locals.user = parseUser(userApi);
    event.locals.sessionId = sessionId;
    console.log("from hook server userApi: ", userApi);
  }

  const response = await resolve(event);

  return response;
};

function shouldBeRedirected(path: string, sessionId: string | undefined) {
  return !unProtectedRoutes.includes(path) && !sessionId;
}
