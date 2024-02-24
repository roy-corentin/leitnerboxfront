import { parseBox, type LeitnerBoxApi } from "./box";

interface UserApi {
  email: string;
  leitner_box: LeitnerBoxApi[];
}

export function parseUser(userApi: UserApi): User {
  return {
    email: userApi.email,
    leitnerBoxes: userApi.leitner_box.map(parseBox),
  };
}
