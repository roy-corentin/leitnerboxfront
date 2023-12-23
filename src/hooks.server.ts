import { redirect, type Handle } from "@sveltejs/kit";
import { parseUser } from "./parser/user";

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
    const userApi = await meResponse.json();
    event.locals.user = parseUser(userApi);
  }

  const response = resolve(event);

  return response;
};
