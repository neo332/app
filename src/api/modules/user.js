import http from '@/utils/http';

export default {
    getUserInfo () {
        return http({
            url: '',
            method: 'GET'
        });
    }
};
