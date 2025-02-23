import axios from "axios";

export const axionsInstance = axios.create({
  baseURL: "https://5897f48c88358dfa.mokky.dev",
  timeout: 1000,
  headers: {
    Accept: "appLication/json",
  },
});
