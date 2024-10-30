import axios from "axios";

export const myGithubProfile = axios.create({
  baseURL: 'https://api.github.com/users',
});