import apiClient from "@/plugins/axios";
import axios from "axios";

// The auth middleware checks if the user is authenticated
export default function auth (allowedRoles = []) {
  return async function ({ next, store }) {
    try {
      // Fetch the current user's details
      const response = await axios.get(`/api/user/`);
      const user = response.data.user;

      // Check if the user is authenticated
      if (user) {
        // Check if the user's role is in the allowedRoles list
        if (allowedRoles.length === 0 || allowedRoles.includes(user.role)) {
          return next();
        } else {
          //console.warn(`Access denied. User role '${user.role}' is not in the allowed roles: ${allowedRoles.join(', ')}`);
          return next({ name: "homepage" }); // Change to a suitable route or name for access denied
        }
        //return next();
      } else {
        //console.warn(`Access denied. User is not authenticated`);
        return next({ name: "Login" }); // Change to a suitable route or name for access denied
      }
    } catch (error) {
      //console.error('Error fetching user:', error);
      return next({ name: "Login" }); // Redirect to login on error
    }
  }
}
