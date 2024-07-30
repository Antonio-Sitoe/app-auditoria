import axios from "axios";
// import { TOKEN } from "./token";

export const BASE_URL = "https://jellyfish-app-4sbpg.ondigitalocean.app/api";

const api = axios.create({
  baseURL: BASE_URL,
});

// api.interceptors.request.use(async (config) => {
//   let tokenRequest: string | undefined;
//   const { token } = parseCookies();
//   tokenRequest = token;
//   if (tokenRequest) config.headers.Authorization = `Bearer ${tokenRequest}`;

//   return config;
// });

export { api };
