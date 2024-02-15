import type { PageServerLoad, PageServerParentData } from "./$types";

export const load: PageServerLoad = async ({
  parent,
  locals,
}: {
  parent: PageServerParentData;
  locals: App.Locals;
}) => {
  await parent();
  return { user: locals.user };
};
