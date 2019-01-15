import http from "./index";

export const getRepoByPath = pathRepo => http.get(`repos/${pathRepo}`);
