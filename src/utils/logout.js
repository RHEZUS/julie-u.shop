import apiClient from '@/plugins/axios';
import router from '@/router';
import { useToast } from 'vue-toastification';
import axios from "axios";

export function logout() {
   const toast = useToast();
    axios.post('/api/logout', {})
    .then(response => {
        console.log(response.data);
        toast.success('Logged out successfully!', { timeout: 2000 });
        router.push({ name: 'Login' });
    })
    .catch(error => {
        console.log('Error message: ', error);
        toast.error(error.message, { timeout: 2000 });
    });
}
