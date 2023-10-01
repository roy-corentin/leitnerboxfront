import { fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

type MeJsonResponse = { email: string } | string;

export const load: PageServerLoad = async ({ parent, cookies }) => {
  await parent();
  const sessionId = cookies.get("sessionId");
  const response = await fetch("http://localhost:3000/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${sessionId}` },
  });
  const json: MeJsonResponse = await response.json();
  console.log(json);
  if (response.ok) return { user: json };
  else return fail(400, { error: true, message: json });
};
