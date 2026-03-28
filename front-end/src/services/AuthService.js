import config from '../config/appConfig.js';

class AuthService {

    static async login(email, password) {
        const url = `${config.apiBaseUrl}${config.endpoints.authenticate}`;
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                const error = await response.json().catch(() => ({}));
                throw new Error(error.message || 'Not authenticated');
            }
            const data = await response.json();
            localStorage.setItem('jwt', data.token);
            localStorage.setItem('userId', data.userDTO.id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    static logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('userId');
    }

    static getToken() {
        return localStorage.getItem('jwt');
    }

    static isAuthenticated() {
        return !!localStorage.getItem('jwt');
    }

    static getUserId() {
        return localStorage.getItem('userId');
    }

}

export default AuthService;