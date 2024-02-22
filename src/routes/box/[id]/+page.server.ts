import type { PageServerLoad } from "./$types";
import { parseBox } from "../../../parser/box";

export const load: PageServerLoad = async ({ cookies, params }) => {
    console.log("from +page.server.ts params: ", params);
    const boxId = params["id"];
    const sessionId = cookies.get("sessionId");

    const boxResponse = await fetch(`http://localhost:3000/leitner_boxes/${boxId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${sessionId}` },
    });

    console.log("from +page.server.ts boxResponse: ", boxResponse);
    if (boxResponse.ok) {
        const boxApi = await boxResponse.json();
        const box = parseBox(boxApi);
        console.log("from +page.server.ts boxApi: ", boxApi);
        return {
            box,
        };
    }
};
