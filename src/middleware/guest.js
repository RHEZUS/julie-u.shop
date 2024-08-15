import apiClient from "@/plugins/axios";
import axios from "axios";
export default function auth ({ next, store }){
  // If the user is authenticated, redirect to the home page
  
  if (checkAuth()) {
    return next({ name: "homepage" });
  } 

  return next()
}

function checkAuth(){
  // retrieve auth token
  const token = localStorage.getItem('token');

  // check if token exists
  if(!token){
    return false;
  }

  // if token exist try to fetch the user
  axios.get(`/api/user`).then((response) => {
    const user = response.data.user;
    if (user) {
      return true;
    }
  }).catch((error) => {
    return false;
  });
}