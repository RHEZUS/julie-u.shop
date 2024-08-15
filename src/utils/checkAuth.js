import apiClient from "@/plugins/axios";
import axios from "axios";
// The auth middleware checks if the user is authenticated
export async function checkAuth () {
  // Fetch the current user's details
  const response = await axios.get(`/api/user`).then(response =>{
    const user = response.data.user;
    return user;
  }).catch((error) =>{
    return false;
  });
}

export async function isAuthenticated(){
  const user = await checkAuth();
  if(user){
    return true;
  }
  return false;
}
