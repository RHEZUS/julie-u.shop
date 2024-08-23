import { defineStore } from "pinia";

// Utility functions to manage localStorage
function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export const authStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: loadFromLocalStorage("isAuthenticated") || false,
    user: loadFromLocalStorage("user") || {},
  }),
  actions: {
    storeUser(isAuthenticated, user) {
      this.isAuthenticated = isAuthenticated;
      this.user = user;
      saveToLocalStorage("isAuthenticated", isAuthenticated);
      saveToLocalStorage("user", user);
    },
    clearUser() {
      this.isAuthenticated = false;
      this.user = {};
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    },
  },
  getters: {
    getAuthState() {
      return this.isAuthenticated;
    },
    getUser() {
      return this.user;
    },
  },
});
