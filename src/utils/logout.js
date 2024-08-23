import apiClient from '@/plugins/axios';
import router from '@/router';
import { useToast } from 'vue-toastification';
import { authStore } from '@/store/auth';
import axios from "axios";

export function logout() {
   const toast = useToast();
    axios.post('/api/logout', {})
    .then(response => {
        authStore().clearUser();
        console.log(response.data);
        toast.success('Logged out successfully!', { timeout: 2000 });
        router.push({ name: 'Login' });
    })
    .catch(error => {
        //authStore().clearUser();
        //router.push({ name: 'Login' });
        console.log('Error message: ', error);
        toast.error('Failed to log out', { timeout: 2000 });
    });
}
