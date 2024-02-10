import type { PageServerLoad, PageServerParentData } from "./$types";

export const load: PageServerLoad = async ({ parent }: { parent: PageServerParentData }) => {
    await parent();
};
