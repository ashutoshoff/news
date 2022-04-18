import axios from "axios";

export function getNews() {
  let request;
  request = axios.get(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=a17bc6ce27b243eb9ab7b70a6cfd0298"
  );
  return request
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      throw error;
    });
}
