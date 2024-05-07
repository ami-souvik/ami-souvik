import { get } from "./main";

export const owner = 'heres-sav'
const repositoryNames = [
    'react-vite-landing-page-bp'
]
export const fetchRepos = async () => {
    return get({url: `https://api.github.com/users/${owner}/repos`})
    .then(({ data }) => {
        return data.filter(repo => repositoryNames.includes(repo.name))
    });
}

export const fetchARepo = async (repo) => {
    return get({url: `https://api.github.com/repos/${owner}/${repo}`})
    .then(({ data }) => data);
}