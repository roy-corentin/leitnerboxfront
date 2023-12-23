interface UserApi {
  email: string;
  leitner_box: { email: string; id: string; name: string; user_id: string; cards_id: string[] }[];
}

export function parseUser(userApi: UserApi): User {
  return {
    email: userApi.email,
    leitnerBoxes: userApi.leitner_box,
  };
}
