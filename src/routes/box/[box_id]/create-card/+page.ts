import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ params }) => {
  return {
    boxId: params["box_id"],
  };
};
