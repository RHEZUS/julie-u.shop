import apiClient from "@/plugins/axios";
// The auth middleware checks if the user is authenticated
export async function checkAuth () {
    try {
      // Fetch the current user's details
      const response = await apiClient.get(`/api/user`).then(response =>{
        const user = response.data.user;
        return user;
      }).catch((error) =>{
        return false;
      });
    } catch (error) {
      return false;
    }
}
