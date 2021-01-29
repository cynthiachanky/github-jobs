const CORS_PROXY = 'https://cors-anywhere.herokuapp.com';
const GITHUB_JOB_API = 'https://jobs.github.com';

export const fetcher = async (url, query = {}) => {
  query = Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&');
  const req = `${CORS_PROXY}/${GITHUB_JOB_API}/${url}?${query}`;
  const res = await fetch(req);
  return await res.json();
};