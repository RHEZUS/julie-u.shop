import { createStore } from 'vuex';
import auth from './auth'; // Adjust path if needed

export default createStore({
  modules: {
    auth,
  },
});
