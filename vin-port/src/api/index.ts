import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/vinMoreiraHenrique",
});

export const getRepos = async () => {
  
   return await api
    .get("/repos")
    .then((response) => {
      console.log(response.data);
      return response.data
    })
    .catch((error) => {
      console.log(error);
    });
  
};


