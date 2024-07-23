import apiClient from '@/plugins/axios';
import router from '@/router';
import { useToast } from 'vue-toastification';

export function logout() {
    /*const token = localStorage.getItem('token');

    if (!token) {
        this.toast.error('No token found.', { timeout: 2000 });
        return;
    }*/
   const toast = useToast();
    apiClient.post('/api/logout', {})
    .then(response => {
        if (response.data.status) {
            localStorage.removeItem('token');
            toast.success('Logged out successfully!', { timeout: 2000 });
            router.push('/login');
        } else {
            toast.error(response.data.message, { timeout: 2000 });
        }
    })
    .catch(error => {
        console.log('Error message: ', error);
        toast.error(error.message, { timeout: 2000 });
    });
}
