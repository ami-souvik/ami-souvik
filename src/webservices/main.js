import axios from "axios";

export const get = async (d) => {
	const { url } = d
	delete d['url']
  return axios.get(url, {...d})
}

export const post = async () => {
	const { url, body } = d
	delete d['url']
	delete d['body']
  return axios.post(url, body, {...d})
}