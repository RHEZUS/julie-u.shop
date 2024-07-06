import apiClient from "@/plugins/axios";

export default function auth ({ next, store }){
  apiClient.get(`/api/user`, {
}).then((response) => {
    console.log(response);
    if (response.data.status === 200) {
      localStorage.activeUser = response.data.data;
      return next();
    }
    
    return next({ name: "Login" });
  }).catch((error) => {
    console.log(error);
    return next({ name: "Login" });
  })
}