import config from '../config/appConfig.js';

class UserService {

    async register(formData) {
        const url = `${config.apiBaseUrl}${config.endpoints.register}`;
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        };

        try {
            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.json();
                return {success: true, data};
            } else {
                const error = await response.json().catch(() => ({}));
                return {success: false, error: error.message || 'Not registered'};
            }
        } catch (error) {
            return {success: false, error: 'Registration failed'};
        }
    }

    async checkExistByEmail(email) {
        const url = `${config.apiBaseUrl}${config.endpoints.existsEmail}?email=${email}`;
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                return {data};
            }
        } catch (error) {
            return false;
        }
    }

}

export default new UserService();