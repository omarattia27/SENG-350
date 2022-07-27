export const API_URL = "https://dogsapi.origamid.dev/json";

interface ITOKEN_POST {
  username: string;
  password: string;
}

export function TOKEN_POST({ username, password }: ITOKEN_POST) {
  return {
    url: `${API_URL}/jwt-auth/v1/token`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    },
  };
}

export function USER_GET(token: string) {
  return {
    url: `${API_URL}/api/user`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}