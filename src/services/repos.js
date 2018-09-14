import http from '.';

export const getRepoByPath = (pathRepo) => http.get(`repos/${pathRepo}`);