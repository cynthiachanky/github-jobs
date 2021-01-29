import moment from 'moment';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com';
const GITHUB_JOB_API = 'https://jobs.github.com';

const getRequest = async (url, query = {}) => {
  query = Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&');
  const res = await fetch(`${url}?${query}`);
  return await res.json();
};

export const fetcher = async (url, query) => await getRequest(`${GITHUB_JOB_API}/${url}`, query);

export const corsFetcher = async (url, query) => await getRequest(`${CORS_PROXY}/${GITHUB_JOB_API}/${url}`, query);

export const momentConverter = datetime => moment(datetime, 'dddd MMMM DD HH:mm:ss [UTC] YYYY').fromNow();